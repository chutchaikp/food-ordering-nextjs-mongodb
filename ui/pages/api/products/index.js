import dbConnect from '../../../util/mongo'
import Product from '../../../models/Product'

export default async function handler(req, res) {
	try {
		dbConnect();

		const { method, cookie, } = req;
		const token = cookie?.token;

		switch (method) {
			case 'GET':
				try {
					const products = await Product.find();
					res.status(200).json(products);
				} catch (error) {
					res.status(500).json(error)
				}
				// produce "Cannot set headers after they are sent to the client"
				// res.status(200).json('this is product!')
				break;
			case 'POST':
				try {

					if (!token || token !== process.env.TOKEN) {

						res.status(401).json('Not authenticated!');
						return;
					}

					const product = await Product.create(req.body);
					res.status(201).json(product);
				} catch (error) {
					res.status(500).json(error);
				}
				break;
			default:
				break;
		}
	} catch (error) {
		console.log(error)
	}

}