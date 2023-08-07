import getCurrentUser from "@/actions/get-current-user";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";
import getTopResults from "@/actions/get-results";

export const POST = async (req: Request) => {
  try {
    const { wpm } = await req.json();

    if (!wpm) {
      return new NextResponse("WPM is required", { status: 400 });
    }

    const user = await getCurrentUser();

    const results = await getTopResults();

    const amongTopResults = results.some((result) => result.wpm < wpm);

    console.log(wpm)
    console.log(results)

    if (!amongTopResults) {
      return new NextResponse("WPM not among top results", { status: 400 });
    }

    const testResult = await prisma.testResult.create({
      data: {
        wpm,
        userId: user?.id,
      },
    });

    return NextResponse.json(testResult, { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};