import { NextApiRequest, NextApiResponse } from 'next';

import {NextResponse} from "next/server";
import {articles} from "@/app/api/articles/articlesDB";
export async function GET(req: Request) {
	return NextResponse.json(articles)
}
