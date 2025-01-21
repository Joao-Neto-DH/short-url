import { cookies } from "next/headers";
import * as jose from "jose";

export async function checkLogin() {
  const cookiesStore = await cookies();

  if (cookiesStore.has("token")) {
    const token = cookiesStore.get("token")?.value!;

    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      await jose.jwtVerify(token, secret);
      return true;
    } catch (error) {}
  }

  return false;
}
