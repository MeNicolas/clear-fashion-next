import { scrape } from '../../../lib/scrape'

export default async function handler(req, res) {
	const nbInserted = await scrape()
	res.status(200).json({ nbInserted })
}