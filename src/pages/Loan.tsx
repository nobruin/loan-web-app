import { Container, Typography, Button, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import { Link } from "react-router-dom";

export default function Loan() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Solicitar Empréstimo
      </Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        <Button variant="contained" startIcon={<RequestQuoteIcon />}>
          Enviar Pedido
        </Button>
        <Button component={Link} to="/" variant="outlined" startIcon={<ArrowBackIcon />}>
          Voltar
        </Button>
      </Box>
    </Container>
  );
}
