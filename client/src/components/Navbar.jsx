import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-grey-100 flex justify-between items-center p-3 mb-10">
      <Link to="/" className="sm:text-3xl text-xl italic font-mono">EasyBooking</Link>
      {/* { user && 
      <button
        onClick={() => logout(undefined)} 
        className="inline-block text-white rounded bg-red-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
      >
        Logout
      </button>
      }  */}
    </nav>
  )
}

export default Navbar;