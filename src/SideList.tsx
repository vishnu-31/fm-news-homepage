
type SideListItemType = {
    title:string;
    subtitle:string;
}

const SideArticle =({sideList}: {sideList:SideListItemType[]}) =>{
    return(
        <div className="grid grid-cols-1  bg-black px-10 pt-8">
          <h2 className="md:text-5xl text-yellow-500 font-bold my-3">New</h2>
          {sideList.map((item,idx) =>(
          <div key={idx} className="text-white mt-8 mb-2 pr-5">
              <h3 className="md:text-2xl font-bold my-3">{item.title} </h3>
              <p className="md:text-lg mb-2 pr-5">{item.subtitle}</p>
              {idx <sideList.length-1 && <hr className="mt-8 -pr-2"/>}
            </div>
          ))}
        </div>
    );
}

export default SideArticle;