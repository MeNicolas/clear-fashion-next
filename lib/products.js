import { find, getCollection } from './db'

export async function search(limit = 12, page = 1, sort = 'asc', searchQuery = '', brand = '', price = null) {	
	const offset = (page - 1) * limit
	
	const collection = await getCollection()
	
	let query = {}
	if (brand.length > 0) query.brand = brand
	if (price) query.price = {'$lte': price}
	if (searchQuery.length > 0) query['$text'] = {'$search': searchQuery}
	
	const result = await collection.find(query)
							.limit(limit)
							.skip(offset)
							.sort({ price: sort == 'asc' ? 1 : -1 })
							.toArray();
	
	return result
}

export async function getProduct(id) {		
	const product = (await find({'_id': id}))[0] || {}
	return product
}