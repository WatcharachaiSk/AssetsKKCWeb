import { APP_API_URL_DEV, APP_API_URL_PROD, REACT_ENVIRONMENT } from "@env";

export const baseURL =
  REACT_ENVIRONMENT === "dev" ? APP_API_URL_DEV : APP_API_URL_PROD;

console.log(`*${REACT_ENVIRONMENT}* Environments\nBaseURL : ${baseURL}`);
