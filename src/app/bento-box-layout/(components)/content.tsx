export function Content() {
  return (
    <main className="bg-bbl-light p-6 max-w-[1200px] rounded-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* first card */}
        <article className="flex flex-wrap p-8 shadow-lg rounded-xl bg-bbl-white">
          <div className="flex flex-col justify-center">
            <h3 className="text-bbl-black text-cs-20 font-semibold ">
              Create high-quality, original content at scale
            </h3>
            <p className="text-bbl-gray mt-3">
              Scale original content production efficiently.
            </p>
          </div>
          <div className="mt-6">
            <img
              className="w-full max-w-96"
              src="/bento-box-layout/image_1.png"
              alt="content image"
            />
          </div>
        </article>
        {/* second card */}
        <article className="flex flex-wrap p-8 shadow-lg rounded-xl bg-bbl-white">
          <div className="mb-6">
            <img
              className="w-full max-w-96"
              src="/bento-box-layout/image_2.png"
              alt="content image"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-bbl-black text-cs-20 font-semibold ">
              Repurpose existing content across multiple channels and formats
              (audio, video)
            </h3>
            <p className="text-bbl-gray mt-3">
              Recycle content for divers platforms and create new content.
            </p>
          </div>
        </article>
        {/* third card */}
        <article className="flex flex-wrap p-8 shadow-lg rounded-xl bg-bbl-white col-span-1 md:col-span-2 xl:col-span-1 justify-between">
          <div className="flex flex-col justify-center">
            <h3 className="text-bbl-black text-cs-20 font-semibold ">
              Optimize content for search engines and target audiences
            </h3>
            <p className="text-bbl-gray mt-3">
              Tailer content for SEO and audience engagement.
            </p>
          </div>
          <div className="mt-6">
            <img
              className="w-full max-w-96"
              src="/bento-box-layout/image_3.png"
              alt="content image"
            />
          </div>
        </article>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <article className="grid  md:grid-cols-2 p-8 shadow-lg rounded-xl bg-bbl-white col-span-1 md:col-span-2 xl:col-span-1 justify-between">
          <div className="flex flex-col justify-center">
            <h3 className="text-bbl-black text-cs-20 font-semibold ">
              Automate repetitive marketing tasks and workflows
            </h3>
            <p className="text-bbl-gray mt-3">
              Streamline marketing tasks with automations.
            </p>
          </div>
          <div className="">
            <img
              className="w-full max-w-96"
              src="/bento-box-layout/image_4.png"
              alt="content image"
            />
          </div>
        </article>
        <article className="grid md:grid-cols-2 p-8 shadow-lg rounded-xl bg-bbl-white col-span-1 md:col-span-2 xl:col-span-1 justify-between">
          <div className="flex flex-col justify-center">
            <h3 className="text-bbl-black text-cs-20 font-semibold ">
              Integrate with your favorite marketing tools and platform
            </h3>
            <p className="text-bbl-gray mt-3">
              Seamlessly integrate with preferred marketing tools.
            </p>
          </div>
          <div className="">
            <img
              className="w-full max-w-96"
              src="/bento-box-layout/image_5.png"
              alt="content image"
            />
          </div>
        </article>
      </div>
    </main>
  );
}
