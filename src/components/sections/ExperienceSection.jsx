/* eslint-disable react/jsx-key */
import React from "react";
import { experienceSection } from "../../constants/content/experienceContent";

const ExperienceSection = () => {
  const mappedLists = experienceSection.map((section) => {
    section.content[0].id;
  });

  console.log(mappedLists);
  return (
    <div className="mt-[100px] border-t-[1px] pt-16">
      <div className="wrapper ">
        {experienceSection.map((element) => (
          <>
            <h1 className="text-center font-generalSb text-4xl">
              {element.title}
            </h1>
            <h3 className="text-center text-xl">{element.subtitle}</h3>
          </>
        ))}

        <div className="content-wrapper mt-24 w-full">
          {experienceSection.map((element) => (
            <div className="flex rounded-[20px] bg-[#F0F5FF]">
              <div className="left relative w-1/2">
                <img
                  src={element.content[0].img}
                  alt=""
                  className="object-contain"
                  style={{ borderRadius: "20px 0 0 20px" }}
                />
                <div
                  className="absolute top-0 flex justify-center items-center bg-black w-full h-full bg-opacity-60"
                  style={{ borderRadius: "20px 0 0 20px" }}
                >
                  <h1 className="text-white font-generalSb text-3xl w-[55%]">
                    {element.content[0].title}
                  </h1>
                </div>
              </div>
              <div className="right w-1/2 flex justify-center">
                <div className="py-10 w-[82%]">
                  <div className="wrapper">
                    <div className="title font-generalSb text-[24px] text-[#556487]">
                      {element.content[0].buyer[0].title}
                    </div>
                    {element.content[0].buyer[0].lists.map((list) => (
                      <div className="flex gap-4 mt-2" key={list.id}>
                        <img src={list.icon} />
                        <h3>{list.desc}</h3>
                      </div>
                    ))}
                    <div className="title font-generalSb text-[24px] mt-6 text-[#556487]">
                      {element.content[0].legality[0].title}
                    </div>
                    {element.content[0].legality[0].lists.map((list) => (
                      <div className="flex gap-4 mt-2" key={list.id}>
                        <img src={list.icon} />
                        <h3>{list.desc}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
