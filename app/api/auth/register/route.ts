import User from "@/database/user.model";
import { connectToDatabase } from "@/lib/mongoose/mongoose";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";

export async function POST(req: Request) {
  try {
    connectToDatabase();
    const { searchParams } = new URL(req.url);
    const step = searchParams.get("step");

    if (step === "1") {
      const { email } = await req.json();
      const isExistingUser = await User.findOne({ email });

      if (isExistingUser) {
        return NextResponse.json(
          {
            error: "Email already exist",
          },
          {
            status: 400,
          }
        );
      }

      return NextResponse.json({ success: true });
    } else if (step === "2") {
      const { email, username, name, password } = await req.json();

      const isExistingUser = await User.findOne({ username });

      if (isExistingUser) {
        return NextResponse.json(
          {
            error: "Username already exists",
          },
          {
            status: 400,
          }
        );
      }

      const hashedPassword = await hash(password, 10);

      const user = User.create({
        email,
        username,
        name,
        password: hashedPassword,
      });

      return NextResponse.json({ success: true, user });
    }
  } catch (error) {
    const result = error as Error;
    return NextResponse.json({ error: result.message }, { status: 400 });
  }
}
