import { Logo, SpeedControl } from "./(components)";
import { SpeechProvider } from "./(context)/SpeechProvider";

export default function BasicTextToSpeech() {
  return (
    <div className="bg-ts-blue-400 min-h-screen">
      <div className="lg:columns-2 bg-ts-blue-400 max-w-[1300px] mx-auto">
        <img
          src="/basic-text-to-speech/hero-image-text-to-speech.png"
          alt="robot image"
          className="hidden lg:inline-block"
        />
        <SpeechProvider>
          <section className="p-8 flex flex-col">
            <div className="flex justify-between items-center">
              <p className="text-ts-white text-cs-20 ">Speechbot</p>
              <Logo className="text-ts-white w-16" />
            </div>
            <textarea
              placeholder="Enter your text"
              className="h-52 bg-ts-blue-300 p-5 resize-none rounded-lg text-ts-white placeholder:text-ts-gray mt-10 outline-none focus:ring-2 focus:ring-ts-blue-200"
            />
            <p className="text-ts-gray-dark text-cs-12 mt-2">
              Enter your text above and hit &quot;play.&quot; You can choose a
              different voice by selecting an option from the dropdown menu.
            </p>
            <p className="text-ts-white text-cs-12 mt-8">Settings</p>
            <div className="flex flex-wrap gap-2 py-2 rounded-lg items-center bg-ts-blue-300 max-w-80 text-ts-white mt-2">
              <p className="text-ts-gray px-5">Voice</p>
              <select className="bg-inherit p-3 focus:bg-ts-blue-400 rounded-lg outline-none">
                <option className="bg-ts-blue-400">en-US</option>
                <option className="bg-ts-blue-400">es-CO</option>
              </select>
              <select className="bg-inherit p-3 focus:bg-ts-blue-400 rounded-lg outline-none">
                <option className="bg-ts-blue-400">Albert</option>
                <option className="bg-ts-blue-400">Magic</option>
              </select>
            </div>
            <SpeedControl />
            <button className="text-ts-white text-cs-16 bg-gradient-to-r from-ts-purple to-ts-blue-100 p-4 rounded-lg mt-[62px]">
              Text to Speech
            </button>
          </section>
        </SpeechProvider>
      </div>
    </div>
  );
}
