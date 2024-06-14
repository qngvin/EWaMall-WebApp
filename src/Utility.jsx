import { MdNotificationsActive } from "react-icons/md";
export default function Utility() {
  return (
    <div className="relative md:grid grid-cols-2 md:h-[100vh] md:py-0 py-[5%] w-full bg-white  ">
      <div className="col-span-1 md:px-[20%] px-[10%] md:py-0 py-[5%] flex flex-col justify-center gap-4">
        <p
          style={{ letterSpacing: "-0.07em" }}
          className="text-[33px] font-roboto text-[#E9BB45] font-medium"
        >
          Về tiện ích và chất lượng
        </p>
        <p
          style={{ letterSpacing: "0.01em" }}
          className=" font-roboto text-[#242058] text-[38px] font-semibold"
        >
          ƯU TIÊN CHẤT LƯỢNG TIỆN ÍCH TỐI ƯU
        </p>
        <p className="text-[#4B6BB2] text-[20px] font-roboto  md:inline-block hidden">
          Tại sao nên chọn EWaMall là nơi mua sắm và chăm sóc sức khoẻ đáng tin
          cậy cho người lớn tuổi?
        </p>
        <p className="text-[#4B6BB2] text-[20px] font-roboto md:inline-block hidden">
          Chúng tôi không chỉ đơn thuần bán các sản phẩm chất lượng, mà còn tạo
          ra những giá trị nền tảng lâu dài. Tại đây, mọi người có thể đặt niềm
          tin vững chắc để khám phá toàn bộ những dòng sản phẩm dành riêng cho
          người cao tuổi với các tiện ích tối ưu chỉ trong một nền tảng.
        </p>
      </div>
      <div className="col-span-1 flex flex-col md:px-0 px-[10%]  ">
        <div className="grid grid-cols-12 mt-3 md:mt-6 ">
          <div className="col-span-12 flex items-center gap-10 justify-start h-14  ">
            <div className="flex flex-row items-center gap-2 justify-start  bg-background_gradient_gray pl-5 md:pr-24 md:py-4 py-2 rounded-lg">
              <MdNotificationsActive size={30} />
              <p className="font-roboto text-[15px]  md:text-[18px] text-[#242058]">
                Đa dạng ưu đãi
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-10  mt-5 ">
          <div className="col-span-5 flex items-center gap-10 justify-end h-14 mt-5  ">
            <div className="flex flex-row items-center gap-2 justify-start  bg-background_gradient_green pl-5 md:pr-10 md:py-4 py-2 rounded-lg">
              <MdNotificationsActive size={30} />
              <p className="font-roboto  text-[15px]  md:text-[18px] text-[#242058]">
                Đăng ký, đăng nhập
              </p>
            </div>
          </div>
          <div className=" col-span-7 flex items-center h-14 ">
            <div className="flex flex-row items-center gap-2 justify-start  bg-background_gradient_blue pl-5 md:pr-20 md:py-4 py-2  rounded-lg">
              <MdNotificationsActive size={30} />
              <p className="font-roboto  text-[15px]  md:text-[18px] text-[#242058]">
                Duyệt tìm sản phẩm chất lượng
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-10 mt-3 md:mt-6 ">
          <div className="col-span-6 flex items-center gap-10 justify-end h-14 mt-5  ">
            <div className="flex flex-row items-center gap-2 justify-start  bg-background_gradient_purple pl-5 pr-10  py-4 rounded-lg">
              <MdNotificationsActive size={30} />
              <p className="font-roboto text-[15px] md:text-[18px] text-[#242058]">
                Xác thực thông tin
              </p>
            </div>
          </div>
          <div className=" col-span-6 flex items-center h-14 ">
            <div className="flex flex-row items-center gap-2 justify-start  bg-background_gradient_yellow pl-5 pr-6  py-4 rounded-lg">
              <MdNotificationsActive size={30} />
              <p className="font-roboto text-[15px] md:text-[18px] text-[#242058]">
                Giỏ hàng yêu thích
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 mt-3 md:mt-6 ">
          <div className="col-span-12 flex items-center gap-10 justify-center h-14  ">
            <div className="flex flex-row items-center gap-2 justify-start  bg-background_gradient_gray pl-5 pr-24 py-4 rounded-lg">
              <MdNotificationsActive size={30} />
              <p className="font-roboto text-[15px] md:text-[18px] text-[#242058]">
                Tương tác, bình luận với cộng đồng
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-10 mt-3 md:mt-6 ">
          <div className="col-span-6 flex items-center gap-10 justify-end h-14  ">
            <div className="flex flex-row items-center gap-2 justify-start  bg-background_gradient_blue pl-5 pr-24 py-4 rounded-lg">
              <MdNotificationsActive size={30} />
              <p className="font-roboto text-[15px] md:text-[18px] text-[#242058]">
                Đa dạng ưu đãi
              </p>
            </div>
          </div>
          <div className=" col-span-6 flex items-center pl-6 h-14 ">
            <div className="flex flex-row items-center gap-2 justify-start  bg-background_gradient_yellow pl-5  py-4 rounded-lg">
              <MdNotificationsActive size={30} />
              <p className="font-roboto text-[15px] md:text-[18px] text-[#242058]">
                Thông báo hệ thống
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-10 mt-3 md:mt-6 ">
          <div className="col-span-5 flex items-center gap-10 justify-end h-14  ">
            <div className="flex flex-row items-center gap-2 justify-start  bg-background_gradient_yellow pl-5 pr-10  py-4 rounded-lg">
              <MdNotificationsActive size={30} />
              <p className="font-roboto text-[15px] md:text-[18px] text-[#242058]">
                Hành trình đơn hàng
              </p>
            </div>
          </div>
          <div className=" col-span-7 flex items-center pl-6 h-14 mt-5 ">
            <div className="flex flex-row items-center gap-2 justify-start  bg-background_gradient_green pl-5 pr-20  py-4 rounded-lg">
              <MdNotificationsActive size={30} />
              <p className="font-roboto text-[15px] md:text-[18px] text-[#242058]">
                Chat với nhà bán
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 mt-3 md:mt-6 ">
          <div className="col-span-12 flex items-center gap-10 justify-center h-14 pr-14  ">
            <div className="flex flex-row items-center gap-2 justify-start  bg-background_gradient_purple pl-5 pr-24 py-4 rounded-lg">
              <MdNotificationsActive size={30} />
              <p className="font-roboto text-[15px] md:text-[18px] text-[#242058]">
                Đặt hàng trực tiếp
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 mt-3 md:mt-6 ">
          <div className="col-span-12 flex items-center gap-10 justify-end h-14 pr-14  ">
            <div className="flex flex-row items-center gap-2 justify-start  bg-background_gradient_gray pl-5 pr-24 py-4 rounded-lg">
              <MdNotificationsActive size={30} />
              <p className="font-roboto text-[15px] md:text-[18px] text-[#242058]">
                Thêm vào giỏ hàng
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
