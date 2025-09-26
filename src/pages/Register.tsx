import { Container, Typography, TextField, Button, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SaveIcon from "@mui/icons-material/Save";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Cadastro
      </Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField label="Nome Completo" />
        <TextField label="CPF" />
        <TextField label="Data de Nascimento" type="date" InputLabelProps={{ shrink: true }} />
        <TextField label="Endereço" />
        <TextField label="Conta Bancária" />
        <Box display="flex" gap={2}>
          <Button component={Link} to="/" variant="outlined" startIcon={<ArrowBackIcon />}>
            Voltar
          </Button>
          <Button variant="contained" color="primary" startIcon={<SaveIcon />}>
            Salvar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
