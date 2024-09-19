import React from "react";
import Image from "next/image";
import Link from "next/link";

const StoryCard = ({ curPost }) => {
  const { title, author, body, source, date, url, image } = curPost;
  let trimmedBody = body.replace("<p>", "").replace("</p>", "");

  return (
    <div
      className="card border-b-[1px] border-[#DEE1E6] pb-5 sm:pb-8 mb-8 sm:mb-14 cursor-default"
      key={title}>
      <div className="flex mb-6 sm:gap-x-2 justify-between">
        <div className="flex gap-x-3 sm:gap-x-6">
          <Image
            className={`h-[72px] rounded-[8px] object-cover`}
            src="/images/image.jpg"
            alt="article-image"
            height={72}
            width={90}
          />
          <div>
            <p className="text-[#565D6D] leading-[20px] text-xs">{date}</p>
            <Link href={url}>
              <p className="font-bold text-[#171A1F] text-base leading-[26px] line-clamp-2 hover:underline">
                {title}
              </p>
            </Link>
          </div>
        </div>
        <p className="text-[#565D6D] leading-[20px] text-xs hidden sm:block">
          {source}
        </p>
      </div>

      <div>
        <p className="text-[#565D6D] leading-[20px] text-xs block sm:hidden">
          {source}
        </p>
      </div>
      <div className="text-sm leading-[22px] text-[#171A1F] mb-4 sm:mb-6 line-clamp-2">
        {trimmedBody}
      </div>
      <div className="leading-[20px] text-xs text-[#171A1F] font-bold">
        {author}
      </div>
      <div />
    </div>
  );
};

export default StoryCard;
