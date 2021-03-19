const axios = require('axios');
const cheerio = require('cheerio');
const {'v5': uuidv5} = require('uuid');

/**
 * Parse webpage e-shop
 * @param  {String} data - html response
 * @return {Array} products
 */
const parse = data => {
  const $ = cheerio.load(data);

  return $('.productList-container .productList')
    .map((i, element) => {
      const name = $(element)
        .find('.productList-title')
        .text()
        .trim()
        .replace(/\s/g, ' ');
      const price = parseInt(
        $(element)
          .find('.productList-price')
          .text()
          .replace(/Sold Out/, '')
      );
      const link = 'https://www.dedicatedbrand.com' + 
        $(element)
          .find('.productList-link')
          .attr('href')
          .trim()
          .replace(/\s/g, ' ');
      const photo = $(element)
          .find('.productList-image').find('img:first')
          .attr('src')
          .trim()
          .replace(/\s/g, ' ');
      const _id =  uuidv5(link, uuidv5.URL)

      return {_id, brand: 'dedicatedbrand', name, price, link, photo};
    })
    .get();
};

/**
 * Scrape all the products for a given url page
 * @param  {[type]}  url
 * @return {Array|null}
 */
module.exports.scrape = async url => {
  const response = await axios(url);
  const {data, status} = response;

  if (status >= 200 && status < 300) {
    return parse(data);
  }

  console.error(status);

  return null;
};
