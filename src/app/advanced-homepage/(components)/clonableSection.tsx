import { CheckItem } from "./checkItem";
import { Container } from "./container";

export function ClonabledSection() {
  return (
    <Container className="flex flex-wrap justify-between">
      <img
        src="/advanced-homepage/image-1.png"
        alt=""
        className="w-full max-w-[500px]"
      />
      <div className="max-w-[500px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-black"
        >
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
        </svg>
        <h4 className="text-ah-black text-cs-36 mt-6 max-w-[300px]">
          200+ cloneable components
        </h4>
        <p className="text-ah-gray max-w-[400px] mt-6">
          From navigation bars to modals, buttons to forms, our library has
          everything you need to jumpstart your development process.
        </p>
        <CheckItem className="mt-6">
          Rapidly build your own design system
        </CheckItem>
        <CheckItem className="mt-3">
          Maintain consistency across your website
        </CheckItem>
        <CheckItem className="mt-3">Save hours in production time</CheckItem>
      </div>
    </Container>
  );
}
