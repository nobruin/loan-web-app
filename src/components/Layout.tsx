import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
} from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          {/* Botão de voltar (só aparece fora da Home) */}
          {!isHome && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="back"
              onClick={() => navigate(-1)}
              sx={{ mr: 2 }}
            >
              <ArrowBackIcon />
            </IconButton>
          )}

          {/* Nome da aplicação que leva pra Home */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Loan App
          </Typography>

          {/* Login/Logout */}
          {isAuthenticated ? (
            <Button
              color="inherit"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Logout
            </Button>
          ) : (
            <Button color="inherit" onClick={() => loginWithRedirect()}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>{children}</Container>
    </>
  );
}
