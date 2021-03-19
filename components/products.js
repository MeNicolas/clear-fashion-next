import React, { useState } from 'react';
import { useSWRInfinite } from 'swr'
import Product from '../components/product';
import Button from 'react-bootstrap/Button';
import { useAppContext } from '../context/AppContext';

const fetcher = url => fetch(url).then(res => res.json());

export default function Products() {
	const context = useAppContext()
	
	console.log(context)
	const { data, size, setSize } = useSWRInfinite(
		(index) => `api/products/search/?brand=${context.brand}&price=${context.price}&sort=${context.sort}&page=${index}`,
		fetcher
	)
	return (
		<>
			<div className="shop__product__option">
				<div className="row">
				  <div className="col-lg-6 col-md-6 col-sm-6">
					<div className="shop__product__option__left">
					  <p>Showing 1–12 of 126 results</p>
					</div>
				  </div>
				  <div className="col-lg-6 col-md-6 col-sm-6">
						<div className="shop__product__option__right">
						  <p>Sort by price: </p>
						  <div className="nice-select" tabindex="0">
								<span className="current">Low To High</span>
								<ul className="list">
									<li className={(context.sort == 'asc' ? 'selected' : '') + ' option'} onClick={() => context.setSort('asc')}>Low To High</li>
									<li className={(context.sort == 'desc' ? 'selected' : '') + ' option'} onClick={() => context.setSort('desc')}>High to Low</li>
								</ul>
							</div>
						</div>
				  </div>
				</div>
			</div>
			
			<div className="row">
				{ data &&
					data.map(page => page.map(p =>
						<div key={p._id} className="col-lg-4 col-md-6 col-sm-6">
							<Product product={p}/>
						</div>
					))
				}
				
				<Button onClick={() => setSize(size + 1)} className="mx-auto">Load More</Button>
			</div>
		</>
	);
}