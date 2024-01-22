import type { NextApiRequest, NextApiResponse } from 'next'
// const fs = require('fs');
import { userData } from '../../store/consultationsStore';

import { NextRequest, NextResponse } from "next/server";

export async function GET(req:Request) {
    return NextResponse.json({message:'запрос получен'})
}

// export async function handler (req:NextApiRequest,res:NextApiResponse) {
	
// 		return res.status(200).json('запрос получен')
	
	// if(req.method === 'POST') {
	// 	const data = userData(state => state.userForm)
	// 	return fs.writeFileSync('./userData.json', JSON.stringify(data), {encoding:'utf8', flag:'w'})
	// }
// }
