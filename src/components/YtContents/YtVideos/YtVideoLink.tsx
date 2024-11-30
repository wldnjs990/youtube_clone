export default function YtVideoLink({
  videoImg,
  videoTime,
  videoTitle,
  charImg,
  charName,
  view,
  uplodedBy,
}: {
  videoImg: string;
  videoTime: string;
  videoTitle: string;
  charImg: string;
  charName: string;
  view: string;
  uplodedBy: string;
}) {
  return (
    <article className="w-[calc(100%/3)] max-lg:w-[50%] max-[540px]:w-full px-[8px] pb-[40px]">
      <article>
        <a href="#" className="w-full">
          <figure className="relative w-full before:content-[''] before:w-full before:pt-[56.25%] before:block">
            <img
              src={videoImg}
              alt=""
              className="absolute top-0 left-0 w-full h-full rounded-xl"
            />
            <span className="absolute bottom-0 right-0 m-[8px] roboto text-[12px] text-white bg-[#000000b3] px-[4px] pt-[1px] rounded-md">
              {videoTime}
            </span>
          </figure>
          <article className="flex">
            <article role="button" className="mt-[12px] mr-[12px]">
              <img
                src={charImg}
                alt=""
                className="w-[36px] h-[36px] object-cover rounded-full"
              />
            </article>
            <article className="flex-1 w-[calc(100%-48px)]">
              <span className="block mt-[12px] mb-[4px] text-overflow">
                {videoTitle}
              </span>
              <article className="flex flex-col text-[#606060]">
                <span className="text-[14px] hover:text-black flex items-center gap-1">
                  {charName}
                  <img
                    src="/public/YtCreaterCheck.svg"
                    alt="유튜브 크리에이터 인증 아이콘"
                    className="w-[14px] h-[14px]"
                  />
                </span>
                <article className="flex">
                  <span className="text-[14px]">조회수 {view}회</span>
                  <span className="before:content-['•'] inline before:mx-[4px] text-[14px]">
                    {uplodedBy} 전
                  </span>
                </article>
              </article>
            </article>
          </article>
        </a>
      </article>
    </article>
  );
}
