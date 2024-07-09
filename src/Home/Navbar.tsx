import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo.png";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  return (
    <>
      <div className="flex justify-between py-4 px-8 items-center">
        <div className="flex justify-start gap-8">
          <a href="https://accredian.com" className="w-36">
            <img src={logo} alt="Logo" className="" />
          </a>
          <button className="text-white bg-blue-500 rounded-md px-6 flex gap-2 justify-center items-center">
            Courses
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
        <div>
          <ul>
            <li className="inline-block px-4">Refer & Earn</li>
            <li className="inline-block px-4">Resources</li>
            <li className="inline-block px-4">About Us</li>
            <li className="inline-block px-4  ">
              <button className="bg-gray-200 py-2 px-4 rounded-md">
                Login
              </button>
            </li>
            <li className="inline-block px-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-400">Try For Free</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
