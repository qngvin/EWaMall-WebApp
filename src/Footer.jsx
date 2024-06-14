import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
export default function Footer() {
  return (
    <div className="py-[5%] flex flex-col items-center justify-center bg-[#071c32] gap-12">
      <div className="flex flex-row md:gap-10 gap-4 text-white text-[15px] md:text-[20px]">
        <p>About</p>
        <p>Blog</p>
        <p>Job</p>
        <p>Press</p>
        <p>Accessibility</p>
        <p>Partners</p>
      </div>
      <div className="flex flex-row gap-10">
        <FaFacebook color="white" className="md:w-8 md:h-8 h-6 w-6" />
        <FaInstagram color="white" className="md:w-8 md:h-8 h-6 w-6" />
        <FaTiktok color="white" className="md:w-8 md:h-8 h-6 w-6"  />
      </div>
      <p className="text-white">© 2024 EwallMall, Inc. All rights reserved.</p>
    </div>
  );
}
