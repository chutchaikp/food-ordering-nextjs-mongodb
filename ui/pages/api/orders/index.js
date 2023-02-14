import dbConnect from '../../../util/mongo'
import Order from '../../../models/Order'

export default async function handler(req, res) {
	try {
		debugger;
		dbConnect();
		const { method } = req;

		switch (method) {
			case 'GET':
				try {
					const orders = await Order.find();
					res.status(200).json(orders);
				} catch (error) {
					res.status(500).json(error)
				}
				break;

			default:
				res.status(200).json('You are in default!')
				break;
		}
	} catch (error) {
		console.log(error)
	}

}