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
import { listarVendasAPI } from "../../../services/vendaService";

interface Column {
    id: string;
    label: string;
    minWidth?: number;
    align?: "right";
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: "valorTotal", label: "Valor Total", minWidth: 100 },
    { id: "nomeProduto", label: "Nome do Produto", minWidth: 150 },
    { id: "categoriaProduto", label: "Categoria", minWidth: 150 },
    { id: "precoProduto", label: "Preço Produto", minWidth: 100 },
    { id: "quantidade", label: "Quantidade", minWidth: 100 },
];

interface ItemVenda {
    id: number;
    produtoId: number;
    nomeProduto: string;
    categoriaProduto: string;
    precoProduto: number;
    quantidade: number;
    valor: number;
}

interface Venda {
    id: number;
    valorTotal: number;
    quantidadeTotal: number;
    itensVenda: ItemVenda[];
}

export default function ExibirVendas() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [vendas, setVendas] = useState<Venda[]>([]);  // Alterado para armazenar vendas

    useEffect(() => {
        async function fetchVendas() {
            const data = await listarVendasAPI();
            if (data) {
                setVendas(data);
            }
        }
        fetchVendas();
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
                        {vendas
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((venda) => {
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={venda.id}
                                    >
                                        {columns.map((column) => {
                                            let value;
                                            if (column.id === "valorTotal") {
                                                value = venda.valorTotal;
                                            } else if (column.id === "nomeProduto") {
                                                value = venda.itensVenda
                                                    .map((item) => item.nomeProduto)
                                                    .join(", ");
                                            } else if (column.id === "categoriaProduto") {
                                                value = venda.itensVenda
                                                    .map((item) => item.categoriaProduto)
                                                    .join(", ");
                                            } else if (column.id === "precoProduto") {
                                                value = venda.itensVenda
                                                    .map((item) => item.precoProduto)
                                                    .join(", ");
                                            } else if (column.id === "quantidade") {
                                                value = venda.itensVenda
                                                    .map((item) => item.quantidade)
                                                    .join(", ");
                                            } else {
                                                value = venda[column.id as keyof Venda];
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
                count={vendas.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
