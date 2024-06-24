import axios from "axios";

export default function LandingPage() {
  const handleInstall = () => {
    axios
      .post("https://ewamallbe.onrender.com/api/DashBoard/NewDownload", {})
      .then((response) => {
        console.log("API response:", response.data);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };

  return (
    <div className="relative flex flex-col items-center lg:grid grid-cols-2 md:h-[100vh] md:py-0 pb-[10%] w-full bg-background_gradient_3  ">
      <div className="absolute hidden md:block top-0 left-[30%] w-56 h-56 rounded-[100%] bg-[#ffffff22]" />
      <div className="absolute hidden md:block bottom-0 left-[60%] w-56 h-56 rounded-[100%] bg-[#ffffff22]" />
      <div className="lg:absolute  block lg:top-1/2 md:right-[10%] md:transform md:-translate-y-1/2">
        <img
          src="/images/iconbackground.png"
          className="block lg:h-[70vh] lg:w-[70vh] xl:h-[80vh] xl:w-[80vh] h-[55vh] w-[50vh] mt-[15%]  "
          alt="Background Icon"
        />
      </div>
      <div className="lg:col-span-1 lg:px-[20%] px-[10%] flex flex-col justify-center gap-4">
        <p
          style={{ letterSpacing: "-0.07em" }}
          className="lg:text-[48px] text-[24px] font-roboto text-[#4B6BB2] font-medium"
        >
          TẢI NGAY
        </p>
        <p
          style={{ letterSpacing: "0.01em" }}
          className=" font-roboto text-[#012c54] lg:text-[75px] text-[37px] font-semibold"
        >
          ỨNG DỤNG EWAMALL
        </p>
        <p className="text-[#6a6a6aa6] lg:text-[20px] text-[16px] font-roboto">
          Sứ mệnh của EWaMall là mang đến trải nghiệm mua sắm cho người lớn tuổi
          liền mạch, cung cấp các tiện ích thuận tiện và hỗ trợ thao tác dễ dàng
          và thú vị.
        </p>
        <div>
          <a
            href="https://ewamallbe.onrender.com/api/DashBoard/Download"
            onClick={handleInstall}
            style={{ maxWidth: "fit-content" }} 
            className="flex flex-row gap-4 items-center rounded-lg lg:px-4 lg:py-2 px-2 py-1 justify-center bg-[#242058]"
          >
            <img
              src="/images/google-play.png"
              className="block lg:h-[40px] lg:w-[40px] h-[25px] w-[25px]"
              alt="Background Icon"
            />
            <div className="flex flex-col items-start justify-start">
              <p className="text-white lg:text-[12px] text-[9px]">GET IT ON</p>
              <p
                style={{ letterSpacing: "0.05em" }}
                className="text-white font-roboto lg:text-[17px] text-[14px] font-semibold"
              >
                Google Play
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
