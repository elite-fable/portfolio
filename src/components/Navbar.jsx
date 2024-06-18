import {BiSolidHomeHeart} from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa"; // Correct the icon name
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa"; // Correct the icon name
import { FaMedium } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className=" mb-50 flex items-center justify-between py-7">
      <div className="text-blue-500 flex items-center justify-center text-4xl gap-4 mx-2 w-10">
        <BiSolidHomeHeart/>
      </div>
      <div className="text-blue-500 m-8 flex items-center justify-center gap-4 text-4xl"> {/* Added className */}
        <FaGithub/>
        <FaLinkedin/> 
        <FaMedium/>
        <FaTwitterSquare/> 
      </div>
    </nav>
  );
};

export default Navbar;
