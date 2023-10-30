/* eslint-disable react/jsx-key */
import React from "react";
import { Spacing, Container } from "../../layouts";
import { Button, TextIcon } from "../reusable";
import { about, quote } from "../../images";
import { aboutSection } from "../../constants/content/aboutContent";

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
        <div className="mt-32 bg-[#dfe8ff] py-16 px-12 rounded-[20px] border-[#c0d2ff] border relative">
          <div className="wrapper grid grid-cols-2">
            {aboutSection.map((data) =>
              data.purpose.map((dataText) => (
                <div className="content max-w-[700px] z-[10]">
                  <div className="title flex items-center text-[#668DEB] text-[28px] gap-x-4">
                    <img src={quote} alt="" />
                    <h2 className="font-generalSb">{dataText.title}</h2>
                  </div>

                  <div className="text">
                    {dataText.content.map((content) => (
                      <div
                        className="text flex gap-x-4 items-start mt-10 ml-9"
                        key={content.id}
                      >
                        <p className="text-[#668DEB] text-[38px] font-generalMd">
                          {content.sub_id}
                        </p>
                        <p className="max-w-[500px] text-xl">{content.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
          <Button
            className={"absolute bottom-20 bg-white border border-[#00000033]"}
          >
            Keep Scrolling
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
