import prismadb from "@/lib/prismadb";

const getTopResults = async () => {
    const results = await prismadb.testResult.findMany({
        include: {
          user: true
        },
        orderBy: {
          wpm: 'desc'
        },
        take: 10,
      })

    return results;
};

export default getTopResults;