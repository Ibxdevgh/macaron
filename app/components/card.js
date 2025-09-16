import Link from "next/link";

function PlaybookCard({ href, title, description, image, ariaLabel }) {
  return (
    <Link href={href} className="block">
      <div className="group relative w-full flex flex-col rounded-3xl overflow-hidden cursor-pointer bg-[#F1EFE9] border border-[#E9E7E2] transition-all duration-300 ease-out hover:shadow-lg h-[364px]">
        <div className="w-full flex-1 relative overflow-hidden flex flex-col">
          {/* Title + description */}
          <div className="p-5 pb-2 flex flex-col z-30 flex-shrink-0">
            <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
              <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
                {title}
              </h3>
            </div>
            <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
              {description}
            </p>
          </div>

          {/* Image */}
          <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-3">
            <div
              role="img"
              aria-label={ariaLabel}
              className="top-0 absolute w-[60%] aspect-[9/19.5] rounded-[12px] bg-white shadow-xl z-20 transition-transform duration-300 ease-out group-hover:-translate-y-3 bg-origin-border bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PlaybookCard;
