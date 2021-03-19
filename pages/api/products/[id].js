import { getProduct } from '../../../lib/products'

export default async function handler(req, res) {
	const id = req.query.id

	if (!id) res.status(404)
	else {
		const product = await getProduct(id)
		console.log(product)
		res.status(200).json(product)
	}
}