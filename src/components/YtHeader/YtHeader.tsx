import YtHeaderCenter from "./YtHeaderCenter";
import YtHeaderLeft from "./YtHeaderLeft";
import YtHeaderRight from "./YtHeaderRight";

export default function YtHeader() {
  return (
    <>
      <header className="z-[99] flex top-0 items-center justify-between px-[16px] w-full fixed  bg-white">
        {/* 왼쪽 */}
        <YtHeaderLeft />
        {/* 센터 */}
        <YtHeaderCenter />
        {/* 오른쪽 */}
        <YtHeaderRight />
      </header>
    </>
  );
}
