import BottomRow from "./BottomRow";
import MainArticle from "./MainArticle";
import SideArticle from "./SideList";
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
    <main className="p-2 mx-auto md:p-6  md:px-20 lg:px-48 max-w-[110em]  min-h-[100svh]">
    <TopBar/>
    <div className="grid grid-cols-1 mx-auto md:grid-cols-8 lg:grid-cols-12 gap-x-10 gap-y-6 pb-5 content-start">
      <div className="col-span-1 md:col-span-8"><MainArticle mainNews={mainNews}/></div>
      <div className="col-span-1 md:col-span-4"><SideArticle sideList={sideList}/></div> 
      <div className="col-span-1 md:col-span-4 lg:col-span-12"><BottomRow bottomRow={bottomRow}/></div>
    </div>
    </main>
  )
}

export default App
