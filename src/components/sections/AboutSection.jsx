import React from "react";
import { Spacing, Container } from "../../layouts";

const AboutSection = () => {
  return (
    <div className="border-t-[1px] pt-16 mt-16 border-[#00000080]">
      <Spacing>
        <Container>
          <div>
            <h1 className="font-generalSb text-[36px] text-center leading-10">
              Let’s get to know us more deeply!
            </h1>
            <p className="text-[#0F172A] text-xl text-center">
              Get to know us more deeply, so you can trust us!
            </p>

            <div className="about-us">
              <div className="left">
                
              </div>
            </div>
          </div>
        </Container>
      </Spacing>
    </div>
  );
};

export default AboutSection;
