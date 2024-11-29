import YtCategortBtn from "./YtCategortBtn";

export default function YtCategory() {
  return (
    <section className="flex items-center gap-[12px] text-nowrap w-full h-[56px] px-[24px] fixed bg-white">
      <YtCategortBtn btntext="전체" />
      <YtCategortBtn btntext="음악" />
      <YtCategortBtn btntext="믹스" />
      <YtCategortBtn btntext="게임" />
      <YtCategortBtn btntext="라이브" />
      <YtCategortBtn btntext="요리" />
      <YtCategortBtn btntext="최근에 업로드된 동영상" />
      <YtCategortBtn btntext="감상한 동영상" />
      <YtCategortBtn btntext="새로운 맞춤 동영상" />
    </section>
  );
}
