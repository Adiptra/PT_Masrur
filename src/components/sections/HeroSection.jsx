/* eslint-disable react/no-unescaped-entities */
import AOS from "aos";
import "aos/dist/aos.css";
import { Spacing, Container } from "../../layouts";
import { Button } from "../reusable";
AOS.init();

const HeroSection = () => {
  return (
    <section className="bg-hero h-[100vh] bg-no-repeat bg-cover text-white text-center flex justify-center items-center" id="home">
      <Spacing>
        <Container>
          <div className="content max-w-[1108px]">
            <div className="text">
              <h2
                data-aos="zoom-in"
                data-aos-duration="2000"
                className="text-[#BEC1CA] rounded-[24px] text-[10px] md:text-sm lg:text-base bg-[#56565680] inline px-[20px] py-[5px] font-generalMd"
              >
                COAL & GOLD MINING , IRON ORE, TRADING, CONTRACTOR , EXPORT &
                IMPORT
              </h2>
              <h1
                data-aos="fade-up"
                data-aos-easing="ease-out"
                className="text-4xl mt-4 lg:text-[54px] drop-shadow-text font-generalSb leading-tight"
              >
                Providing Best Quality Coal for Your Needs!
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
                className="max-w-[720px] inline-block mt-6 font-generalLi lg:text-base text-sm"
              >
                "We are a premium coal trader from Indonesia who offers products
                with superior specifications. We come with the best coal
                specifications, an easy purchasing process, and competitive
                prices. Unmatched coal quality for customer satisfaction."
              </p>
            </div>

            <div
              className="btn"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <Button className="bg-[#EB3137] hover:bg-red-500 inline-block rounded-[3px] mt-[28px]">
                Let's Explore
              </Button>
            </div>
          </div>
        </Container>
      </Spacing>
    </section>
  );
};

export default HeroSection;
