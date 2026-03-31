import BannerImage from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="relative min-h-162.5 flex items-center overflow-hidden">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium px-5 py-2 rounded-full">
          <img src="public/Rectangle 3.png" alt="" />
             New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-black-600">
            Supercharge Your
            <br />
            <span className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-black-600">
            Digital Workflow
            </span>
          </h1>

          <p className="text-lg text-zinc-700 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.Explore Products
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-blue-600 px-4 py-4 rounded-full font-semibold text-lg shadow-xl shadow-red-500/30 flex items-center gap-3 group text-white">
              Explore Products
            </button>
          </div>
            <button className="bg-blue-600 px-2 py-4 rounded-full font-semibold text-lg shadow-xl shadow-red-500/30 flex items-center gap-3 group text-white">
              Watch Demo
            </button>
          </div>
          </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;