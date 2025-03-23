
const LoadingState = () => {
  return (
      <div className="flex flex-col gap-4 border bg-gray-50 shadow-sm border-gray-300 rounded p-3 w-full text-[12px] transition-all duration-300 md:p-5 max-w-[450px]">
        <div className="flex gap-2 w-full flex-wrap sm:flex-nowrap">
          <div className="min-h-14 min-w-14 min-size-14 rounded-full skeleton "></div>
  
          <div className="flex flex-col justify-around gap-2">
            <h2 className="w-full h-3 skeleton min-w-50 rounded sm:min-w-70"></h2>
            <p className="w-full h-3 skeleton max-w-30 rounded sm:min-w-50"></p>
          </div>
        </div>
  
        <div className="flex flex-col gap-2">
          <h2 className="w-full h-3 skeleton min-w-50 rounded sm:min-w-70"></h2> 
          <p className="w-full h-3 skeleton max-w-20 rounded"></p>
        </div>
  
          <div className="w-full min-h-40 h-full rounded skeleton"></div>
      </div>
  )
}

export default LoadingState