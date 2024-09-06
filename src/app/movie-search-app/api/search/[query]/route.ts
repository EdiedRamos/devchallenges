import { NextRequest, NextResponse } from "next/server";

interface GetParams {
  params: {
    query: string;
  };
}

export async function GET(_: NextRequest, { params: { query } }: GetParams) {
  try {
    console.log("wtf", process.env.OMDB_API_KEY);
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&t=${query}`
    );
    const data = await response.json();

    return NextResponse.json({ content: data });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
