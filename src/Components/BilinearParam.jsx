const BilinearParam=()=>{
    return(
        <>
        <div className="flex text-[12px] items-start justify-between p-5 gap-1 w-full flex-col">
      <h1 className=" w-fulll  text-[12px] font-semibold ">Bilinear Parameters</h1>
      <div className="w-full flex items-start justify-between">
        <h1>Num:</h1>
        <div className="flex items-start  flex-col">
          <label htmlFor="a0">b1</label>
          <input type="text" className="w-[50px] border  border-gray-900 rounded-[4px]" />
        </div>
        <div className="flex items-start  flex-col">
          <label htmlFor="a0">b0</label>
          <input type="text" className="w-[50px] border  border-gray-900 rounded-[4px]" />
        </div>
      </div>
      <div className="w-full flex items-start justify-between">
        <h1>Den:</h1>
        <div className="flex items-start  flex-col">
          <label htmlFor="a0">a1</label>
          <input type="text" className="w-[50px] border  border-gray-900 rounded-[4px]" />
        </div>
        <div className="flex items-start  flex-col">
          <label htmlFor="a0">a0</label>
          <input type="text" className="w-[50px] border  border-gray-900 rounded-[4px]" />
        </div>
      </div>
    </div>
    <button className="bg-gray-900 text-[10px] cursor-pointer text-white px-5 py-1 w-[30%] rounded-md ">Plot</button>
    </>
    )
}

export default BilinearParam;