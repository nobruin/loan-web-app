import { useState } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import type { CustomerRequest, CustomerResponse } from "../types/customer";
import { CustomerForm } from "../components/form/customer/createForm";
import { useCustomerApi } from "../api/customerApi";

export default function Register() {
  const { createCustomer } = useCustomerApi();
  const [loading, setLoading] = useState(false);
  const [customer, setCustomer] = useState<CustomerResponse | null>(null);

  const handleSubmit = async (data: CustomerRequest) => {
    try {
      setLoading(true);
      const result = await createCustomer(data);
      setCustomer(result);
      alert("Cliente cadastrado com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar cliente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Cadastro de Cliente
      </Typography>

      <CustomerForm onSubmit={handleSubmit} loading={loading} />

      <Box display="flex" gap={2} mt={3}>
        <Button
          component={Link}
          to="/"
          variant="outlined"
          startIcon={<ArrowBackIcon />}
        >
          Voltar
        </Button>
      </Box>

      {customer && (
        <Box mt={3}>
          <Typography variant="h6">Cliente criado:</Typography>
          <pre>{JSON.stringify(customer, null, 2)}</pre>
        </Box>
      )}
    </Container>
  );
}
