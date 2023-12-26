import db from "@/util/db";
import { UserModel } from "@/util/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(Request: NextRequest) {
  try {
    db();
    const body = await Request.json();
    console.log(body);
    const user = await UserModel.create(body);
    return NextResponse.json({ message: "User Created Successfully!", user });
  } catch (error) {
    console.log("usererr", error);
  }
}
export async function GET(Request: NextRequest) {
  try {
    db();
    const usersCount = await UserModel.find().countDocuments();
    const users = await UserModel.find().sort({createdAt:-1});
    return NextResponse.json({
      message: "User Created Successfully!",
      usersCount,
      users,
    });
  } catch (error) {
    console.log("usererr", error);
  }
}
