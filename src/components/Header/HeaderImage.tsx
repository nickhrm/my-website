import Image from 'next/image'


export default function HeaderImage() {
    return <div className='flex justify-center md:order-last items-center'>
        <div>

            {/* <p className='absolute font-light text-2xl  text-black opacity-10 left-5 top-44'>a0100010010111001001</p> */}
            {/* <p className='absolute font-light text-2xl  text-black opacity-10  top-56'>b0100010010111001001</p> */}
            {/* <p className='absolute font-light text-2xl  text-black opacity-10  top-72'>c0100010010111001001</p> */}
            {/* <p className='absolute font-light text-2xl  text-black opacity-10  top-80'>d0100010010111001001</p> */}
            <Image className=' z-10 object-cover rounded-full'
                alt='Profilbild von Nick Hermann'

                width={200}
                height={200}
                src="/foto.jpg">

            </Image>
        </div>




    </div>

}