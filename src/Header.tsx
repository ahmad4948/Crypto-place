function Header(){
return(
   <nav className="bg-[#0d023c] h-22 flex border-b-3 border-gray-600">
      <img src="bitcoin.png" className="w-24 h-auto ml-6"/>
      <h1 className="text-white text-2xl my-auto">Cryptoplace</h1>
      <ul className="text-white flex justify-around w-120 mx-auto my-auto">
         <li className="inline-block cursor-pointer"> <a href="#">Home</a></li>
         <li className="inline-block cursor-pointer"> <a href="#">Features</a></li>
         <li className="inline-block cursor-pointer"> <a href="#">Pricing</a></li>
         <li className="inline-block cursor-pointer"> <a href="#">Blog</a></li>
      </ul>
      <select className="cursor-pointer text-white mr-12 bg-[#0d023c] h-8 my-auto">
         <option className="">USD</option>
         <option>EUR</option>
         <option>EGP</option>
      </select>
      <button className="text-black rounded bg-white mr-24 h-10 my-auto w-16 cursor-pointer">Sign Up</button>
   </nav>
)
}
export default Header;