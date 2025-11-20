import { useState } from "react";
import { useEffect } from "react";
type main2props = {
 currency: "USD" | "EUR" | "AED";
}
interface Coin {
  id: string;
  name: string;
  image: string;
  symbol: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
}
function Main2({currency}: main2props){
   const [coin,setcoins] = useState<Coin[]>([]);
   const [query, setquery] = useState<string>("");
   useEffect(()=>{
      fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.toLowerCase()}`)
       .then((res)=>{
       return res.json()
       }
      )
       .then((data)=>{ 
         console.log(data);
         setcoins(data);
       } )
       .catch((err)=>console.log("error:" , err));
   },[currency]);

   const q = query.trim().toLowerCase();
   const filtered: Coin[] = [];
   for(let i=0;i<coin.length;i++){
      const c = coin[i];
      if(c.id.toLowerCase().includes(q) || c.id.toLowerCase().includes(q) ||
      c.id.toLowerCase().includes(q)){
         filtered.push(c);
      }
   }
   let displayList: Coin[] = [];
      if (q === "") {
      displayList = coin.slice(0, 12); } 
      else{
      displayList = filtered; }
return(
<main className="bg-[#0d023c] text-white text-center">
   <h1 className="text-3xl md:text-6xl mt-13 md:mt-24"> 
      <span className="block font-semibold">Largest </span> 
      <span className="mt-4 md:mt-6 block font-semibold"> Crypto Marketplace  </span>
      </h1>
   <p className="mt-10 md:mt-12 text-gray-300">Welcome to the world's largest cryptocurrency marketplace.</p>
      <p className="text-gray-300">Sign up to explore more about cryptos.</p>

      <div className="flex justify-center mt-12 items-center mr-7 md:mr-0">
      <input placeholder="Search crypto.." className="bg-white w-85 h-11 md:w-120 md:h-14 rounded
       placeholder-gray-600 p-4 text-black"
       value={query}
       onChange={(e)=>setquery(e.target.value)} ></input>
       <button className="bg-[#7b3ff3] h-9  md:h-10 p-2 rounded -ml-24 cursor-pointer">Search</button>
       </div>
       
       <table className="mx-auto mt-12 border-separate border-spacing-x-1.5 border-spacing-y-5
       md:border-spacing-x-24 md:border-spacing-y-8">
         <thead  className="outline outline-white-800">
         <tr>
            <th className="text-sm md:text-base">#</th>
            <th className="text-sm md:text-base">Coin</th>
            <th className="text-sm md:text-base">Price</th>
            <th className="text-sm md:text-base">24H Change</th>
            <th className="text-sm md:text-base">Market Cap</th>
         </tr>
         </thead>
         <tbody  className="outline outline-white-800">
         {displayList.map( (c,i) =>(
             <tr key={c.id} className="outline outline-white">
               <td className="text-sm md:text-base">{i+1}</td>
               <td className="flex items-center gap-1 md:gap-1.5 flex-wrap">
               <img src={c.image} className="h-8.5 md:h-11" />
               <span className="text-sm md:text-base">{c.id}</span> 
               </td>
               <td className="text-sm md:text-base">{c.current_price}</td>

               <td className={ c.price_change_percentage_24h>0? "text-green-400  text-sm md:text-base"
                : c.price_change_percentage_24h<0? "text-red-500 text-sm md:text-base"
                : "text-white text-sm md:text-base" }  >{c.price_change_percentage_24h.toFixed(3)} %</td>
               <td className="text-sm md:text-base">{c.market_cap}</td>
             </tr>
         )
        ) }
        </tbody>
       </table>
</main>
)
}
export default Main2;