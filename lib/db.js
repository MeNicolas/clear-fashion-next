const {MongoClient} = require('mongodb');

const MONGODB_DB_NAME = 'clearfashion';
const MONGODB_COLLECTION = 'products';
const MONGODB_URI = process.env.MONGODB_URI;

let client = null;
let database = null;

/**
 * Get db connection
 * @type {MongoClient}
 */
export async function getDB() {
  try {
	if (database) {
	  console.log('💽  Already Connected');
	  return database;
	}

	client = await MongoClient.connect(MONGODB_URI, {'useNewUrlParser': true});
	database = client.db(MONGODB_DB_NAME);

	console.log('💽  Connected');

	return database;
  } catch (error) {
	// console.error('🚨 MongoClient.connect...', error);
	return null;
  }
};

/**
 * Insert list of products
 * @param  {Array}  products
 * @return {Object}
 */
export async function insert(products) {
  try {
	const db = await getDB();
	const collection = db.collection(MONGODB_COLLECTION);

	const result = await collection.insertMany(products, {'ordered': false});

	return result;
  } catch (error) {
	// console.error('🚨 collection.insertMany...', error);
	// fs.writeFileSync('products.json', JSON.stringify(products));
	return {
	  'insertedCount': error.result.nInserted
	};
  }
};

/**
 * Find products based on query
 * @param  {Array}  query
 * @return {Array}
 */
export async function find(query) {
  try {
	const db = await getDB();
	const collection = db.collection(MONGODB_COLLECTION);
	const result = await collection.find(query).toArray();

	return result;
  } catch (error) {
	// console.error('🚨 collection.find...', error);
	return null;
  }
};

/**
 * Connect & return a collection
 *
*/
export async function getCollection(name = null) {
  try {
	const db = await getDB();
	return db.collection(name || MONGODB_COLLECTION);
  } catch (error) {
	// console.error('🚨 collection...', error);
	return null;
  }
};


/**
 * Close the connection
 */
export async function close() {
  try {
	await client.close();
  } catch (error) {
	// console.error('🚨 MongoClient.close...', error);
  }
};