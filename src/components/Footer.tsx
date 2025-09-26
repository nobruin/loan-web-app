import { Box, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "grey.900",
        color: "grey.100",
        py: 3,
        mt: 6,
        textAlign: "center",
      }}
    >
      <Typography variant="body2">
        © 2025 LoanApp - Todos os direitos reservados
      </Typography>
      <Typography variant="body2">
        <Link href="/privacy" color="inherit" underline="hover">
          Política de Privacidade
        </Link>{" "}
        |{" "}
        <Link href="/terms" color="inherit" underline="hover">
          Termos de Uso
        </Link>
      </Typography>
    </Box>
  );
}
