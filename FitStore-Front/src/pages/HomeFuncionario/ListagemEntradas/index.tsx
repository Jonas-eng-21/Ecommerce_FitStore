import React, { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { listarEntradasAPI } from "../../../services/entradaService";

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "id", label: "ID Entrada", minWidth: 100 },
  { id: "valorTotal", label: "Valor Total", minWidth: 100 },
  { id: "quantidadeTotal", label: "Quantidade Total", minWidth: 100 },
  { id: "itens", label: "Itens da Entrada", minWidth: 300 },
];

interface ItemEntrada {
  id: number;
  produtoId: number;
  nomeProduto: string;
  quantidade: number;
  valor: number;
}

interface Entrada {
  id: number;
  valorTotal: number;
  quantidadeTotal: number;
  itensEntrada: ItemEntrada[];
}

export default function ListagemEntradas() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [entradas, setEntradas] = useState<Entrada[]>([]); // Estado para armazenar as entradas

  useEffect(() => {
    async function fetchEntradas() {
      const data = await listarEntradasAPI();
      if (data) {
        setEntradas(data);
      }
    }
    fetchEntradas();
  }, []);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {entradas
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((entrada) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={entrada.id}
                  >
                    {columns.map((column) => {
                      let value;
                      if (column.id === "itens") {
                        value = entrada.itensEntrada
                          .map(
                            (item) =>
                              `${item.nomeProduto} (Qtd: ${item.quantidade})`
                          )
                          .join(", ");
                      } else {
                        value = entrada[column.id as keyof Entrada];
                      }
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={entradas.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
