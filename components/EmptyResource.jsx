import React from 'react'

const EmptyResource = () => {
  return (
    <main className="flex items-center justify-center flex-grow bg-black">
    <div className="flex flex-col items-center justify-center gap-4">
      <img 
        src="/images/Nomail.png" 
        alt="No Mail" 
        className="max-w-full max-h-[60vh] object-contain" 
      />
      <h1 className="font-dm-sans font-bold flex mt-4 text-white text-2xl mb-4">It’s the beginning of a legendary sales pipeline </h1>
      <p className="font-dm-sans font-light text-[#9E9E9E]">When you have inbound E-mails</p>
      <p className="font-light font-dm-sans text-[#9E9E9E]">you’ll see them here</p>
    </div>
  </main>
  )
}

export default EmptyResource