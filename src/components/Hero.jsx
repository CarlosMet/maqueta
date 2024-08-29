import React from 'react'

export default function Hero() {
  return (
    <div className='bg-[#102b3e] text-white flex flex-col items-center [&>*]:max-w-[75%] text-center pt-20 pb-32 relative'>
      <h1>
        INNOVARQ
      </h1>
      <p className='mt-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, eum dicta vitae animi repellat eveniet alias possimus consectetur libero earum quibusdam porro eos totam laudantium placeat doloribus fugiat sit soluta quos voluptatibus pariatur perspiciatis. Ut maxime vero eaque repellat nam dignissimos, quasi dolorum qui ducimus debitis, voluptatum pariatur quibusdam consequuntur aperiam repellendus. Magnam, quam numquam dolor veniam vitae omnis cumque?</p>
      <button className='bg-[#6663e1] px-8 py-1 rounded-xl mt-8'>
        <a href='#'>Proyectos</a>
      </button>

        <div className="absolute [&>img]:w-[250px] [&>img]:rounded-2xl flex gap-6 bottom-0 translate-y-1/2">
            <img src="https://snoopy.archdaily.com/images/archdaily/media/images/668e/5f6a/1f85/4a01/7cb7/c46e/medium_jpg/_3.jpg?1720606581&format=webp&width=320&height=220&crop=true" alt="" />
            <img src="https://snoopy.archdaily.com/images/archdaily/media/images/5a08/f830/b22e/3824/ce00/02cb/medium_jpg/TIFF-REMAI-15.jpg?1510537197&format=webp&width=320&height=220&crop=true" alt="" />
            <img src="https://snoopy.archdaily.com/images/archdaily/catalog/uploads/photo/image/189181/cropped_large_AMB_GREY_HD.jpg?v=1718416939&format=webp&width=320&height=220&crop=true" alt="" />
        </div>

    </div>
  )
}
