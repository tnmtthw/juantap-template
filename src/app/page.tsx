import React from 'react';
import { LuFacebook, LuMail, LuMapPin } from 'react-icons/lu';
import { TiLocation } from 'react-icons/ti';

const HomePage = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/back1.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className='container mx-auto'>
        <div className="flex justify-center items-center gap-12 w-full max-w-7xl">
          <div className='shadow-lg'>
            <img
              src="https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/profiles/01JKZ579CY5CBPJAD9HFYA74HX.jpg"
              alt="Profile"
              className="w-240 h-150 object-cover object-top rounded-bl-[120px] rounded-tr-[120px] rounded-2xl"
            />
          </div>
          <div>
            <div className='text-4xl uppercase font-bold'>Gabriel R. Mercado</div>
            <div className='text-xl'>Senior Property Specialist</div>
            <div className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, minus molestias praesentium provident culpa neque magni, assumenda rerum deleniti facilis quae quam quo beatae nobis autem, debitis itaque. Ut, harum?</div>
            <div className='space-y-4 py-8'>
              <div className='flex items-center gap-2'>
                <LuMapPin size={24} />
                <p>Unit 202, Campos Rueda Building, 101 Urban Ave, Makati, 1206 Metro Manila</p>
              </div>
              <div className='flex items-center gap-2'>
                <LuMail size={24} />
                <p>abicrealty.gab@gmail.com</p>
              </div>

            </div>

            <div className='py-8 space-y-4'>
              <h1 className='text-blue-500 text-xl'>Social Media</h1>
              <div className='flex items-center gap-2'>
                <LuFacebook size={24} />
                <p>Gabriel Mercado</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HomePage;
