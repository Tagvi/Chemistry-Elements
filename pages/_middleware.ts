import type { NextFetchEvent, NextRequest } from "next/server";
const URL = process.env.VERCEL_URL ?? "otarnatsvaladze.vercel.app";
import { NextResponse } from "next/server";

export default function redirectToFirstPage(
  req: NextRequest,
  _ev: NextFetchEvent
) {
  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(`https://${URL}/potassium`);
  }
  return NextResponse.next();
}
