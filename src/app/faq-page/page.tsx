import { AccordionClosed, AccordionOpened, Tabs } from "./(components)";

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-fq-dark">
      <div className="flex flex-col items-center">
        <div className="p-10 mt-[32px] bg-fq-background bg-contain bg-no-repeat bg-center w-full flex justify-center">
          <h2 className=" text-cs-48 w-[450px] text-center text-fq-gray-200">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="mt-[96px] text-cs-20 text-white">
          Products, Website or Brand Design, we’ve got you covered!
        </p>
        <p className="mt-4 text-cs-14 text-fq-gray-100">
          Give us your questions, and we can help you achieve our goals
          together!
        </p>
      </div>
      <div className="flex justify-center mt-10">
        <Tabs />
      </div>
      <div className="flex flex-col items-center gap-5 mt-20">
        <AccordionClosed title="How does it work?" />
        <AccordionOpened
          title="Which platform do you support?"
          description="In a situational interview, the interviewer may ask how you overcame a difficult situation and what you learned from it. You can use your response to demonstrate your flexibility and share an example of how you transformed a negative experience into a positive outcome "
        />
        <AccordionOpened
          title="How do I invite my teammates?"
          description="Collect the contact information of your teammates, including their email addresses or usernames on the platform you will use."
        />
        <AccordionClosed title="Do you have annual plan?" />
        <AccordionClosed title="How to create new workspace" />
        <AccordionClosed title="How do I set roles & permissions?" />
      </div>
    </div>
  );
}
