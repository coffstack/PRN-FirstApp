async function login(email: string, password: string): Promise<string> {
  return await new Promise((resolve, reject) =>
    setTimeout(() => {
      if (password === "123456") {
        resolve("auth-token");
      } else {
        reject("username or password invalid");
      }
    }, 2000)
  );
}

export const fakeApi = {
  login,
};
