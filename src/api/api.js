import Vue from "vue";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { onError } from "apollo-link-error";
import store from "../store/index";
import router from "../router";

import { useToast } from "vue-toastification";
const toast = useToast();

export const AUTH_CONTEXT = () => {
  const token = localStorage.getItem("token");
  return token ? `Bearer ${token}` : "";
};

export const logout = () => {
  localStorage.removeItem("token");
  store.commit("set", {
    type: "isLoggedIn",
    data: false,
  });
  store.commit("set", {
    type: "user",
    data: "",
  });

  // *Note: Just decided later on to clear local storage due to occasional version conflicts:
  window.localStorage.clear("vuex");

  router.push("/");
};

const errorLink = onError((errors) => {
  const { graphQLErrors, networkError } = errors;

  if (graphQLErrors && graphQLErrors.length > 0) {
    let e = graphQLErrors[0];
    toast.error(e.message);
  }

  if (networkError) {
    toast.error(networkError.message, {
      position: "bottom",
      duration: 6000,
    });
  }
});

function getService(link) {
  const API = new ApolloClient({
    link,
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "no-cache",
        errorPolicy: "ignore",
      },
      query: {
        fetchPolicy: "no-cache",
        errorPolicy: "all",
      },
    },
  });

  return API;
}

var httplink = createHttpLink({
  // uri: `https://turboserver-rzoozctlrq-uc.a.run.app/graphql`,
  uri: `http://localhost:4000/graphql`,
});
const serviceHttpLink = errorLink.concat(httplink);

const SERVICE_API = getService(serviceHttpLink);

export const API = {
  SERVICE_API,
};
