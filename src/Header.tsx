function Header(){
return(
   <nav className="bg-[#0d023c] h-22 flex">
      <h1 className="text-white text-2xl my-auto ml-12">Cryptoplace</h1>
      <ul className="text-white flex justify-around w-120 mx-auto my-auto">
         <li className="inline-block"> <a href="#">Home</a></li>
         <li className="inline-block"> <a href="#">Features</a></li>
         <li className="inline-block"> <a href="#">Pricing</a></li>
         <li className="inline-block"> <a href="#">Blogs</a></li>
      </ul>
      <select className="text-white mr-12 bg-[#0d023c]">
         <option className="">USD</option>
         <option>EUR</option>
         <option>EGP</option>
      </select>
      <button className="text-black rounded bg-white mr-24 h-10 my-auto w-16">Sign Up</button>
   </nav>
)
}
export default Header;