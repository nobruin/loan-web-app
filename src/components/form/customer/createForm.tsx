import { useState, type ChangeEvent } from "react";
import { TextField, Button, Box } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import type { CustomerRequest } from "../../../types/customer";
import {
  formatCPF,
  formatPhone,
  removeNonNumeric,
  isValidCPF,
  isValidPhone,
} from "../../common/masks";

type ErrorsState = { cpf: string; phone: string };

interface Props {
  onSubmit: (data: CustomerRequest) => void;
  loading?: boolean;
}

const validationConfigs = {
  cpf: {
    formatter: formatCPF,
    validator: isValidCPF,
    requiredLength: 11,
    errorMessage: "Invalid CPF",
  },
  phone: {
    formatter: formatPhone,
    validator: isValidPhone,
    requiredLength: 10,
    errorMessage: "Invalid phone",
  },
};

export function CustomerForm({ onSubmit, loading }: Props) {
  const [form, setForm] = useState<CustomerRequest>({
    fullName: "",
    cpf: "",
    birthDate: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState<ErrorsState>({
    cpf: "",
    phone: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Cast 'name' to a valid key of our validation map
    const fieldName = name as keyof typeof validationConfigs;

    // Check if the field has a validation/formatting configuration
    if (fieldName in validationConfigs) {
      const config = validationConfigs[fieldName];

      // 1. Apply formatting
      formattedValue = config.formatter(value);

      // 2. Execute validation
      const numericValue = removeNonNumeric(formattedValue);
      let error = "";
      console.log("Validating", fieldName, numericValue.length);
      console.log("requiredLength", config.requiredLength);

      if (numericValue.length < config.requiredLength) {
        if (!config.validator(formattedValue)) {
          error = config.errorMessage;
        }
      }

      console.log("error", error);

      // 3. Update the error state
      setErrors((prev) => ({
        ...prev,
        [fieldName]: error,
      }));
    }

    // 4. Update the form state with the formatted value
    setForm((prev) => ({ ...prev, [name]: formattedValue }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Final validation check for submit
    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (hasErrors) {
      console.log("Form has validation errors.");
      return;
    }

    const cleaned: CustomerRequest = {
      ...form,
      // Ensure that the data sent to the backend only contains numbers
      cpf: removeNonNumeric(form.cpf),
      phone: form.phone ? removeNonNumeric(form.phone) : "",
    };

    onSubmit(cleaned);
  };

  // Consolidates all conditions that disable the submit button
  const isFormInvalid =
    loading ||
    !!errors.cpf ||
    !!errors.phone ||
    !form.fullName || // Check for required fields (can be expanded)
    !form.cpf ||
    !form.birthDate;

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" gap={2}>
        {/* Non-masked fields */}
        <TextField
          label="Nome Completo"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          required
        />
        <TextField
          label="Data de Nascimento"
          name="birthDate"
          type="date"
          value={form.birthDate}
          onChange={handleChange}
          required
          slotProps={{ inputLabel: { shrink: true } }}
        />

        {/* CPF Field (masked and validated via handleChange) */}
        <TextField
          label="CPF"
          name="cpf"
          value={form.cpf}
          onChange={handleChange}
          placeholder="000.000.000-00"
          inputProps={{ requiredLength: 14 }}
          required
          error={!!errors.cpf}
          helperText={errors.cpf}
          slotProps={{ inputLabel: { shrink: true } }}
        />

        {/* Phone Field (masked and validated via handleChange) */}
        <TextField
          label="Telefone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="(00) 00000-0000"
          inputProps={{ requiredLength: 15 }}
          error={!!errors.phone}
          helperText={errors.phone}
          slotProps={{ inputLabel: { shrink: true } }}
        />

        <TextField
          label="Endereço"
          name="address"
          value={form.address}
          onChange={handleChange}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
          disabled={isFormInvalid}
        >
          {loading ? "Salvando..." : "Salvar"}
        </Button>
      </Box>
    </form>
  );
}
