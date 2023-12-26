import { NextRequest, NextResponse } from "next/server";

export async function GET(Request:NextRequest) {
   const body = await Request.json();
   const ticketData = body.formData;
  return NextResponse.json({ message: "I am from Main Api" });
}
