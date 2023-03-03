// import { createApp, provide, h } from "vue";
// import App from "./App.vue";
// import router from "./router";
// import store from "./store";
// import "./assets/tailwind.css";

// createApp(App).use(store).use(router).mount("#app");
// new HttpLink({ uri: "https://turboserver-rzoozctlrq-uc.a.run.app/graphql" }),

import { createApp, h, provide } from "vue";
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  from,
  HttpLink,
} from "@apollo/client/core";
import { ApolloClients } from "@vue/apollo-composable";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";

const token = process.env.VUE_APP_GITHUB_ACCESS_TOKEN;

const additiveLink = from([
  new ApolloLink((operation, forward) => {
    operation.setContext(({ headers }) => ({
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : null,
      },
    }));
    return forward(operation); // Go to the next link in the chain. Similar to `next` in Express.js middleware.
  }),
  // new HttpLink({ uri: "https://turboserver-rzoozctlrq-uc.a.run.app/graphql" }),
  new HttpLink({ uri: "http://localhost:4000/graphql" }),
]);

const apolloClient = new ApolloClient({
  link: additiveLink,
  cache: new InMemoryCache(),
});

const app = createApp({
  setup() {
    provide(ApolloClients, {
      default: apolloClient,
    });
  },
  render: () => h(App),
});

app.use(store).use(router).mount("#app");
