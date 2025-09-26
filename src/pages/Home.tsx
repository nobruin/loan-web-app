import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";
import Layout from "../components/Layout";

export default function Home() {
  const { isAuthenticated, user } = useAuth0();

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Welcome {isAuthenticated ? user?.name || "User" : "Guest"}
      </Typography>

      {isAuthenticated && (
        <Box display="flex" flexDirection="column" gap={2} mt={2}>
          <Button variant="contained" component={Link} to="/loan">
            Apply for Loan
          </Button>
          <Button variant="outlined" component={Link} to="/register">
            Register
          </Button>
        </Box>
      )}
    </Layout>
  );
}
