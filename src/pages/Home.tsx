import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export default function Home() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Loan App
          </Typography>
          {isAuthenticated ? (
            <Button
              color="inherit"
              startIcon={<LogoutIcon />}
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Logout
            </Button>
          ) : (
            <Button
              color="inherit"
              startIcon={<LoginIcon />}
              onClick={() => loginWithRedirect()}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Bem vindo {isAuthenticated ? user?.name || "User" : "Visitante"}!
        </Typography>

        {isAuthenticated && (
          <Box display="flex" flexDirection="column" gap={2} mt={2}>
            <Button
              variant="contained"
              component={Link}
              to="/loan"
              startIcon={<AttachMoneyIcon />}
            >
              Solicitar empréstimo
            </Button>
            <Button
              variant="outlined"
              component={Link}
              to="/register"
              startIcon={<PersonAddIcon />}
            >
              Crie sua conta
            </Button>
          </Box>
        )}
      </Container>
    </>
  );
}
