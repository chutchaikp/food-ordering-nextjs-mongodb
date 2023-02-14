import mongoose from 'mongoose'

const ProductScheme = new mongoose.Schema({
	title: { type: String, required: true, maxLength: 60, },
	desc: { type: String, required: true, maxLength: 200, },
	img: { type: String, required: true, },
	prices: { type: [Number], required: true, },
	extraOptions: { type: [{ title: { type: String }, price: { type: Number } }] }
},
	{ timestamps: true, })

export default mongoose.models.Product || mongoose.model('Product', ProductScheme)
// export default mongoose.model('Product', ProductScheme)


