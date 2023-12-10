import TopBar from "./TopBar"

const mainNews ={
    "title": "The Bright Future of Web 3.0?",
    "image":{
        "mobile":"/images/image-web-3-mobile.jpg",
        "desktop":"/images/image-web-3-desktop.jpg"
        },
    "subtitle": "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?"
};
const sideList = [
{
    "title": "Hydrogen VS Electric Cars",
    "subtitle": "Will hydrogen-fueled cars even catch up to EVs?"
},
{
    "title":"The Downsides of AI Artistry",
    "subtitle":"  What are the possible adverse effects of on-demand AI image generation?"
},
{
    "title": "Is VC Funding Drying Up?",
    "subtitle": "Private funding by VC firms is down 50% YOY. We take a look at what that means."
}];
const bottomRow = [
{
    "num":"01",
    "title":"Reviving Retro PCs",
    "image":"/images/image-retro-pcs.jpg",
    "subtitle":"What happens when old PCs are given modern upgrades?"
},
{
    "num":"02",
    "title":"Top 10 Laptops of 2022",
    "image":"/images/image-top-laptops.jpg",
    "subtitle":"Our best picks for various needs and budgets."
},
{
    "num":"03",
    "title":"The Growth of Gaming",
    "image":"/images/image-gaming-growth.jpg",
    "subtitle": "How the pandemic has sparked fresh opportunities."
}];

function App() {

  return (
    <main className="p-2 md:p-6 md:px-48 md:w-[1920px] min-h-screen">
    <TopBar/>
    <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-6 h-[80vh] pb-5 content-start">
      
    <div className="col-span-8 bg-red-500 text-center"><img src={mainNews.image.desktop}/></div>
    <div className="col-span-4 row-span-2 bg-black px-10 pt-8">
      <h2 className="text-5xl text-yellow-500 font-bold my-3">New</h2>
      {sideList.map((item,idx) =>(
        <div className="text-white mt-8 mb-2 pr-5">
          <h3 className="text-2xl font-bold my-3">{item.title} </h3>
          <p className="text-lg mb-2 pr-5">{item.subtitle}</p>
          {idx <sideList.length-1 && <hr className="mt-8 -pr-2"/>}
        </div>
      ))}
    </div>

    <div className="col-span-4 text-7xl font-bold">{mainNews.title}</div>
    <div className="col-span-4 flex flex-col text-xl pr-4 text-gray-500 justify-between">
      <p>{mainNews.subtitle}</p>
      <div className="tracking-widest text-md text-white font-semibold px-6 py-3 uppercase w-fit bg-red-400">Read More</div>
    </div>
    {bottomRow.map((item) =>(
      <div className="col-span-4  grid grid-cols-3 gap-3">
        <div className="col-span-1">
          <img src={item.image} alt="Thumbnail" />
        </div>
        <div className=" col-span-2 flex flex-col justify-between p-2">
          <div className="text-4xl text-gray-400 font-bold">
            {item.num}
          </div>
          <div className="text-2xl font-bold ">
            {item.title}
          </div>
          <div className="text-xl text-gray-500">
            {item.subtitle}
          </div>
        </div>

      </div>
    ))}
    </div>
    </main>
  )
}

export default App
