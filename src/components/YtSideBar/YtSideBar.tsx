import YtSlideBarLink from "./YtSlideBarLink";

export default function YtSideBar() {
  return (
    <aside className="w-[72px] h-screen fixed top-[56px] pt-[4px] px-1 bg-white">
      <YtSlideBarLink
        imgLink="/public/YtHome.svg"
        imgAlt="유튜브 홈 아이콘"
        LinkTitle="홈"
      />
      <YtSlideBarLink
        imgLink="/public/YtShorts.svg"
        imgAlt="유튜브쇼츠 아이콘"
        LinkTitle="Shorts"
      />
      <YtSlideBarLink
        imgLink="/public/YtSubscribe.svg"
        imgAlt="구독 아이콘"
        LinkTitle="구독"
      />
      <YtSlideBarLink
        imgLink="/public/YtMyPage.svg"
        imgAlt="내 페이지 아이콘"
        LinkTitle="내 페이지"
      />
    </aside>
  );
}
