import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Banner.css";
import bannerImg1 from "../../../assets/BannerImg/bannerImg1.jpg";
import bannerImg2 from "../../../assets/BannerImg/bannerImg2.jpg";
import bannerImg3 from "../../../assets/BannerImg/bannerImg3.jpg";
const Banner = () => {
  return (
    <>
      <div className="relative">
        <Carousel showThumbs={true} showStatus={false}>
          {/* Slide 1 */}
          <div className="relative h-[80vh] md:h-[90vh] overflow-hidden">
            <img
              src={bannerImg1}
              alt="Banner 1"
              className="w-full h-full object-cover"
            />
            <div className="banner-style">
              <h1 className="text-2xl md:text-8xl font-bold uppercase w-1/2 mx-auto">
                Experience The Nature&apos;s Beauty
              </h1>
              <p className="mt-2 text-sm md:text-xl w-1/2 mx-auto">
                Embark on the adventure of a lifetime! Discover the hidden gems
                of America, from majestic national parks to serene coastal
                towns. Whether you&apos;re seeking thrilling hikes, scenic
                drives, or unforgettable cityscapes, your journey starts here.
              </p>
              <button className="text-lg md:text-xl font-medium uppercase btn rounded-none bg-[#F56960] border-none text-white hover:bg-[#124ba7]">
                Continue Reading
              </button>
            </div>
          </div>
          {/* Slide 2 */}
          <div className="relative h-[80vh] md:h-[90vh] overflow-hidden">
            <img
              src={bannerImg2}
              alt="Banner 1"
              className="w-full h-full object-cover"
            />
            <div className="banner-style">
              <h1 className="text-2xl md:text-8xl font-bold uppercase w-1/2 mx-auto">
                Journey Across the USA
              </h1>
              <p className="mt-2 text-sm md:text-xl w-1/2 mx-auto">
                Embark on the adventure of a lifetime! Discover the hidden gems
                of America, from majestic national parks to serene coastal
                towns. Whether you&apos;re seeking thrilling hikes, scenic
                drives, or unforgettable cityscape, your journey starts here.
              </p>
              <button className="text-lg md:text-xl font-medium uppercase btn rounded-none bg-[#F56960] border-none text-white hover:bg-[#124ba7]">
                Continue Reading
              </button>
            </div>
          </div>
          {/* Slide 3 */}
          <div className="relative h-[80vh] md:h-[90vh] overflow-hidden">
            <img
              src={bannerImg3}
              alt="Banner 1"
              className="w-full h-full object-cover"
            />
            <div className="banner-style">
              <h1 className="text-2xl md:text-8xl font-bold uppercase w-1/2 mx-auto">
                Discover Your Next Adventure
              </h1>
              <p className="mt-2 text-sm md:text-xl w-1/2 mx-auto">
                Embark on the adventure of a lifetime! Discover the hidden gems
                of America, from majestic national parks to serene coastal
                towns. Whether you&apos;re seeking thrilling hikes, scenic
                drives, or unforgettable cityscape, your journey starts here.
              </p>
              <button className="text-lg md:text-xl font-medium uppercase btn rounded-none bg-[#F56960] border-none text-white hover:bg-[#124ba7]">
                Continue Reading
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Banner;
