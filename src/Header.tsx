type HeaderProps = { setcurrency: React.Dispatch<React.SetStateAction<"USD" | "EUR" | "AED">>; };
function Header({ setcurrency }: HeaderProps){
return(
   <nav className="bg-[#0d023c] h-22 flex md:border-b-3 border-gray-600 flex-wrap">
      <img src="bitcoin.png" className="w-14 md:w-24 h-auto md:ml-6 order-[-2] md:order-none"/>
      <h1 className="text-white text-base md:text-2xl my-auto order-[-2] md:order-none">Cryptoplace</h1>
      <ul className="text-white flex justify-around w-80 md:w-120 mx-auto my-auto">
         <li className="inline-block cursor-pointer"> <a href="#">Home</a></li>
         <li className="inline-block cursor-pointer"> <a href="#">Features</a></li>
         <li className="inline-block cursor-pointer"> <a href="#">Pricing</a></li>
         <li className="inline-block cursor-pointer"> <a href="#">Blog</a></li>
      </ul>
      <select onChange={(e)=>setcurrency(e.target.value as "EUR" | "AED" | "USD")}
      className="cursor-pointer text-white md:mr-12
       bg-[#0d023c] h-8 my-auto order-[-2] md:order-none md:ml-0 ml-16">
         <option>USD</option>
         <option>EUR</option>
         <option>AED</option>
      </select>
      <button className="text-black rounded bg-white md:mr-24 h-7.5 md:h-10 my-auto w-12 
      md:w-16 cursor-pointer text-xs md:text-base order-[-2] md:order-none md:ml-0 ml-6">Sign Up</button>
   </nav>
)
}
export default Header;