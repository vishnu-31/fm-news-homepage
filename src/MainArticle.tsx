
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
        <div className="col-span-4  text-5xl md:text-7xl md:order-2 lg:order-3 font-bold">{mainNews.title}</div>
        <div className="col-span-4 flex flex-col text-lg md:text-xl md:order-3 lg:order-4 pr-4 text-gray-500 justify-between">
          <p className="py-3">{mainNews.subtitle}</p>
          <div className="tracking-widest md:text-md text-white font-semibold px-6 py-3 uppercase w-fit bg-red-400">Read More</div>
        </div>
    </div>
);

}

export default MainArticle;