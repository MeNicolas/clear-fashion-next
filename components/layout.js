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
				  <div className="col-lg-3 col-md-3 text-center mx-auto">
						<h3 className="pt-5 pb-4">CLEAR FASHION</h3>
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