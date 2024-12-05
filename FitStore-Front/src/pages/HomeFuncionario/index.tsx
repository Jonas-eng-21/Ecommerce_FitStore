import React from "react";
import { Box, Tab } from "@mui/material";
import Footer from "../../components/Footer";
import Navbar from "../../components/NavBar";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CadastroCliente from "../Register/CadastroCliente";
import CadastroEntrada from "./CadastroEntrada";

export default function HomeFuncionario() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <Navbar />
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Cadastro de Entradas" value="1" />
              <Tab label="Listagem de Entradas" value="2" />
              <Tab label="Vendas" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <CadastroEntrada/>
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
      <Footer />
    </div>
  );
}
