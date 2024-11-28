import YtHeaderCenter from "./YtHeaderCenter";
import YtHeaderLeft from "./YtHeaderLeft";
import YtHeaderRight from "./YtHeaderRight";

export default function YtHeader() {
  return (
    <>
      <header className="flex items-center justify-between px-[16px]">
        <YtHeaderLeft />
        {/* 센터 */}
        <YtHeaderCenter />
        {/* 오른쪽 */}
        <YtHeaderRight />
      </header>
    </>
  );
}
