import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
	const [limit, setLimit] = useState(12)
	const [brand, setBrand] = useState('')
	const [price, setPrice] = useState('')
	const [sort, setSort] = useState('asc')
	
  let sharedState = { limit, setLimit, brand, setBrand, price, setPrice, sort, setSort }

  return (
	<AppContext.Provider value={sharedState}>
	  {children}
	</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
