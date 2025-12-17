
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md ">
        <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
             <div>
            <h1 className="text-[#918252] text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[0.07em]">EMOUACCE</h1>
        </div>

        <div className="flex gap-2 md:gap-4">
            <button className="bg-yellow-800 text-white px-2 py-1 rounded text-sm md:text-base">Login</button>
             <button className="bg-yellow-800 text-white px-2 py-1 rounded text-sm md:text-base">Sign Up</button>
              <button>Wishlist</button>
               <button>Cart</button>
        </div>
        </div>
       <div className="flex justify-center w-full py-4">
            <input type="text" 
            placeholder="Search Your Products"
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus-ring-2 focus:ring-[#F5F5DC] bg-white text-gray-600" />
        </div>
    </nav>
  )
}

export default Navbar
