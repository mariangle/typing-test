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

    const lessResults = results.length < 10;
    const amongTopResults = results.some((result) => result.wpm < wpm);

    if (lessResults) {
      const testResult = await prisma.testResult.create({
        data: {
          wpm,
          userId: user?.id,
        },
      });

      return NextResponse.json(testResult, { status: 200 });
    } else if (!amongTopResults) {
      return new NextResponse("Your result doesn't qualify to be on the leaderboard", { status: 400 });
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