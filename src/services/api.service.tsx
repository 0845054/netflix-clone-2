export const login = async (e: string, p: string) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: e, password: p }),
  };
  return await fetch("http://localhost:4000/auth/login", requestOptions)
    .then((res) => {
      return res.status === 200 ? res.json() : null;
    })
    .catch((e) => {
      return null;
    });
};

//  credentials: 'include'

export const verify = async () => {
  const requestOptions: RequestInit = {
    credentials: "same-origin",
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return await fetch("http://localhost:4000/api/verify", requestOptions)
    .then((res) => {
      return res.status === 200 ? res.json() : null;
    })
    .catch((e) => {
      return null;
    });
};
