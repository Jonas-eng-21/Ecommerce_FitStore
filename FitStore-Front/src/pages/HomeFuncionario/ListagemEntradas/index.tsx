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
  { id: "valorTotal", label: "Valor Total", minWidth: 100 },
  { id: "quantidadeTotal", label: "Quantidade Total", minWidth: 100 },
  { id: "nomeProduto", label: "Nome do Produto", minWidth: 150 },
  { id: "categoriaProduto", label: "Categoria", minWidth: 150 },
  { id: "precoProduto", label: "Preço Produto", minWidth: 100 },
  { id: "quantidade", label: "Quantidade", minWidth: 100 },
  { id: "valorCusto", label: "Valor Custo", minWidth: 100 },
];

interface ItemEntrada {
  id: number;
  produtoId: number;
  nomeProduto: string;
  categoriaProduto: string;
  precoProduto: number;
  quantidade: number;
  valor: number;
  valorCusto: number;
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
  const [entradas, setEntradas] = useState<Entrada[]>([]);

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
                      if (column.id === "id") {
                        value = entrada.id;
                      } else if (column.id === "valorTotal") {
                        value = entrada.valorTotal;
                      } else if (column.id === "quantidadeTotal") {
                        value = entrada.quantidadeTotal;
                      } else if (column.id === "nomeProduto") {
                        value = entrada.itensEntrada
                          .map((item) => item.nomeProduto)
                          .join(", ");
                      } else if (column.id === "categoriaProduto") {
                        value = entrada.itensEntrada
                          .map((item) => item.categoriaProduto)
                          .join(", ");
                      } else if (column.id === "precoProduto") {
                        value = entrada.itensEntrada
                          .map((item) => item.precoProduto)
                          .join(", ");
                      } else if (column.id === "quantidade") {
                        value = entrada.itensEntrada
                          .map((item) => item.quantidade)
                          .join(", ");
                      } else if (column.id === "valorCusto") {
                        value = entrada.itensEntrada
                          .map((item) => item.valorCusto)
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
