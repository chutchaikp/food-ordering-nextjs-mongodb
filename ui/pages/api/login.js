// import dbConnect from '../../util/mongo'
// import cookie from 'cookie'

// export default async function handler(req, res) {
// 	try {
// 		debugger;

// 		dbConnect();
// 		const { method, query } = req;
// 		// const { id } = query;
// 		switch (method) {

// 			case 'POST':
// 				try {
// 					const { username, password } = req.body;

// 					if (process.env.USERNAME === username && process.env.PASSWORD === password) {
// 						const ser = cookie.serialize("token", process.env.TOKEN);

// 						res.setHeader('Set-Cookie', cookie.serialize("token", process.env.TOKEN), {
// 							maxAge: 60 * 60,
// 							sameSite: 'strict',
// 							path: '/'
// 						})
// 						res.status(200).json("ok")
// 					} else {
// 						res.status(400).json('Wrong credentials!');
// 					}

// 					// res.status(201).json(product);
// 				} catch (error) {
// 					res.status(500).json(error);
// 				}
// 				break;

// 			default:
// 				res.status(200).json('WHAT ARE YOU DONIG ?')
// 				break;
// 		}
// 	} catch (error) {
// 		console.log(error)
// 	}

// }

import cookie from "cookie";

const handler = (req, res) => {

	debugger;

	if (req.method === "POST") {
		const { username, password } = req.body;
		if (
			username === process.env.ADMIN_USERNAME &&
			password === process.env.ADMIN_PASSWORD
		) {
			res.setHeader(
				"Set-Cookie",
				cookie.serialize("token", process.env.TOKEN, {
					maxAge: 60 * 60,
					sameSite: "strict",
					path: "/",
				})
			);
			res.status(200).json("Succesfull");
		} else {
			res.status(400).json("Wrong Credentials!");
		}
	}
};

export default handler;