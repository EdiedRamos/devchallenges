import { Container } from "./container";

export function Footer() {
  return (
    <footer className="py-24 bg-ah-dark text-ah-white">
      <Container>
        <div className="flex flex-wrap justify-between">
          <h4 className="text-ah-white text-cs-36 w-full max-w-[500px]">
            Always with the legendary customer{" "}
            <span className="text-ah-green">experience.</span>
          </h4>
          <div className="flex flex-wrap gap-7">
            <ul className="flex flex-col gap-6">
              <li>Overview</li>
              <li>Glossary</li>
              <li>FAQ</li>
              <li>Style Guide</li>
            </ul>
            <ul className="flex flex-col gap-6">
              <li>Colours</li>
              <li>Typography</li>
              <li>Shadow</li>
              <li>Avatar</li>
              <li>Buttons</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 items-center mt-9">
          <img src="/advanced-homepage/hufie-logo.svg" alt="logo" />
          <p className="text-cs-20">Hufie</p>
        </div>
      </Container>
    </footer>
  );
}
