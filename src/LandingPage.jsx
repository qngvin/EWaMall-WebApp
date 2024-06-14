export default function LandingPage() {
  return (
    <div className="relative grid grid-cols-2 h-[100vh] w-full bg-background_gradient_3  ">
      <div className="absolute top-0 left-[30%] w-56 h-56 rounded-[100%] bg-[#ffffff22]" />
      <div className="absolute bottom-0 left-[60%] w-56 h-56 rounded-[100%] bg-[#ffffff22]" />
      <div className="absolute top-1/2 right-[10%] transform -translate-y-1/2">
        <img
          src="../public/images/iconbackground.png"
          className="block h-[80vh] w-[75vh]"
          alt="Background Icon"
        />
      </div>
      <div className="col-span-1 px-[20%] flex flex-col justify-center gap-4">
        <p
          style={{ letterSpacing: "-0.07em" }}
          className="text-[48px] font-roboto text-[#4B6BB2] font-medium"
        >
          TẢI NGAY
        </p>
        <p
          style={{ letterSpacing: "0.01em" }}
          className=" font-roboto text-[#012c54] text-[75px] font-semibold"
        >
          ỨNG DỤNG EWAMALL
        </p>
        <p className="text-[#6a6a6aa6] text-[20px] font-roboto">
          Sứ mệnh của EWaMall là mang đến trải nghiệm mua sắm cho người lớn tuổi
          liền mạch, cung cấp các tiện ích thuận tiện và hỗ trợ thao tác dễ dàng
          và thú vị.
        </p>
        <div>
          <button className="flex flex-row gap-4 items-center rounded-lg px-4 py-2 justify-center bg-[#242058]">
            <img
              src="../public/images/google-play.png"
              className="block h-[40px] w-[40px]"
              alt="Background Icon"
            />
            <div className="flex flex-col items-start justify-start">
              <p className="text-white text-[12px]">GET IT ON</p>
              <p  style={{ letterSpacing: "0.05em" }} className="text-white font-roboto text-[17px] font-semibold">
                Google Play
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
