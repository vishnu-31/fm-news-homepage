

type BottomRowItem = {
    image:string;
    num:string;
    title:string;
    subtitle:string;
}

const BottomRow = ({bottomRow}:{bottomRow:BottomRowItem[]}) =>{
    return(
    <div className="order-5 grid grid-cols-4 lg:grid-cols-12 gap-5">
        {bottomRow.map((item,idx) =>(
          <div key={idx} className="col-span-4 flex">
            <div className="col-span-1">
              <img className="min-w-[3em] max-w-[8em] m-0" src={item.image} alt="Thumbnail" />
            </div>
            <div className=" col-span-2 flex flex-col items-start justify-between mx-3">
              <div className="text-3xl md:text-2xl lg:text-3xl text-gray-300 font-bold">
                {item.num}
              </div>
              <div className="text-xl md:text-lg lg:text-xl cursor-pointer hover:text-red-400 transition-colors duration-300 ease-linear font-bold ">
                {item.title}
              </div>
              <div className="text-md lg:text-lg text-gray-500">
                {item.subtitle}
              </div>
            </div>

          </div>
          ))}
    </div>
    );
}

export default BottomRow;