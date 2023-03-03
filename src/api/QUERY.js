import queries from "./queries";
import { API, AUTH_CONTEXT } from "./api";

export default (endpoint, payload, service) => {
  let token = localStorage.getItem("token");
  let context = {};
  if (token !== "" && token !== null && token !== undefined) {
    context.headers = {
      authorization: AUTH_CONTEXT(),
    };
  }

  const PAYLOAD = {
    query: queries(endpoint),
    variables: payload,
    context,
  };

  return API.SERVICE_API.query(PAYLOAD).then((result) => result.data[endpoint]);
  
};
