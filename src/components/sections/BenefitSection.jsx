/* eslint-disable react/jsx-key */
import { benefitContent } from "../../constants/content/benefitContent";
import { TextIcon } from "../reusable";

const BenefitSection = () => {
  const benefits = benefitContent.benefits;
  return (
    <div className="mt-16">
      <div className="containerBenefit flex justify-between">
        <div className="text-[#0F172A] text-[36px] font-generalSb w-[25%]">
          {benefitContent.title}
        </div>
        <div className="right-content w-[75%]">
          <div className="flex px-2 py-2">
            {benefits.map((benefit) => (
              <div className="flex gap-3 py-2" key={benefit.id}>
                <div className=" w-[100px] h-[47px]">
                  <TextIcon
                    icon={benefit.icon}
                    className="py-2 px-2 rounded-full bg-[#FFDCDD]"
                  />
                </div>
                <div className="desc-right">
                  <div className="title font-generalSb text-[24px]">
                    {benefit.title}
                  </div>
                  <div className="desc text-[16px] mt-4">{benefit.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitSection;
