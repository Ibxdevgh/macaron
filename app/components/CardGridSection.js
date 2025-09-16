import Link from "next/link";
import PlaybookCard from "./PlaybookCard";

function CardGridSection({ id, title, moreHref, items }) {
  return (
    <div id={id} className="space-y-6">
      {/* Section header */}
      <div className="flex items-center justify-between">
        <h2 className="text-[24px] leading-snug font-sans text-[#ABAAA6]">
          {title}
        </h2>
        <Link
          href={moreHref}
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          <span className="text-[16px]">more</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right ml-1 h-4 w-4"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((item, index) => (
          <PlaybookCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default CardGridSection;
