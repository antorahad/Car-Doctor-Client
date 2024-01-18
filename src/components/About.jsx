import Person from '../assets/images/about_us/person.jpg';
import Parts from '../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-5">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className='w-1/2 relative'>
             <img src={Person} className="w-[460px] h-[473px] object-cover rounded-lg" />
             <img src={Parts} className="w-[327px] h-[332px] object-cover rounded-lg absolute top-1/2 right-5 border-8 border-slate-100" />
          </div>
          <div className='w-1/2 space-y-4'> 
           <p className='text-[20px] font-[700] text-orange-500'>About Us</p>
           <h1 className='w-[376px] text-[45px] font-[700] leading-snug'>We are qualified & of experience in this field</h1>
           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
           <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
           <button className="px-7 py-3 font-semibold text-sm bg-orange-500 hover:bg-orange-500 focus:bg-orange-500 border border-orange-500 outline-none text-white rounded-md">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;