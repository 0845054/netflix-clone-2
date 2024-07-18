export const login = async (e: string, p: string) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: e, password: p }),
  };
  return await fetch("http://localhost:4000/auth/login", requestOptions).catch(
    (e) => {
      console.log(`Login api call failed. Error: ${e}`);
    }
  );
};

//  credentials: 'include'

export const verify = async () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return await fetch("http://localhost:4000/api/verify", requestOptions).catch(
    (e) => {
      console.log(`Login api call failed. Error: ${e}`);
    }
  );
};
