import { fakeApi } from "../api/fakeApi";
import { parseEmail } from "../utils/parsers";

export async function login(email: string, password: string) {
  const parsedEmail = parseEmail(email);
  const token = await fakeApi.login(parsedEmail, password);
  return token;
}
