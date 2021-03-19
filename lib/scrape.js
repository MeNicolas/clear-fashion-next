const sources = {
  'adresse.paris': require('./sources/adresse.paris.js'),
  'dedicatedbrand.com': require('./sources/dedicatedbrand.com.js'),
  'mudjeans.eu': require('./sources/mudjeans.eu.js')
}
import { insert } from './db'

async function scrapeAndSave(url) {
  const source = getHostnameFromRegex(url)
  const products = await sources[source].scrape(url);
  const result = await insert(products);
  
  return result.insertedCount
}

const getHostnameFromRegex = (url) => {
  // run against regex
  const matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
  // extract hostname (will be null if no match is found)
  return matches && matches[1];
}

export async function scrape() {
  let urls = ['https://dedicatedbrand.com/en/men/news', 'https://mudjeans.eu/collections/men', 'https://adresse.paris/602-nouveautes']
  
  let inserted = await Promise.all(urls.map(scrapeAndSave))
  //console.log(`Successfully scraped ${urls.length} websites !`)
  return inserted.reduce((a, b) => a+b, 0)
}

