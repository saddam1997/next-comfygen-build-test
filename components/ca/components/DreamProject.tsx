export default function DreamProject() {
  return (
    <section className="py-10">
      <div className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6">
        <div
          className="bg-center bg-no-repeat bg-cover rounded-md bg-gradient-to-t from-blue-500 to-purple-600"
        >
          <div className="px-3 py-2 lg:px-14 lg:py-16 relative">
            <div className="flex items-center justify-center p-4">
              <div className="flex flex-col space-y-10 text-center">
                <div className="space-y-4 ">
                  <h3 className="text-2xl font-bold text-white 2xl:text-4xl xl:text-3xl">
                    Have a Project in Your Mind ?
                  </h3>
                  <p className="text-base text-white">
                    Get in touch with us and discuss your needs and requirements
                    with our experts.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <a href="https://api.whatsapp.com/send?phone=919587867258">
                    <button className="relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-white rounded-full cursor-pointer text-slate-900 w-fit group">
                      <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-black rounded-full group-hover:w-60 group-hover:h-60 opacity-10"></span>
                      Let’s Discuss
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
