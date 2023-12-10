

type BottomRowItem = {
    image:string;
    num:string;
    title:string;
    subtitle:string;
}

const BottomRow = ({bottomRow}:{bottomRow:BottomRowItem[]}) =>{
    return(
    <div className="order-5 grid grid-cols-4 lg:grid-cols-12 gap-3">
        {bottomRow.map((item,idx) =>(
          <div key={idx} className="col-span-4 grid grid-cols-3 gap-3">
            <div className="col-span-1">
              <img className="min-w-[5em]" src={item.image} alt="Thumbnail" />
            </div>
            <div className=" col-span-2 flex flex-col justify-between pl-2">
              <div className="text-2xl md:text-4xl text-gray-400 font-bold">
                {item.num}
              </div>
              <div className="text-2xl md:text-2xl font-bold ">
                {item.title}
              </div>
              <div className="md:text-xl text-gray-500">
                {item.subtitle}
              </div>
            </div>

          </div>
          ))}
    </div>
    );
}

export default BottomRow;