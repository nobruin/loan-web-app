import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Typography, Button, Box } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Layout from "../components/Layout";

export default function Home() {
  const { isAuthenticated, user } = useAuth0();

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Bem-vindo {isAuthenticated ? user?.name || "Usuário" : "Visitante"}
      </Typography>

      {isAuthenticated && (
        <Box display="flex" flexDirection="column" gap={2} mt={2}>
          <Button
            variant="contained"
            component={Link}
            to="/loan"
            startIcon={<AttachMoneyIcon />}
          >
            Solicitar Empréstimo
          </Button>
          <Button
            variant="outlined"
            component={Link}
            to="/register"
            startIcon={<PersonAddIcon />}
          >
            Cadastro
          </Button>
        </Box>
      )}
    </Layout>
  );
}
