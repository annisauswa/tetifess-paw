const LoadingPage = () => {
  return (
    <div className="h-full flex justify-center items-center gap-[10px]">
        <p className='text-black text-[20px] font-roboto'>Load Data</p>
        <div  className="animate-spin border-[8px] border-tertiery rounded-full h-[20px] w-[40px]"></div>
    </div>
  );
};

export default LoadingPage;
