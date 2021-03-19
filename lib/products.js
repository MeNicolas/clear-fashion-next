import { getCollection } from './db'

export async function search(limit = 12, page = 1, sort = 'asc', brand = null, price = null) {	
	const offset = (page - 1) * limit
	
	const collection = await getCollection()
	
	let query = {}
	if (brand && brand.length > 0) query.brand = brand
	if (price) query.price = {'$lt': price}
	
	const result = await collection.find(query)
							.limit(limit)
							.skip(offset)
							.sort({ price: sort == 'asc' ? 1 : -1 })
							.toArray();
	
	return result
}