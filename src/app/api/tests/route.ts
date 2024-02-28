import {NextResponse} from "next/server";
import {tests} from "@/app/api/tests/testsDB";
export async function GET(req: Request) {
	return NextResponse.json(tests)
}
