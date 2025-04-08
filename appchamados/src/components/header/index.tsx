import Link from "next/link";
import { FiUser, FiLogOut } from "react-icons/fi";


const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-2 py-4 bg-whiter h-20 shadow-sm">
      <div className="w-full max-w-7xl mx-auto flex gap-2 justify-around items-center">
        <Link href="/" className="font-bold text-2xl pl-1 hover:tracking-widest duration-300"><span className="text-red-500 ">CAR</span>CHAMADOS</Link>
        <div className="flex gap-4 items-center">
          <Link href="/dashboard"><FiUser size={26} color="#4b5563" /></Link>
          <button ><Link href="/dashboard"><FiLogOut size={26} color="#4b5563" /></Link></button>
        </div>

      </div>
    </header>


  )

}


export default Header;