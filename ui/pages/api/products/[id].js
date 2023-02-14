import dbConnect from '../../../util/mongo'
import Product from '../../../models/Product'

export default async function handler(req, res) {
	try {
		dbConnect();
		const { method, query, } = req;
		const { id } = query;

		switch (method) {
			case 'GET':
				try {
					const products = await Product.findById(id);
					res.status(200).json(products);
				} catch (error) {
					res.status(500).json(error)
				}
				// res.status(200).json('this is product!')
				break;
			// case 'POST':
			// 	try {
			// 		const product = await Product.create(req.body);
			// 		res.status(201).json(product);
			// 	} catch (error) {
			// 		res.status(500).json(error);
			// 	}
			// 	break;

			case 'DELETE':
				try {
					const product = await Product.findByIdAndDelete(id);
					res.status(200).json(product);
				} catch (error) {
					res.status(500).json(error);
				}
				break;
			default:
				res.status(200).json('You are POST!')
				break;
		}
	} catch (error) {
		console.log(error)
	}

}