import { useState } from "react";
import { useEffect } from "react";
function Main2(){
   const [coin,setcoins] = useState([]);
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
<main className="bg-[#0d023c] text-white h-165 text-center">
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
</main>
)
}
export default Main2;