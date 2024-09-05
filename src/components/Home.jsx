import AboutCard from "./About";
import Gallery from "./GalleryWidget";

export default function Home() {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 justify-between">
      {/* Only visible on tablet (md) and above */}
      <div className="hidden lg:block font-semibold lg:w-1/2 bg-[#616161D1]  rounded-[27px]"></div>

      <div className="lg:w-1/2 w-full flex flex-col gap-10">
        <AboutCard />

        <div className="px-4 sm:px-10 lg:px-14">
          <div className="bg-custom-gradient rounded-sm w-full px-6 h-[4px] shadow-custom"></div>
        </div>

        <Gallery />

        <div className="px-4 sm:px-10 lg:px-14">
          <div className="bg-custom-gradient rounded-sm w-full px-6 h-[4px] shadow-custom"></div>
        </div>
      </div>
    </div>
  );
}
