
type MainNewsItem ={
    title:string;
    subtitle:string;
    image: {
        mobile:string;
        desktop:string;
    }
}

const MainArticle =({mainNews}:{mainNews:MainNewsItem}) =>{

return(
    <div className="grid grid-cols-4 md:grid-cols-8 gap-5 p-3">
        <div className="hidden md:block md:col-span-8 order-0 md:order-1">
        <img src={mainNews.image.desktop}/>  
        </div>
        <div className="block col-span-4 w-full  md:order-0 md:hidden">
        <img src={mainNews.image.mobile} />
        </div>
        <div className="col-span-4  pr-10  lg:pr-16 text-4xl md:text-5xl lg:text-6xl md:order-2 lg:order-3 font-extrabold">{mainNews.title}</div>
        <div className="col-span-4 flex flex-col text-md lg:text-lg md:order-3 lg:order-4 pr-4 text-gray-500 justify-between">
          <p className="py-3">{mainNews.subtitle}</p>
          <div className="tracking-widest md:text-sm text-white font-semibold justify-stretch transition-colors ease-in-out duration-300 px-6 py-3 cursor-pointer hover:bg-black uppercase w-fit bg-red-400">Read More</div>
        </div>
    </div>
);

}

export default MainArticle;