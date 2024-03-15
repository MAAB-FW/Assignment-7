import bannerBG from '../../assets/Rectangle1.png';
const Banner = () => {
    return (
        <div className="text-center text-white bg-no-repeat bg-cover bg-center rounded-3xl max-w-full flex flex-col justify-center h-[400px] lg:h-[600px]" style={{ backgroundImage: `url(${bannerBG})` }}>
            <div className=''>
                <h1 className="text-[24px] lg:text-[52px] font-bold max-w-[300px] lg:max-w-[897px] mx-auto ">Discover an exceptional cooking class tailored for you!</h1>
                <p className="text-sm lg:text-lg max-w-[320px] lg:max-w-[933px] mx-auto mt-3 lg:mt-6">Are you passionate about cooking and curious about the nutritional value of your favorite recipes? Look no further! Our Recipe Nutrition Calculator is your culinary companion. Whether you’re a seasoned chef or a kitchen novice, we’ve got you covered.</p>
                <div className='mt-10 flex items-center justify-center gap-[30px]'>
                    <button className='btn rounded-full bg-[#0BE58A] border-0 lg:text-xl font-semibold'>Explore Now</button>
                    <button className='btn rounded-full bg-transparent text-white lg:text-xl font-semibold'>Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;