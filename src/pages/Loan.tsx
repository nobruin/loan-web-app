import { Typography, Button, Box, Card, CardContent } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function Loan() {
  return (
    <Layout>
      <Card sx={{ p: 2, boxShadow: 3, borderRadius: 3, maxWidth: 500 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Solicitar Empréstimo
          </Typography>
          <Box display="flex" flexDirection="column" gap={2}>
            <Button variant="contained" startIcon={<RequestQuoteIcon />}>
              Enviar Pedido
            </Button>
            <Button
              component={Link}
              to="/"
              variant="outlined"
              startIcon={<ArrowBackIcon />}
            >
              Voltar
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Layout>
  );
}
