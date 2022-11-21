const configAxios = (method: "get" | "post" | "put", url: string) => {
  const config = {
    method: method,
    url: url,
    headers: {
      "x-access-token": `${localStorage.getItem("Token")}`,
    },
  };
  return config;
};

export default configAxios;
