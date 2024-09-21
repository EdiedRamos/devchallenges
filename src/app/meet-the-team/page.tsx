import { ImageC } from "./(components)";

export default function MeetTheTeamPage() {
  return (
    <section className="min-h-screen bg-mtt-white py-[72px]">
      <div className="bg-mtt-light min-h-[500px] max-w-[284px] md:max-w-[500px] lg:max-w-[1100px] mx-auto rounded-2xl bg-mtt-bg bg-no-repeat grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 grid-rows-2 overflow-hidden">
        <article className="md:col-span-2 p-8">
          <p className="text-mtt-blue">Our team</p>
          <h2 className="text-mtt-black text-cs-40 font-bold">
            Meet the brain
          </h2>
          <p className="text-mtt-dark">
            We are proud to have them as part of our community and look forward
            to continuing to push the boundaries of what&apos;s possible in the
            world of digital art.
          </p>
        </article>
        <ImageC
          className="bg-mtt-purple"
          src="/meet-the-team/person_1.png"
          alt="Liam Novak photo"
          title="Liam Novak"
          description="Software Engineer"
        />
        <ImageC
          className="bg-mtt-pink"
          src="/meet-the-team/person_2.png"
          alt="Sophia Moretti photo"
          title="Sophia Moretti"
          description="Business Development Manager"
        />
        <ImageC
          className="bg-mtt-pastel-blue"
          src="/meet-the-team/person_3.png"
          alt="Ethan Rossi photo"
          title="Ethan Rossi"
          description="Business Development Manager"
        />
        <ImageC
          className="bg-mtt-yellow"
          src="/meet-the-team/person_4.png"
          alt="Isabella Ricci photo"
          title="Isabella Ricci"
          description="UX Designer"
        />
        <ImageC
          className="bg-mtt-mint-green"
          src="/meet-the-team/person_5.png"
          alt="Noah Conti photo"
          title="Noah Conti"
          description="Content Creator"
        />
        <div className="text-mtt-black flex gap-1 bg-transparents items-end p-8 col-start-1 row-start-2">
          <p className="flex gap-1 items-center text-mtt-dark">
            See all members
            <img src="/meet-the-team/arrowupright.svg" alt="arrow up right" />
          </p>
        </div>
      </div>
    </section>
  );
}
