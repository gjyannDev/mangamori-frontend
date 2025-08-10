import { Separator } from "../ui/separator";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-6 bg-base-black container-custom text-base-white py-14 mt-10">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="font-playfair font-bold text-3xl">
            Manga<span className="text-primary">Mori</span>
          </h1>
          <p className="font-inter max-w-xs">
            Track your journey through stories, one chapter at a time.
          </p>
        </div>
        <div className="flex gap-[7.75rem]">
          <div className="">
            <h1 className="font-playfair font-bold text-xl">EXPLORE</h1>
            <div className="">
              <p>Discover</p>
              <p>Popular Titles</p>
              <p>Recently Added</p>
            </div>
          </div>
          <div className="">
            <h1 className="font-playfair font-bold text-xl">RESOURCES</h1>
            <div className="">
              <p>About MangaMori</p>
              <p>Report a Bug</p>
            </div>
          </div>
          <div className="">
            <h1 className="font-playfair font-bold text-xl">COMMUNITY</h1>
            <div className="">
              <p>What's New</p>
              <p>Feedback</p>
              <p>Terms & Policy</p>
            </div>
          </div>
        </div>
      </div>
      <Separator className="bg-[#f0f0f0]" />
      <div>
        <p className="font-inter">© 2025 MangaMori. Made with ❤️ for manga & manhwa lovers.</p>
      </div>
    </footer>
  );
}
