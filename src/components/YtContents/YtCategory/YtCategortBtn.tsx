export default function YtCategortBtn({ btntext }: { btntext: string }) {
  return (
    <article>
      <a
        href="#"
        className="bg-[#f2f2f2] hover:bg-[#e3e3e3] px-[12px] flex items-center h-[32px] rounded-lg"
      >
        <span className="text-[14px]">{btntext}</span>
      </a>
    </article>
  );
}
