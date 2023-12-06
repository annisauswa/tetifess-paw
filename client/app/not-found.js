import Link from 'next/link'

export default function Custom404() {
    return (
      <div className='h-screen custom-background bg-white justify-center items-center flex flex-col text-black font-roboto'>
        <h1 className='font-roboto text-[200px] font-bold  leading-none'>404</h1>
        <p className='text-center text-[20px]'>Oops! The page you are going to doesn’t exist.<br/><Link href='/' className="text-main">Go back to home page</Link></p>
      </div>
      )
  }