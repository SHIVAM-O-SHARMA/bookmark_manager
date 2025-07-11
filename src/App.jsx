import './App.css'
import { useState } from 'react';
import { InstallCard } from './assets/components/installcard';
import logo from './assets/images/logo.png';
import mainimg from './assets/images/mainimg.png';
import twitter from './assets/images/twitter.png';
import facebook from './assets/images/facebook.png';
import { FAQ } from './assets/components/toggle';
import { FeatureCard } from './assets/components/features';

function App(){
  return (
    <div>
      <header>
        <title>Bookmark Website</title>
        <nav>
          <div className='grid grid-cols-6 pt-10 px-9'>
            <div className='col-span-4 flex'>
              <div><img src={logo} alt="logo" /></div>
              <div className='font-bold text-[25px] translate-1.5 '><h3>BOOKMARK</h3></div></div>
            <div className='col-span-2 space-x-9 font-sans text-[#9699a6] text-[18px]'>
              <a className='hover:text-red-400 transition-colors duration-200' href="#features">FEATURES</a>
              <a className='hover:text-red-400 transition-colors duration-200' href="#downloads">DOWNLOAD</a>
              <a className='hover:text-red-400 transition-colors duration-200' href="#faQ">FAQ</a>
              <button className='bg-[#f95657] px-7 py-2 rounded-md shadow-md text-white hover:bg-white hover:text-[#f95657] hover:border-2 border-[#f95657] cursor-pointer'>LOGIN</button>
            </div>
          </div>
        </nav>
      </header>

      {/* main tag */}
     <main>
      <section>
        <div className='grid grid-cols-7 pt-18'>
          <div className='px-9 translate-y-19 col-span-3'>
            <h1 className='font-bold text-[60px]'>A Simple Bookmark Manager</h1>
            <br />
            <h4 className='text-[24px] text-[#9ba3af]'>A clean and simple interface to organize <br /> your favourite websites. Open a new <br /> browser tab and see your sites load <br /> instantly. Try it for free.</h4>
          <br />
          <div className='space-x-6'>
          <button className='bg-[#5367df] px-6 py-4 text-white font-semibold rounded-md shadow-md hover:bg-white hover:text-[#5367df] hover:border-2 border-[#5367df] transition-colors duration-200'>Get It On Chrome</button>
          <button className='bg-[#d1d5da] px-6 py-4 font-semibold rounded-md shadow-md hover:bg-white hover:text-gray-900 hover:border-2 border-[#d1d5da] transition-colors duration-200'>Get It On Safari</button>
          </div>
          </div>
          <div className='col-span-4'>
            <img src={mainimg} alt="mainimg" />
          </div>
        </div>
      </section>

       <section id='features' className='pt-20 px-4'>
      <div className='text-center max-w-2xl mx-auto'>
        <h4 className='font-bold text-[34px]'>Features</h4> <br />
        <p className='text-[#9699a6] text-[17px]'>Our aim is to make it quick and easy for you to access your <br /> favourite websites. Your bookmarks sync between your <br /> devices so you can access them on the go.</p>
      </div>
      </section>     

      <section>
       <FeatureCard/>
       </section>

      <section id='downloads' className='text-center pt-20'>
        <h4 className='text-[34px] font-bold pb-5'>Download the extension</h4>
        <p className='text-[#9699a6] text-[17px]'>We've got more browsers in the pipeline. Please do let us know if <br /> you've got a favourite you'd like us to prioritize.</p>
      </section>

      <section className='pt-40'>
       <InstallCard/>
      </section>

      <section id='faQ' className='pt-35 pb-30 text-center'>
        <h4 className='font-bold text-[34px] pb-5'>Frequently Asked Questions</h4>
        <p className='text-[#9699a6] text-[17px] pb-10'>Here are some of our FAQs. If you have any other questions <br /> you'd like answered please feel free to email us.</p>
        <FAQ />
      </section>

      <section className='bg-[#5367DF] h-100 text-white text-center'>
        <div className='translate-y-15'>
        <p className='text-[20px]'>35,000+ ALREADY JOINED</p>
        <h3 className='text-[40px] font-bold'>Stay up-to-date with what <br /> we're doing</h3>
        <div className='pt-8 space-x-6'>
        <input className='rounded shadow bg-white text-[#121314] w-54 h-12' type="text" placeholder='   Enter your email address'  />
        <button className='bg-[#F95657] font-semibold text-white rounded-md shadow-md w-40 h-12 hover:bg-[#F95657]'>Contact Us</button>
        </div>
        </div>
      </section>
     </main>

     <footer className='bg-[#252b46] h-26'>
      <div className='grid grid-cols-7 pt-10 px-4'>
      <div className='flex col-span-1 text-[20px]'>
        <img className='w-9 h-9' src={logo} alt="logo" />
        <h4 className='text-white font-semibold'>BOOKMARK</h4>
      </div>
      <div className='flex space-x-10 col-span-5 text-[18px] px-6 text-[#9094a1]'>
        <a href='#features'>FEATURES</a>
        <a href='#downloads'>DOWNLOAD</a>
        <a href='#faQ'>FAQ</a>
      </div>
      <div className='col-span-1 flex'>
        <a href="#">
          <img src={twitter} className='w-10 h-10'/>
        </a>
        <a href="#" className='px-6'>
          <img src={facebook} className='w-10 h-10' />
        </a>
      </div>
      </div>

     </footer>
    </div>
  )
}

export default App;