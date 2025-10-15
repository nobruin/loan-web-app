// src/utils/masks.ts

/**
 * Removes all non-numeric characters from a string
 */
export const removeNonNumeric = (value: string): string => {
  return value.replace(/\D/g, "");
};

/**
 * Applies CPF mask (000.000.000-00)
 */
export const formatCPF = (value: string): string => {
  const numbers = removeNonNumeric(value);

  if (numbers.length <= 3) return numbers;
  if (numbers.length <= 6) return `${numbers.slice(0, 3)}.${numbers.slice(3)}`;
  if (numbers.length <= 9)
    return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6)}`;
  return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6, 9)}-${numbers.slice(9, 11)}`;
};

/**
 * Applies phone mask
 * Format: (00) 00000-0000 for mobile or (00) 0000-0000 for landline
 */
export const formatPhone = (value: string): string => {
  const numbers = removeNonNumeric(value);

  if (numbers.length <= 2) return numbers;
  if (numbers.length <= 6)
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  if (numbers.length <= 10)
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
};

/**
 * Applies CEP mask (00000-000)
 */
export const formatCEP = (value: string): string => {
  const numbers = removeNonNumeric(value);

  if (numbers.length <= 5) return numbers;
  return `${numbers.slice(0, 5)}-${numbers.slice(5, 8)}`;
};

/**
 * Applies CNPJ mask (00.000.000/0000-00)
 */
export const formatCNPJ = (value: string): string => {
  const numbers = removeNonNumeric(value);

  if (numbers.length <= 2) return numbers;
  if (numbers.length <= 5) return `${numbers.slice(0, 2)}.${numbers.slice(2)}`;
  if (numbers.length <= 8)
    return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5)}`;
  if (numbers.length <= 12)
    return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5, 8)}/${numbers.slice(8)}`;
  return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5, 8)}/${numbers.slice(8, 12)}-${numbers.slice(12, 14)}`;
};

/**
 * Applies date mask (DD/MM/YYYY)
 */
export const formatDate = (value: string): string => {
  const numbers = removeNonNumeric(value);

  if (numbers.length <= 2) return numbers;
  if (numbers.length <= 4) return `${numbers.slice(0, 2)}/${numbers.slice(2)}`;
  return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4, 8)}`;
};

/**
 * Applies Brazilian currency mask (R$ 0.000,00)
 */
export const formatCurrency = (value: string | number): string => {
  const numbers = removeNonNumeric(String(value));
  const numberValue = Number(numbers) / 100;

  return numberValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

/**
 * Validates CPF
 */
export const isValidCPF = (cpf: string): boolean => {
  const numbers = removeNonNumeric(cpf);

  if (numbers.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(numbers)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(numbers.charAt(i)) * (10 - i);
  }
  let digit = 11 - (sum % 11);
  if (digit > 9) digit = 0;
  if (digit !== parseInt(numbers.charAt(9))) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(numbers.charAt(i)) * (11 - i);
  }
  digit = 11 - (sum % 11);
  if (digit > 9) digit = 0;
  if (digit !== parseInt(numbers.charAt(10))) return false;

  return true;
};

/**
 * Validates Brazilian phone number
 */
export const isValidPhone = (phone: string): boolean => {
  const numbers = removeNonNumeric(phone);
  return numbers.length === 10 || numbers.length === 11;
};

/**
 * Validates CEP
 */
export const isValidCEP = (cep: string): boolean => {
  const numbers = removeNonNumeric(cep);
  return numbers.length === 8;
};
