import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";
import { Usuario } from "../../../../prisma/generated/client";
import { cookies } from "next/headers";
import * as jose from "jose";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  const { password, name, email } = (await request.json()) as Usuario;

  try {
    const hash = bcrypt.hashSync(password, 10);

    const result = await prisma.usuario.create({
      data: {
        password: hash,
        name,
        email,
      },
    });

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new jose.SignJWT({ id: result.id })

      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("24h")

      .sign(secret);

    const cookiesStore = await cookies();
    cookiesStore.set("token", token, {
      httpOnly: true,
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
      { error: "Ocorreu um erro ao criar o usuário" },
      { status: 500 }
    );
  }
}
