import { NextApiRequest, NextApiResponse } from 'next';
import {news} from '../news/newsDB'
import {NextResponse} from "next/server";
export async function GET(req: Request) {
	return NextResponse.json(news)
}
