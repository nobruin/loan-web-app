export interface CustomerRequest {
  fullName: string;
  cpf: string;
  birthDate: string; // ISO string (ex: '1990-05-10')
  address: string;
  phone?: string;
}

export interface CustomerResponse {
  id: string;
  fullName: string;
  cpf: string;
}
