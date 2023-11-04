/* eslint-disable react/jsx-key */
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import { benefitContent } from "../../constants/content/benefitContent";
import { TextIcon } from "../reusable";
AOS.init();

const BenefitSection = () => {
  const benefits = benefitContent.benefits;

  return (
    <section className="mt-16">
      <div className="containerBenefit flex-none md:flex justify-center md:justify-between" id="benefit">
        <div
          className="text-[#0F172A] text-[36px] font-generalSb w-full md:w-[25%] md:text-left text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-once="true"
        >
          {benefitContent.title}
        </div>
        <div className="right-content w-full mt-5 md:mt-0 md:w-[75%]">
          <div className="flex-none md:flex py-1">
            {benefits.map((benefit) => {
              const dataAosDelay = 300 + (benefit.id - 1) * 200;

              return (
                <div
                  className="flex gap-3 py-2"
                  key={benefit.id}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={dataAosDelay}
                  data-aos-once="true"
                >
                  <div className="w-[80px] h-[45px]">
                    <TextIcon
                      icon={benefit.icon}
                      className="py-2 px-2 rounded-full bg-[#FFDCDD]"
                    />
                  </div>
                  <div className="desc-right">
                    <div className="title font-generalSb text-[24px] ">
                      {benefit.title}
                    </div>
                    <div className="desc text-[16px] mt-4">{benefit.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
