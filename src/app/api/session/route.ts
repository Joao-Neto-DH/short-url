import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";
import { Usuario } from "../../../../prisma/generated/client";
import { cookies } from "next/headers";
import * as jose from "jose";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  const { password, email } = (await request.json()) as Usuario;
  console.log(password, email);

  try {
    const result = await prisma.usuario.findFirstOrThrow({
      where: {
        email,
      },
    });

    bcrypt.compare(password, result.password, async function (err, res) {
      if (err) {
        throw new Error(err.message);
      }
      if (!res) {
        throw new Error("Email ou senha incorretos");
      }

      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      const token = await new jose.SignJWT({ id: result.id })

        .setProtectedHeader({ alg: "HS256" })
        .setExpirationTime("24h")

        .sign(secret);

      const cookiesStore = await cookies();
      cookiesStore.set("token", token, {
        httpOnly: true,
      });
    });
    return NextResponse.json("Sucesso", { status: 200 });

    // const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    // const token = await new jose.SignJWT({ id: result.id })

    //   .setProtectedHeader({ alg: "HS256" })
    //   .setExpirationTime("24h")

    //   .sign(secret);

    // const cookiesStore = await cookies();
    // cookiesStore.set("token", token, {
    //   httpOnly: true,
    // });
    // redirect("/short");
  } catch (error: any) {
    console.error(error.message);
    return NextResponse.json(
      { error: "Email ou senha incorretos" },
      { status: 500 }
    );
  }
}
