/* eslint-disable react/jsx-key */
import { historySection } from "../../constants/content/historyContent";
import { Container, Spacing } from "../../layouts";
import React from "react";
import { TextIcon } from "../reusable";
import { iconArrow } from "../../images";
// import BenefitSection from "./BenefitSection";

const HistorySection = () => {
  const histories = historySection.histories;
  return (
    <section className="flex w-full text-white mt-16 bg-[#0F172A] pb-16">
      <div className="wrapper">
        <div className="container-1 flex justify-center items-center flex-col mb-32">
          <div className="title text-center text-[36px] font-generalBd py-16">
            {historySection.title}
          </div>
          {histories.map((history) => (
            <div className="flex justify-between pt-4 pb-16 border-b border-[#BEC1CA] w-[70%] gap-x-[10px]">
              <div className="left-content w-[25%] ">
                <h1 className="font-generalSb text-[32px]">{history.year}</h1>
                <p>{history.month}</p>
              </div>
              <div className="right-content w-[50%] ">
                <h1>{history.desc}</h1>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center w-full">
          <TextIcon icon={iconArrow} className="" />
        </div>
        <div className="flex justify-center w-full mt-5">
          <h1 className="text-[20px] font-generalSb">Keep Scrolling</h1>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
