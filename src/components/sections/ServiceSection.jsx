import React from "react";

const ServiceSection = () => {
  return (
    <section className="mt-24" id="service">
      <div className="bg-service h-[608px] w-full text-white text-center flex justify-center items-center">
        <div className="text">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            className="text-[45px] md:text-[54px] leading-[40px] md:leading-none font-semibold"
          >
            Get our services and feel the benefits
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
            className="max-w-[810px] mt-10 md:mt-0 text-lg inline-block"
          >
            Providing services as a transparent, fast and precise based coal
            commodity trading company. And Always open opportunities (improvise)
            to partner and invest together .
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
