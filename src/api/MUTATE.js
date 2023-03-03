import mutations from "./mutations";
import { API, AUTH_CONTEXT } from "./api";

export default (endpoint, data, service) => {
    let token = localStorage.getItem("token");
    let context = {};
    if (token !== "" && token !== null && token !== undefined) {
        context.headers = {
            authorization: AUTH_CONTEXT(),
        };
    }
    const PAYLOAD = {
        mutation: mutations(endpoint),
        variables: data,
        context,
    };
        
    return API.SERVICE_API.mutate(PAYLOAD).then((result) => result.data[endpoint]);

};