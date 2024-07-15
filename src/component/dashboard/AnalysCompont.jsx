import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import { IoMdCloudDownload } from "react-icons/io";
import { IoLogoUsd } from "react-icons/io5";
import { HiMiniUsers } from "react-icons/hi2";
import { IoStorefront } from "react-icons/io5";
export default function AnalysCompont({ title, nameIcon, data }) {
  const renderIcon = () => {
    switch (nameIcon) {
      case "money":
        return <IoLogoUsd size={18} color="#b7b7b7cf" />;
      case "sales":
        return <IoStorefront size={18} color="#b7b7b7cf" />;
      case "customer":
        return <HiMiniUsers size={18} color="#b7b7b7cf" />;
      case "downloads":
        return <IoMdCloudDownload size={18} color="#b7b7b7cf" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col col-span-3 border border-solid border-1 border-[#c8c2c224] rounded-lg p-4 shadow-boxAnalycs">
      <IconContext.Provider value={{ size: "1.5rem" }}>
        <div className="flex flex-row justify-between items-center">
          <p className="text-[1.1rem]">{title}</p>
          <div>{renderIcon()}</div>
        </div>
        <p className="text-[20px] font-semibold pt-4">{nameIcon === "money" ? `₫ ${data}` : `+ ${data}`}</p>
      </IconContext.Provider>
    </div>
  );
}

AnalysCompont.propTypes = {
  title: PropTypes.string.isRequired,
  nameIcon: PropTypes.oneOf(["money", "sales", "customer", "downloads"]),
  data: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};
