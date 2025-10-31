import { useState } from "react";
import { useEffect } from "react";
interface Coin {
  id: string;
  name: string;
  image: string;
  symbol: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
}
function Main2(){
   const [coin,setcoins] = useState<Coin[]>([]);
   useEffect(()=>{
      fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
       .then((res)=>{
       return res.json()
       }
      )
       .then((data)=>{ 
         console.log(data);
         setcoins(data);
       } )
       .catch((err)=>console.log("error:" , err));
   },[]);

return(
<main className="bg-[#0d023c] text-white text-center">
   <h1 className="text-6xl mt-24"> 
      <span className="block font-semibold">Largest </span> 
      <span className="mt-6 block font-semibold"> Crypto Marketplace  </span>
      </h1>
   <p className="mt-12 text-gray-300">Welcome to the world's largest cryptocurrency marketplace.</p>
      <p className="text-gray-300">Sign up to explore more about cryptos.</p>

      <div className="flex justify-center mt-12 items-center">
      <input placeholder="Search crypto.." className="bg-white w-120 h-14 rounded
       placeholder-gray-600 p-4 text-black" ></input>
       <button className="bg-[#7b3ff3] h-10 p-2 rounded -ml-24 cursor-pointer">Search</button>
       </div>

       <table className="mx-auto mt-12 border-separate border-spacing-x-24 border-spacing-y-8">
         <thead  className="outline outline-white-800">
         <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Price</th>
            <th>24H Change</th>
            <th>Market Cap</th>
         </tr>
         </thead>
         <tbody  className="outline outline-white-800">
         {coin.slice(0,12).map( (c,i) =>(
             <tr key={c.id} className="outline outline-white">
               <td>{i+1}</td>
               <td className="flex items-center gap-1.5">
               <img src={c.image} className="h-11" />
               <span>{c.id}</span> 
               </td>
               <td>{c.current_price}</td>

               <td className={ c.price_change_percentage_24h>0? "text-green-400"
                : c.price_change_percentage_24h<0? "text-red-500"
                : "text-white" }  >{c.price_change_percentage_24h.toFixed(3)} %</td>
               <td>{c.market_cap}</td>
             </tr>
         )
        ) }
        </tbody>
       </table>
</main>
)
}
export default Main2;