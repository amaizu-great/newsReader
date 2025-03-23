import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import formatDate from "../functions/formatDate";

const ArticleLoadingState = () => {
  return (
    <main className="flex h-full relative gap-10 min-h-screen px-[5%] flex-col py-10 md:py-20 bg-gray-50 leading-none">

    <div className="flex gap-2 w-full flex-wrap sm:flex-nowrap">
      <div className="min-h-14 min-w-14 rounded-full skeleton md:min-h-16 md:min-w-16 lg:min-h-20 lg:min-w-20"></div>

      <div className="flex flex-col justify-center gap-2">
        <h2 className="w-full h-4 skeleton min-w-50 rounded sm:min-w-70"></h2>
        <p className="w-full h-2 skeleton min-w-30 rounded sm:min-w-50"></p>
      </div>
    </div>

    <div className="flex flex-col gap-2">
      <h2 className="w-full h-4 skeleton min-w-50 rounded sm:max-w-[80%]"></h2>
      <p className="w-full h-2 skeleton min-w-30 rounded sm:max-w-[60%]"></p>
    </div>

    <div className="w-full max-w-[700px] h-[400px] skeleton"> </div>

    <div className="flex flex-col gap-5 text-[14px] leading-normal">
      <div className="flex gap-1 flex-col">
        <p className="w-full h-2 skeleton min-w-30 rounded sm:min-w-50"></p>
        <p className="w-full h-2 skeleton min-w-30 rounded sm:min-w-50"></p>
        <p className="w-full h-2 skeleton min-w-30 rounded sm:min-w-50"></p>
        <p className="w-full h-2 skeleton min-w-30 rounded sm:min-w-50"></p>
        <p className="w-full h-2 skeleton min-w-30 rounded sm:min-w-50"></p>
        <p className="w-full h-2 skeleton min-w-30 rounded sm:min-w-50"></p>
      </div>

      <button className="p-6 px-20 skeleton w-fit rounded-full"></button>
    </div>
    </main>
  );
};

//prettier-ignore
const ArticlesDetails = () => {
  const params = Number ( useParams().newsId );
  const { data, isLoading } = useFetch( "https://newsapi.org/v2/everything?q=apple&from=2025-03-19&to=2025-03-19&sortBy=popularity&pageSize=10&apiKey=6eea67bca3884f1ab90372ac184ac945" );


  if( isLoading ) return <ArticleLoadingState />

  const article = data.find((item) => item.id === params); 
  const newDate = formatDate(article.publishedAt) 
  const Article = ({text}) => {
    return (
      <p dangerouslySetInnerHTML={{ __html: text }}/>
    );
  }

  return (
    <main className="flex h-full relative gap-10 min-h-screen px-[5%] flex-col py-10 md:py-20 bg-gray-100 leading-none">

      <div className="flex gap-2 w-full flex-wrap sm:flex-nowrap">
        <div className="profile min-h-14 min-w-14 rounded-full md:min-h-16 md:min-w-16 lg:min-h-20 lg:min-w-20"></div>

        <div className="flex flex-col justify-center gap-2">
          <h2 className="text-[16px] font-normal author md:text-[20px]">{article.author}</h2>
          <p className="text-[12px] ">Published: {newDate}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-[20px] md:text-[25px] lg:text-[30px]">{article.title}</h1>
        <p className="text-[12px] md:text-[14px] leading-normal"> {article.description}</p>
      </div>

      <div className="w-full max-w-[700px] ">
        <img src={article.urlToImage} alt={article.title} className="rounded object-contain"/>
      </div>

      <div className="flex flex-col gap-5 text-[14px] leading-normal">
        <Article text={article.content}/>
        <a href={article.url} className="bg-gray-300 w-fit py-2 px-5 rounded-full text-[12px] font-medium text-white"><p>Visit Mian Blog</p></a>
      </div>
    </main>
  );
};

export default ArticlesDetails;
