import {
  BuildSection,
  ClonabledSection,
  Container,
  Footer,
  Header,
  ProcessGrid,
  StyleSection,
  Version,
} from "./(components)";

export default function AdvancedHomepage() {
  return (
    <div className="bg-ah-white">
      <Container>
        <Header />
      </Container>
      <div className="bg-none lg:bg-ah-background bg-no-repeat bg-rightx mt-[96px] bg-[length:auto_1050px] bg-[right_-100px]">
        <Container>
          <Version />
          <h2 className="text-cs-64 text-sh-black max-w-[510px] mt-8 leading-[80px] font-bold">
            Where data and creativity come together.
          </h2>
          <p className="mt-8 text-ah-gray max-w-[550px] text-cs-20">
            The fastest way to build and deploy websites with reusable
            components.
          </p>
          <div className="flex flex-wrap gap-9 pt-[82px] pb-[124px]">
            <button className="bg-ah-green px-6 py-3 rounded-full text-ah-white">
              GET STARTED
            </button>
            <button className="text-ah-gray">VIEW DEMO</button>
          </div>
        </Container>
      </div>
      <div className="bg-ah-dark bg-ah-bg-circles bg-no-repeat bg-top pb-24">
        <Container className="pt-24">
          <h3 className="text-cs-36 max-w-[400px] text-center mx-auto text-ah-white">
            This is a new creative process
          </h3>
          <p className="text-ah-gray text-center mt-4">
            Quisque eleifend velit vel erat fringilla interdum
          </p>
        </Container>
        <ProcessGrid />
      </div>
      <div className="bg-ah-white pt-24">
        <ClonabledSection />
      </div>
      <div className="bg-ah-white pt-[72px]">
        <StyleSection />
      </div>
      <div className="bg-ah-white pt-[72px] pb-24">
        <BuildSection />
      </div>
      <Footer />
    </div>
  );
}
