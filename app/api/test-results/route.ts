import getCurrentUser from "@/actions/getCurrentUser";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const testResults = await prisma.testResult.findMany({
            include: {
                user: true,
            }
        })

        return NextResponse.json(testResults, { status: 200 })

    } catch (error) {
        return NextResponse.json( "Internal Server Error", { status: 500 })
    }
}

interface TestResultData {
    wpm: number;
    userId?: string;
}

export const POST = async (req: Request) => {
  try {
    const { wpm } = await req.json();

    if (!wpm) {
      return new NextResponse("Bad Request", { status: 400 });
    }

    const user = await getCurrentUser();
    const testResultData: TestResultData = { wpm };

    if (user) {
      testResultData.userId = user.id;
    }

    const testResult = await prisma.testResult.create({
      data: testResultData,
      include: {
        user: true,
      }
    });

    return NextResponse.json(testResult, { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};