import {
  Typography,
  TextField,
  Button,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { useState } from "react";
import Layout from "../components/Layout";

export default function Register() {
  const [form, setForm] = useState({
    fullName: "",
    cpf: "",
    birthDate: "",
    address: "",
    phone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Mock - dados enviados:", form);
    alert("Cadastro realizado com sucesso (mock)!");
  };

  return (
    <Layout>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' }, 
        gap: 4,
        width: '100%'
      }}>
        {/* Formulário */}
        <Box sx={{ flex: 1 }}>
          <Card sx={{ p: 2, boxShadow: 3, borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Cadastre-se para simular seu empréstimo
              </Typography>
              <Box display="flex" flexDirection="column" gap={2}>
                <TextField
                  label="Nome Completo"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                />
                <TextField
                  label="CPF"
                  name="cpf"
                  value={form.cpf}
                  onChange={handleChange}
                  required
                />
                <TextField
                  label="Data de Nascimento"
                  type="date"
                  slotProps={{ inputLabel: { shrink: true } }}
                  name="birthDate"
                  value={form.birthDate}
                  onChange={handleChange}
                  required
                />
                <TextField
                  label="Endereço"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                />
                <TextField
                  label="Telefone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
                <TextField
                  label="E-mail"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                />

                <Box display="flex" gap={2}>
                  <Button
                    component={Link}
                    to="/"
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                  >
                    Voltar
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon />}
                    onClick={handleSubmit}
                  >
                    Salvar
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Marketing */}
        <Box sx={{ 
          flex: 1,
          mt: { xs: 4, md: 0 }
        }}>
          <Typography variant="h4" gutterBottom>
            Vantagens do nosso empréstimo
          </Typography>
          <Typography variant="body1" gutterBottom>
            ✅ Dinheiro rápido na conta <br />
            ✅ Taxas justas a partir de 1,5% a.m. <br />
            ✅ 100% online e seguro <br />
            ✅ Sem burocracia
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
}