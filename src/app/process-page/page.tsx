export default function ProcessPage() {
  return (
    <div className="bg-white min-h-screen">
      <div>
        <img
          src="/process-page/process-page-bg.png"
          alt="process page background"
        />
      </div>
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <h3 className="text-pp-purple text-cs-24">Our Process</h3>
        <h2 className="text-pp-dark text-cs-48 w-full max-w-[700px] font-bold">
          Easy And Perfect Solution For Your Business App
        </h2>
        <div className="flex flex-wrap gap-5 mt-20">
          <div className="max-w-64">
            <img src="/process-page/process-icon-1.svg" alt="" />
            <p className="text-pp-dark text-cs-18 mt-8 mb-5">47+ Components</p>
            <p className="text-pp-gray-200">
              Save time and build products with{" "}
              <span className="text-pp-purple">
                well-organized and customizable
              </span>
              desktop components for Figma.
            </p>
          </div>
          <div className="max-w-64">
            <img src="/process-page/process-icon-2.svg" alt="" />
            <p className="text-pp-dark text-cs-18 mt-8 mb-5">Documentation</p>
            <p className="text-pp-gray-200">
              Developer handoff made easy. Component and style guide
              documentation for your team in{" "}
              <span className="text-pp-purple">one place</span>.
            </p>
          </div>
          <div className="max-w-64">
            <img src="/process-page/process-icon-3.svg" alt="" />
            <p className="text-pp-dark text-cs-18 mt-8 mb-5">Design faster</p>
            <p className="text-pp-gray-200">
              Stop wasting time on creating everything from scratch for{" "}
              <span className="text-pp-purple">every new project</span> you
              start.
            </p>
          </div>
          <div className="max-w-64">
            <img src="/process-page/process-icon-4.svg" alt="" />
            <p className="text-pp-dark text-cs-18 mt-8 mb-5">Customize</p>
            <p className="text-pp-gray-200">
              Easily apply your branding by changing font, color and{" "}
              <span className="text-pp-purple">component properties</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
