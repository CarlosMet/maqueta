import React from 'react'

export default function Equipo() {
  return (
    <div className='bg-[#ced8e1] pt-16 px-6 md:px-8 lg:px-16 2xl:px-32'>
      
        <h2 className='text-center text-3xl font-semibold'>
            Nuestro equipo
        </h2>

        <div className="mt-16 flex justify-center gap-10">
            <div className='flex flex-col items-center'>
                <img src="https://premioggm.org/wp-content/uploads/2019/10/COL_Adriana-Giraldo-2.jpg" className='w-[120px] h-[120px] rounded-full' alt="" />
                <p className='mt-4 font-semibold text-lg'>Liliana García</p>
                <p>Directora general de proyectos</p>
            </div>

            <div className='flex flex-col items-center'>
                <img src="https://emprendepyme.net/wp-content/uploads/2023/03/tareas-director-general.jpg" className='w-[120px] h-[120px] rounded-full' alt="" />
                <p className='mt-4 font-semibold text-lg'>Adolfo Cardona</p>
                <p>Direcotor de arquitectura</p>
            </div>

            <div className='flex flex-col items-center'>
                <img src="https://www.mckinsey.com/~/media/mckinsey/business%20functions/strategy%20and%20corporate%20finance/how%20we%20help%20clients/ceo%20excellence/carousel_mobile_black-man_909472564_768x600-v3.jpg" className='w-[120px] h-[120px] rounded-full' alt="" />
                <p className='mt-4 font-semibold text-lg'>Jacmer Rentería</p>
                <p>Presidente</p>
            </div>
        </div>

    </div>
  )
}
