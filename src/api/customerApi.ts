import type { CustomerRequest, CustomerResponse } from "../types/customer";
import { useAuthorizedClient } from "./authorizedClient";

export function useCustomerApi() {
  const { authorizedPost } = useAuthorizedClient();

  const createCustomer = async (
    customer: CustomerRequest
  ): Promise<CustomerResponse> => {
    return authorizedPost<CustomerResponse>("v1/customers", customer);
  };

  return { createCustomer };
}
