export default function YtHeaderCenter() {
  return (
    <article className="flex-[0_1_732px] min-w-0">
      <form action="" className="flex items-center w-full pl-11 pr-1">
        <label htmlFor="search" className="flex w-full h-[40px] px-1">
          <div className="flex-1 flex items-center rounded-l-[50px] pl-4 pr-1 border border-[#cccccc] shadow-inner focus-within:border-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              className="pr-[10px] box-content"
            >
              <path
                clipRule="evenodd"
                d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z"
                fillRule="evenodd"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="검색"
              className="w-full h-[24px] focus:outline-none"
            />
            <a href="#" className="w-[19px] h-[11px] p-[6px] box-content block">
              <span className="w-full h-full block hover:bg-[url(../public/assets/keyBoardHover.gif)]">
                <img
                  src="https://www.gstatic.com/inputtools/images/tia.png"
                  alt="키보드 자판 생성버튼"
                  className="w-full h-full opacity-80"
                />
              </span>
            </a>
          </div>
          <button className="flex items-center justify-center rounded-r-[50px] border border-l-0 border-[#cccccc] w-[64px] px-[6px] py-[1px] bg-[#f2f2f2] hover:bg-[#e3e3e3]">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path
                clipRule="evenodd"
                d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </label>
        <label htmlFor="speak_to_search" className="relative">
          <button className="w-10 h-10 ml-3 rounded-full flex items-center justify-center bg-[#f2f2f2] hover:bg-[#e3e3e3]">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="M12 3c-1.66 0-3 1.37-3 3.07v5.86c0 1.7 1.34 3.07 3 3.07s3-1.37 3-3.07V6.07C15 4.37 13.66 3 12 3zm6.5 9h-1c0 3.03-2.47 5.5-5.5 5.5S6.5 15.03 6.5 12h-1c0 3.24 2.39 5.93 5.5 6.41V21h2v-2.59c3.11-.48 5.5-3.17 5.5-6.41z"></path>
            </svg>
          </button>
        </label>
      </form>
    </article>
  );
}
