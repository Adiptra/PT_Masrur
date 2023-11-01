/* eslint-disable react/jsx-key */
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import { Spacing, Container } from "../../layouts";
import { Button, TextIcon } from "../reusable";
import { about, quote } from "../../images";
import { aboutSection } from "../../constants/content/aboutContent";
AOS.init();

const AboutSection = () => {
  return (
    <div className="border-t-[1px] pt-16 mt-16 border-[#00000080]">
      <Container>
        <div>
          <h1
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-once="true"
            className="font-generalSb text-3xl lg:text-[36px] text-center lg:leading-10"
          >
            Let’s get to know us more deeply!
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="500"
            data-aos-once="true"
            className="text-[#0F172A] text-xl text-center mt-2 lg:mt-0"
          >
            Get to know us more deeply, so you can trust us!
          </p>

          <div className="about-us mt-20 flex justify-center items-center flex-wrap  lg:justify-between md:justify-center md:items-center">
            <div
              className="left"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="800"
              data-aos-once="true"
            >
              <TextIcon
                icon={about}
                text={"About Us"}
                className={"text-center"}
              />
            </div>

            <div className="right text-xl mt-4 lg:mt-0">
              <p
                className="max-w-[628px]"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="800"
                data-aos-once="true"
              >
                We are traders of premium Indonesian Coal. We provide kind of
                Coal with many typical Specs. Our mine location at South
                Kalimantan and East Kalimantan. With sufficient land area, we
                are ready to provide your coal needs with production capacity
                that can be adjusted to the needs.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Container className="relative ">
        <div className="mt-32 bg-[#dfe8ff] py-12 px-18 rounded-[20px] border-[#c0d2ff] border h-[768px] lg:h-full">
          <div className="left">
            <div className="flex flex-wrap justify-start px-8 items-center md:items-start md:justify-around ">
              {aboutSection.map((data) =>
                data.purpose.map((dataContent) => (
                  <div className="content flex items-start gap-x-4 max-w-[610px] mt-6">
                    <img src={quote} alt="" className="max-w-[24px] mt-2" />
                    <div className="text">
                      <h2 className="text-[#668DEB] text-[28px] font-semibold ">
                        {dataContent.title}
                      </h2>
                      {dataContent.content.map((content) => (
                        <div className="flex mt-4 items-center gap-x-4">
                          <h2 className="text-[38px] text-[#668DEB]">
                            {content.sub_id}
                          </h2>
                          <p className="max-w-[430px]">{content.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <Button
            className={
              "absolute bottom-10 lg:bottom-20 left-[64px] bg-white border border-[#00000033]"
            }
          >
            Keep Scrolling
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
