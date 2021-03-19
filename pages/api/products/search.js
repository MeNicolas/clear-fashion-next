import { search } from '../../../lib/products'

export default async function handler(req, res) {
	const limit = parseInt(req.query.limit) || 12
	const page = parseInt(req.query.page) || 1
	const brand = req.query.brand
	const sort = req.query.sort
	const searchQuery = req.query.q
	const price = parseInt(req.query.price)
    
	const products = await search(limit, page, sort, searchQuery, brand, price)
	
	res.status(200).json(products)
}