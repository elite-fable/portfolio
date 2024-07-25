/* import {BiSolidHomeHeart} from "react-icons/bi";
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
     // <div className="text-blue-500 m-8 flex items-center justify-center gap-4 text-4xl"> {/* Added className */
      //  <FaGithub/>
       // <FaLinkedin/> 
       // <FaMedium/>
      //  <FaTwitterSquare/> 
    //  </div>
   // </nav>
  //);
//};

//export default Navbar;*/
 
import { BiSolidHomeHeart } from "react-icons/bi";
import { FaLinkedin, FaGithub, FaTwitterSquare, FaMedium } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-50 flex items-center justify-between py-7">
      <div className="text-blue-500 flex items-center justify-center text-4xl gap-4 mx-2 w-10 hover:scale-110 transition-transform duration-300">
        <a href="/" aria-label="Home">
          <BiSolidHomeHeart className="hover:text-yellow-400 transition-transform duration-300 hover:scale-150"/>
        </a>
      </div>
      <div className="text-blue-500 m-8 flex items-center justify-center gap-4 text-4xl">
        <a href="https://github.com/elite-fable" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="hover:scale-150 hover:text-yellow-400 transition-transform duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/chetna-lilhare-3627ab233" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="hover:scale-150 hover:text-yellow-400 transition-transform duration-300" />
        </a>
        <a href="https://medium.com/@chetnalilhare7" target="_blank" rel="noopener noreferrer" aria-label="Medium">
          <FaMedium className="hover:scale-150 hover:text-yellow-400 transition-transform duration-300" />
        </a>
        <a href="https://x.com/ChetnaL7819?t=h7d_MwAAlrdL1aAWI65bIA&s=08" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitterSquare className="hover:scale-150 hover:text-yellow-400 transition-transform duration-300" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;



