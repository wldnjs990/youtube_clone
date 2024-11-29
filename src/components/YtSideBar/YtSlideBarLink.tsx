export default function YtSlideBarLink({
  imgLink,
  imgAlt,
  LinkTitle,
}: {
  imgLink: string;
  imgAlt: string;
  LinkTitle: string;
}) {
  return (
    <article>
      <a
        href="#"
        className="w-full block pt-4 pb-[14px] rounded-lg hover:bg-[#f2f2f2]"
      >
        <figure className="flex flex-col items-center">
          <img src={imgLink} alt={imgAlt} className="mb-[4px]" />
          <figcaption className="text-[10px] mb-[1px]">{LinkTitle}</figcaption>
        </figure>
      </a>
    </article>
  );
}
