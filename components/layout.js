import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
		<>
		  <Head>
		  	<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap" rel="stylesheet" />
		  </Head>
		  <header className="header">
			  <div className="container">
				<div className="row">
				  <div className="col-lg-3 col-md-3">
					<div className="header__logo">
					</div>
				  </div>
				  <div className="col-lg-6 col-md-6">
					<nav className="header__menu mobile-menu">
					  <ul>
						<li key="home"><a href="https://preview.colorlib.com/theme/malefashion/index.html">Home</a></li>
						<li key="shop" className="active"><a href="shop.html">Shop</a></li>
					  </ul>
					</nav>
				  </div>
				</div>
			  </div>
			</header>
		  
		  {children}
		  
			<script src="/js/jquery-3.3.1.min.js"></script>
			<script src="/js/bootstrap.min.js"></script>
			<script src="/js/jquery.nice-select.min.js"></script>
			<script src="/js/jquery.slicknav.js"></script>
			<script src="/js/owl.carousel.min.js"></script>
			<script src="/js/main.js"></script>
		</>
  )
}