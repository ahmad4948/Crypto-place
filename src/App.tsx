import './App.css'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import Main2 from './Main2.tsx';
import { useState } from 'react';
function App() {
  const [currency,setcurrency] = useState<"USD" | "EUR" | "AED">("USD")
  return (
    <>
    <Header setcurrency={setcurrency} />
    <Main2 currency = {currency}/>
    <Footer/>
    </>
  )
}

export default App
