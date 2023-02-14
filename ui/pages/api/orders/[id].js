import dbConnect from '../../../util/mongo'
import Order from '../../../models/Order'

export default async function handler(req, res) {
	try {
		debugger;
		dbConnect();
		const { method, query } = req;
		const { id } = query;

		switch (method) {
			case 'GET':
				try {
					const order = await Order.findById(id);
					res.status(200).json(order);
				} catch (error) {
					res.status(500).json(error)
				}
				break;
			case 'POST':
				try {
					const order = await Order.create(req.body);
					res.status(201).json(order);
				} catch (error) {
					res.status(500).json(error);
				}
				break;
			case 'PUT':
				try {
					const order = await Order.findByIdAndUpdate(id, req.body, { new: true });
					res.status(200).json(order);
				} catch (error) {
					res.status(500).json(error);
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