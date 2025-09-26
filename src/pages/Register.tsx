import { useState } from "react";
import { Typography, TextField, Button, Box } from "@mui/material";
import Layout from "../components/Layout";

export default function Register() {
  const [form, setForm] = useState({
    fullName: "",
    cpf: "",
    birthDate: "",
    address: "",
    bankAccount: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Dados enviados:", form);
    alert("Cadastro realizado com sucesso (mock)!");
  };

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Cadastro
      </Typography>

      <Box display="flex" flexDirection="column" gap={2}>
        <TextField label="Nome Completo" name="fullName" value={form.fullName} onChange={handleChange} />
        <TextField label="CPF" name="cpf" value={form.cpf} onChange={handleChange} />
        <TextField
          label="Data de Nascimento"
          type="date"
           slotProps={{
            inputLabel: { shrink: true }
        }}
          name="birthDate"
          value={form.birthDate}
          onChange={handleChange}
        />
        <TextField label="Endereço" name="address" value={form.address} onChange={handleChange} />
        <TextField label="Conta Bancária" name="bankAccount" value={form.bankAccount} onChange={handleChange} />
        <Button variant="contained" onClick={handleSubmit}>
          Cadastrar
        </Button>
      </Box>
    </Layout>
  );
}
