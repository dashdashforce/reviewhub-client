import {createHttpLink} from 'apollo-link-http';
import {setContext} from 'apollo-link-context';

export const token = localStorage.getItem('token');

export const API_HOST = process.env.REACT_APP_API_HOST;

export const isAuth = !(token === undefined || token === null);

const httpLink = createHttpLink({
  uri: `http://${API_HOST}/api/graphql`,
});

export function getLink(token: string) {
  let authLink = setContext((_, {headers}) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  return authLink.concat(httpLink);
}
