
function Navbar() {
  return (
    <nav className="bg-white shadow-md ">
        <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
             <div>
            <h1 className="text-[#C2B280] text-base sm:text-xl md:text-2xl font-bold">EMOUACCE STORE</h1>
        </div>

        <div className="flex gap-2 md:gap-4">
            <button className="bg-yellow-800 text-white px-2 py-1 rounded text-sm md:text-base">Login</button>
             <button className="bg-yellow-800 text-white px-2 py-1 rounded text-sm md:text-base">Sign Up</button>
              <button>Wishlist</button>
               <button>Cart</button>
        </div>
        </div>
       
    </nav>
  )
}

export default Navbar
