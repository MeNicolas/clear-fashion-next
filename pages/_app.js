import '../styles/bootstrap.min.css'
import '../styles/style.css'
import '../styles/font-awesome.min.css'
import '../styles/elegant-icons.css'
import '../styles/nice-select.css'
import '../styles/slicknav.min.css'
import { AppWrapper } from '../context/AppContext';

export default function App({ Component, pageProps }) {
  return (
	  <AppWrapper>
	  	<Component {...pageProps} />
	  </AppWrapper>
  )
}