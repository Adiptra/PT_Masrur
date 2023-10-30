import React from "react";
import { Spacing, Container } from "../../layouts";
import { TextIcon } from "../reusable";
import { about, quote } from "../../images";

const AboutSection = () => {
  return (
    <div className="border-t-[1px] pt-16 mt-16 border-[#00000080]">
      <Container>
        <div>
          <h1 className="font-generalSb text-[36px] text-center leading-10">
            Let’s get to know us more deeply!
          </h1>
          <p className="text-[#0F172A] text-xl text-center">
            Get to know us more deeply, so you can trust us!
          </p>

          <div className="about-us mt-20 flex justify-between">
            <div className="left">
              <TextIcon icon={about} text={"About Us"} />
            </div>

            <div className="right text-xl">
              <p className="max-w-[628px]">
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

      <Container>
        <div>
          <div className="left">
            
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
