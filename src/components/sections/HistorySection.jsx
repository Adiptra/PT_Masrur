/* eslint-disable react/jsx-key */
import AOS from "aos";
import "aos/dist/aos.css";
import { historySection } from "../../constants/content/historyContent";
import { TextIcon } from "../reusable";
import { iconArrow, bgHistory1, bgHistory2 } from "../../images";
import { Container, Spacing } from "../../layouts";
AOS.init();
// import BenefitSection from "./BenefitSection";

const HistorySection = () => {
  const histories = historySection.histories;
  return (
    <section className='relative flex w-full text-white mt-16 bg-[#0F172A] pb-16' id="history">
      <img src={bgHistory1} className='absolute -top-10 -left-2' />
      <img src={bgHistory2} className='absolute -bottom-10' />
      <Spacing className='w-full'>
        <Container>
          <div className='wrapper'>
            <div className='container-1 flex justify-center items-center flex-col mb-32'>
              <div
                data-aos='fade-zoom-in'
                data-aos-easing='ease-in-back'
                data-aos-duration='1000'
                data-aos-once='true'
                className='title text-center text-[36px] font-InterBd py-16'>
                {historySection.title}
              </div>
              {histories.map((history) => {
                const dataAosDelay = 300 + (history.id - 1) * 200;
                return (
                  <div
                    key={history.id}
                    data-aos='fade-up'
                    data-aos-duration='1000'
                    data-aos-delay={dataAosDelay}
                    data-aos-once='true'
                    className='flex justify-between pt-4 pb-16 border-b border-[#BEC1CA] w-[70%] gap-x-[10px]'>
                    <div className='left-content w-[25%] '>
                      <h1 className='font-InterBd text-2xl lg:text-[32px]'>{history.year}</h1>
                      <p>{history.month}</p>
                    </div>
                    <div className='right-content w-[50%] '>
                      <h1>{history.desc}</h1>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className='flex justify-center w-full' data-aos='fade-down' data-aos-duration='1000' data-aos-delay='400'>
              <TextIcon icon={iconArrow} className='' />
            </div>
            <div className='flex justify-center w-full mt-5'>
              <h1
                data-aos='fade-zoom-in'
                data-aos-easing='ease-in-back'
                data-aos-duration='1000'
                data-aos-once='true'
                className='text-[20px] font-InterBd'>
                Keep Scrolling
              </h1>
            </div>
          </div>
        </Container>
      </Spacing>
    </section>
  );
};

export default HistorySection;
