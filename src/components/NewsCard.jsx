
import { Book1 } from "iconsax-react";
import formatDate from "../functions/formatDate"

//prettier-ignore
const NewsCard = ({ id, title, author, urlToImage, description, publishedAt }) => { 

  const newDate = formatDate(publishedAt)
  const bgStyle = {
    backgroundImage: `url(${urlToImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat"
  }

  return (
    <a href={`news/${id}`} className="flex flex-col gap-4 border bg-gray-100 shadow-sm border-gray-300 rounded p-3 w-fit text-[12px] transition-all duration-300 md:p-5 max-w-[450px]">
      <div className="flex gap-2 w-full flex-wrap sm:flex-nowrap">
        <div className="profile min-h-14 min-w-14 rounded-full"></div>

        <div className="flex flex-col justify-around">
          <h2 className="text-[14px] font-normal author md:text-[16px]">{author}</h2>
          <p>Published: {newDate}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="font-medium text-[18px] ">{title}</h2>

        <div className="flex gap-2 items-center">
          <Book1 size="20" color="#6a7282 "/>
          <p>10 mins read</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 h-full">
        <p className="description">{description}</p>
        <div style={bgStyle} className="w-full min-h-40 h-full rounded"></div>
      </div>
    </a>
  );
};

export default NewsCard;
