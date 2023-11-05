/* eslint-disable react/jsx-key */
import { experienceSection } from "../../constants/content/experienceContent";

const ExperienceSection = () => {
  return (
    <section className='mt-[100px] border-t-[2px] pt-16' id="experience">
      <div className='wrapper '>
        {experienceSection.map((element) => {
          return (
            <>
              <h1 data-aos='fade-up' data-aos-duration='1000' data-aos-once='true' className='text-center font-generalSb text-4xl'>
                {element.title}
              </h1>
              <h3 data-aos='fade-up' data-aos-duration='1000' data-aos-once='true' data-aos-delay='200' className='text-center text-xl'>
                {element.subtitle}
              </h3>
            </>
          );
        })}

        <div className='content-wrapper mt-24 w-full'>
          {experienceSection.map((element) => (
            <div
              data-aos='fade-right'
              data-aos-duration='1000'
              data-aos-once='true'
              data-aos-delay='400'
              className='flex-none md:flex rounded-[20px] bg-[#F0F5FF] h-auto'>
              <div className='left relative md:w-1/2'>
                <img src={element.content[0].img} alt='' className='object-cover' style={{ borderRadius: "20px 0 0 20px" }} />
                <div
                  className='absolute top-0 flex justify-center items-center bg-black w-full h-full bg-opacity-60'
                  style={{ borderRadius: "20px 0 0 20px" }}>
                  <h1 className='text-white font-generalSb text-3xl w-[55%]'>{element.content[0].title}</h1>
                </div>
              </div>
              <div className='right w-full md:w-1/2 flex justify-center'>
                <div className='pt-7 pb-9 md:pb-auto w-[82%]'>
                  <div className='wrapper'>
                    <div className='title font-generalSb text-[24px] text-[#556487]'>{element.content[0].buyer[0].title}</div>
                    {element.content[0].buyer[0].lists.map((list) => (
                      <div className='flex gap-4 mt-2' key={list.id}>
                        <img src={list.icon} />
                        <h3>{list.desc}</h3>
                      </div>
                    ))}
                    <div className='title font-generalSb text-[24px] mt-6 text-[#556487]'>{element.content[0].legality[0].title}</div>
                    {element.content[0].legality[0].lists.map((list) => (
                      <div className='flex gap-4 mt-2' key={list.id}>
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
        <div className='content-wrapper mt-16 w-full'>
          {experienceSection.map((element) => (
            <div
              data-aos='fade-left'
              data-aos-duration='1000'
              data-aos-once='true'
              data-aos-delay='600'
              className='flex-none md:flex rounded-[20px] bg-[#F0F5FF]'>
              <div className='left relative w-full md:w-1/2'>
                <img src={element.content[1].img} alt='' className='object-cover h-full' style={{ borderRadius: "20px 0 0 20px" }} />
                <div
                  className='absolute top-0 flex justify-center items-center bg-black w-full h-full bg-opacity-60'
                  style={{ borderRadius: "20px 0 0 20px" }}>
                  <h1 className='text-white font-generalSb text-3xl w-[55%]'>{element.content[1].title}</h1>
                </div>
              </div>
              <div className='right w-full md:w-1/2 flex justify-center'>
                <div className='py-10 w-[82%]'>
                  <div className='wrapper'>
                    <div className='title font-generalSb text-[24px] text-[#556487]'>{element.content[1].takeOver[0].title}</div>
                    {element.content[1].takeOver[0].lists.map((list) => (
                      <div className='flex gap-4 mt-2' key={list.id}>
                        <img src={list.icon} />
                        <h3>{list.desc}</h3>
                      </div>
                    ))}
                    <div className='title font-generalSb text-[24px] mt-6 text-[#556487]'>{element.content[1].purchaseAgree[0].title}</div>
                    {element.content[1].purchaseAgree[0].lists.map((list) => (
                      <div className='flex gap-4 mt-2' key={list.id}>
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
    </section>
  );
};

export default ExperienceSection;
