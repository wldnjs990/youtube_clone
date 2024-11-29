export default function YtHeaderLeft() {
  return (
    <article className="flex items-center">
      <article
        role="button"
        className="w-6 h-6 box-content p-[8px] rounded-full hover:bg-[#e3e3e3]"
      >
        <img
          src="/public/YtSlideToggle.svg"
          alt="유튜브 사이드바 토클 아이콘"
          className="h-full"
        />
      </article>
      <a href="#" className="py-[18px] pl-[16px] pr-[14px]">
        <img
          src="/public/YtLogo.svg"
          alt="유튜브 로고 아이콘"
          className="max-w-none"
        />
      </a>
    </article>
  );
}
