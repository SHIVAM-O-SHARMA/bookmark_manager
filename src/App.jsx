import './App.css'
import logo from './assets/images/logo.png';
import mainimg from './assets/images/mainimg.png';

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
            <div className='col-span-2 space-x-9 font-sans text-[18px]'>
              <a href="#">FEATURES</a>
              <a href="#">DOWNLOAD</a>
              <a href="#">FAQ</a>
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
            <h4 className='font-semibold text-[26px] text-[#9ba3af]'>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</h4>
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

       <section>
      
      </section>     
     </main>

    </div>
  )
}

export default App;