import { useAuth0 } from "@auth0/auth0-react";
import client from "./client";

/**
 * Hook that returns an axios instance with the current Auth0 token attached.
 */
export function useAuthorizedClient() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  if (!isAuthenticated) {
    throw new Error("User is not authenticated");
  }

  const authorizedPost = async <TResponse = unknown, TBody = unknown>(
    url: string,
    body?: TBody
  ): Promise<TResponse> => {
    const token = await getAccessTokenSilently();
    console.log("token: ", token);

    console.log({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const response = await client.post<TResponse>(url, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };

  const authorizedGet = async <TResponse = unknown>(
    url: string
  ): Promise<TResponse> => {
    const token = await getAccessTokenSilently();
    const response = await client.get<TResponse>(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };

  return { authorizedPost, authorizedGet };
}
