import React from 'react'

const About = () => {
  return (
    <div className='w-screen  '>
<div className='flex flex-col gap-0.5 '>

  <button className=' shadow-md shadow-black mt-7 left-0 text-xl w-fit pr-4 text-white font-bold bg-purple px-3 py-2 rounded-tr-full'>About Eazy Wed</button>
<p className='text-purple ml-10 text-justify p-1 font-semibold mr-10'>EazyWed is an innovative online platform design and  developed by Rohan Nepal to simplify the wedding planning process. It provides couples with easy access to a wide range of wedding services such as catering, photography, music, decor, makeup artist and many more available near your location.</p>
<p className='text-purple ml-10 text-justify p-1 font-semibold mr-10'>At EazyWed, we're passionate about transforming your wedding vision into an unforgettable reality. Our intuitive platform streamlines the process, connecting you with top-tier vendors effortlessly. With us, rest assured that every detail is expertly handled, leaving you free to savor every moment of your special day.</p>
</div>

<div className='flex flex-col gap-0.5 '>
<utton className=' shadow-md shadow-black mt-3 left-0 text-xl w-fit pr-4 text-white font-bold bg-purple px-3 py-2 rounded-tr-full'>Why Eazy Wed?</utton>
<ul className='text-purple flex flex-col  '>
  <li className='font-semibold  text-lg ml-2'>Elegance:</li>
  <p className='ml-12 border-b-2 mr-10'> Eazy Wed offers a refined and stylish solution, ensuring your wedding planning experience
                      is sophisticated and tasteful.</p>
  <li className='font-semibold  text-lg ml-2'>Affordability:</li>
  <p className='ml-12 border-b-2 mr-10'>Our platform provides cost-effective options, making it accessible for couples with various 
                             budget constraints to plan their dream wedding without financial stress.</p>
  <li className='font-semibold  text-lg ml-2'>Harmony:</li>
  <p className='ml-12 border-b-2 mr-10'>We facilitate harmonious coordination between you and your chosen service providers,
                      ensuring seamless communication and collaboration to create your ideal wedding day.</p>
  <li className='font-semibold  text-lg ml-2'>Bliss:</li>
  <p className='ml-12 border-b-2 mr-10'> Ultimately, Eazy Wed aims to bring you pure happiness and joy throughout your wedding planning 
             journey, culminating in a beautiful and unforgettable celebration of love.</p>
  <li className='font-semibold  text-lg ml-2'>Seamlessness:</li>
<p className='ml-12 border-b-2 mr-10'>We ensures every aspect of your wedding planning journey flows effortlessly
                                 for a stress-free experience.</p>
</ul>

</div>

    </div>
  )
}

export default About