import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";

export const token = localStorage.getItem("token");

export const API_URL = process.env.REACT_APP_API_URL;

export const isAuth = !(token === undefined || token === null);

const httpLink = createHttpLink({
  uri: `${API_URL}/graphql`
});

export function getLink(token: string) {
  let authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ""
      }
    };
  });

  return authLink.concat(httpLink);
}
