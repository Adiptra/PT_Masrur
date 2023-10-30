import { Container, Spacing } from ".";
import { Navbar, Footer } from "../components/reusable";
import {
  AboutSection,
  BenefitSection,
  ExperienceSection,
  HeroSection,
  HistorySection,
  ProductSection,
  ServiceSection,
} from "../components/sections";

const Main = () => {
  return (
    <main className="bg-baseColor flex justify-center flex-col relative h-max bg-[#F5F5F7]">
      {/* full */}
      <HeroSection />

      {/* no full */}
      <Spacing>
        <Container>
          <BenefitSection />
          <AboutSection />
        </Container>
      </Spacing>

      {/* full */}
      <HistorySection />

      {/* no full */}
      <Spacing>
        <Container>
          <ProductSection />
          <ExperienceSection />
        </Container>
      </Spacing>

      {/* full */}
      <ServiceSection />
      <Footer />
    </main>
  );
};

export default Main;
