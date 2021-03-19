import Card from 'react-bootstrap/Card';

export default function Product({ product }) {
	const brands = {
		dedicatedbrand: 'Dedicated Brand',
		adresseparis: 'Adresse Paris',
		mudjeans: 'Mud Jeans'
	}
	
  return <>
		<div className="product__item">
			<div className="product__item__pic set-bg" style={{ backgroundImage: `url(${product.photo})` }} />
			<div className="product__item__text">
				<h6>{product.name}</h6>
				<span>{brands[product.brand]}</span>
				<a href={product.link} className="add-cart" target="_blank">View</a>
				<h5>{product.price}€</h5>
			</div>
		</div>
  </>
}