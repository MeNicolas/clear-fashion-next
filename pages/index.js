import Layout from '../components/layout'
import Products from '../components/products'
import Filter from '../components/filter'

export default function Home() {
  return (
    <Layout>
      <section className="shop spad">
        <div class="container">
          <div class="row">
            <div className="col-lg-3">
              <Filter />
            </div>
            <div className="col-lg-9">
              <Products />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}