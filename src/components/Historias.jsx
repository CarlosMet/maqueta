import React from 'react'

export default function Historias() {
  return (
    <div className='bg-[#ced8e1] text-center pt-16 px-6 md:px-8 lg:px-16 2xl:px-32'>
      <h2 className='text-3xl font-semibold'>
        Conoce nuestras historias <span className='text-[#6663e1] font-bold'>INNO</span> vadoras
      </h2>

      <div className="mt-16 flex justify-between 2xl:justify-center gap-4">
        <div className='bg-white px-12 py-16 rounded-3xl gap-6 flex-[0.6] 2xl:flex-[0.4]'>
            <div className='flex gap-8'>
                <div>
                    <img className='w-20 h-20 rounded-full' src="https://www.kienyke.com/sites/default/files/styles/interna_contenido_s/public/2022-04/profeta.jpg?itok=yOwBuVg1" alt="family" />
                </div>
                <div>
                    <p className='text-left'>“Duville reúne los atractivos que eran claves para nosotros, zonas verdes para nuestra hija, exclusividad y confort. Hicimos la mejor elección.”</p>
                    <p className='text-left mt-10'>- Adriana Plata – Duville. Barranquilla, Atlántico.</p>
                </div>
            </div>
        </div>
        <div className='bg-[#102b3e] text-white flex-[0.25] rounded-3xl text-xl font-semibold p-10 text-left'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur autem nulla omnis necessitatibus velit quam! Quidem!
        </div>
      </div>

      <div className="mt-16 flex flex-row-reverse justify-between 2xl:justify-center gap-4">
        <div className='bg-white p-12 rounded-3xl gap-6 flex-[0.6] 2xl:flex-[0.4]'>
            <div className='flex gap-8'>
                <div>
                    <img className='w-20 h-20 rounded-full' src="https://roymorgan-cms-dev.s3.ap-southeast-2.amazonaws.com/wp-content/uploads/2022/08/07050747/Conventional-Family-life.jpg" alt="family" />
                </div>
                <div>
                    <p className='text-left'>"En Village vamos a hacer realidad nuestro sueño de familia. <br /> ¡Estamos muy felices!"</p>
                    <p className='text-left mt-10'>- Familia Quiroz Ramírez – Village. Envigado, Antioquia.</p> <br />
                </div>
            </div>
        </div>
        <div className='bg-[#102b3e] text-white flex-[0.25] rounded-3xl text-xl font-semibold p-10 text-left'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur autem nulla omnis necessitatibus velit quam! Quidem!
        </div>
      </div>

    </div>
  )
}
