import {
  Header,
  SpeechControl,
  SpeedControl,
  TextControl,
  VoiceControl,
} from "./(components)";
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
          <section className="px-8 py-5 flex flex-col">
            <Header />
            <TextControl />
            <p className="text-ts-gray-dark text-cs-12 mt-2 max-w-[500px]">
              Enter your text above and hit &quot;play.&quot; You can choose a
              different voice by selecting an option from the dropdown menu.
            </p>
            <p className="text-ts-white text-cs-12 mt-8">Settings</p>
            <VoiceControl />
            <SpeedControl />
            <SpeechControl />
          </section>
        </SpeechProvider>
      </div>
    </div>
  );
}
