import YtCategory from "./YtCategory/YtCategory";
import YtVideos from "./YtVideos/YtVideos";

export default function YtContents() {
  return (
    <section className="w-[calc(100% - 64px)] mt-[56px] ml-[72px]">
      <YtCategory />
      <YtVideos />
    </section>
  );
}
