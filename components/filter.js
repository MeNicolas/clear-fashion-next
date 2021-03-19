import { useAppContext } from '../context/AppContext';

export default function Filter() {
	const context = useAppContext()
	
  return <>
			<div className="shop__sidebar">
				<div className="shop__sidebar__accordion">
					<div className="card">
						<div className="card-heading">
							<a data-toggle="collapse" data-target="#collapseTwo">Branding</a>
						</div>
						<div id="collapseTwo" className="collapse show" data-parent="#accordionExample">
							<div className="card-body">
								<div className="shop__sidebar__size">
									<label for="3" className={context.brand == '' ? 'active' : ''} onClick={() => context.setBrand('')}>
										All
										<input type="radio" id="3" />
									</label>
									<label for="0" className={context.brand == 'dedicatedbrand' ? 'active' : ''} onClick={() => context.setBrand('dedicatedbrand')}>
										Dedicated Brand
										<input type="radio" id="0" />
									</label>
									<label for="1" className={context.brand == 'adresseparis' ? 'active' : ''} onClick={() => context.setBrand('adresseparis')}>
											Adresse Paris
										<input type="radio" id="1" />
									</label>
									<label for="2" className={context.brand == 'mudjeans' ? 'active' : ''} onClick={() => context.setBrand('mudjeans')}>
											Mud Jeans
										<input type="radio" id="2" />
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="card-heading">
							<a data-toggle="collapse" data-target="#collapseThree">Maximum Price</a>
						</div>
						<div id="collapseThree" className="collapse show" data-parent="#accordionExample">
							<div className="card-body">
								<div className="shop__sidebar__search">
										<input type="number" placeholder="Maximum Price" value={context.price} onChange={e => context.setPrice(e.target.value)} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
  </>
}