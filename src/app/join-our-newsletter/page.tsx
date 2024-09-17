import { Button } from "./components";
import { InputEmail } from "./components/inputEmail";

export default function JoinOurNewsletter() {
  return (
    <section className="bg-jo-cream min-h-screen text-jo-black">
      <div className="flex justify-center">
        <img
          src="/join-our-newsletter/logo-newsletter.svg"
          alt="newsletter logo"
          className="mt-20"
        />
      </div>
      <h1 className="text-cs-48 font-bold text-center mt-4">
        Join our newsletter
      </h1>
      <h2 className="text-cs-20 text-jo-gray max-w-[700px] text-center mx-auto mt-4">
        Keep up with our latest collections, exclusive deals, and special
        offers! We introduce a new collection every week, so stay tuned to snag
        the hottest items just for you.
      </h2>
      <div className="flex flex-col w-full max-w-[552px] mx-auto gap-6 p-6 mt-[60px] bg-jo-white rounded-xl shadow-xl">
        <InputEmail placeholder="Enter your email address" />
        <Button>Subscribe now</Button>
        <p className="text-jo-gray text-cs-14 font-medium text-center">
          Your email is 100% confidential and won’t send you any spam.
        </p>
      </div>
    </section>
  );
}
