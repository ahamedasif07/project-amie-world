import luffy from '../assets/images/luffy.png'
import naruto from '../assets/images/naruto.png'
import itachi from '../assets/images/itachi.png'
import zoro from '../assets/images/zoro.png'

const PopolorChar = () => {
    return (
        <div>
            <div className='flex lg:flex-row  flex-col-reverse  py-5  gap-24 justify-center items-center max-w-3xl mx-auto'>
                <div className='px-4 text-left'>
                    <h2 className='font-bold text-2xl py-2 '>Monkey D. Luffy</h2>
                    <li className='text-gray-700 pt-2'>I don't want to conquer anything. I just think the guy with the most freedom in this whole ocean… is the Pirate King!</li>
                    <li className='text-gray-700 pt-2'>If you don’t take risks, you can’t create a future!'</li>
                    <li className='text-gray-700 pt-2'>I’ve set myself to become the King of the Pirates… and if I die trying… then at least I tried!</li>
                </div>
                <div className=''>
                    <img className='max-w-[300px] mx-auto pt-3' src={luffy} alt="" />
                </div>
            </div>

            {/* naruto start */}
            <div className='md:flex py-5   gap-24 justify-center  items-center max-w-3xl mx-auto'>
                <div className=''>
                    <img className='max-w-[300px] mx-auto pt-3' src={naruto} alt="" />
                </div>
                <div className='px-4 text-left'>
                    <h2 className='font-bold text-2xl py-2 '>Naruto Uzumaki</h2>
                    <li className='text-gray-700 pt-2'>"I'm not gonna run away, I never go back on my word! That's my nindo: my ninja way!"</li>
                    <li className='text-gray-700 pt-2'>Because they saved me from myself, they rescued me from my loneliness. They were the first to accept me for who I am. They're my friends!'</li>
                    <li className='text-gray-700 pt-2'>If you don't like your destiny, don't accept it. Instead, have the courage to change it the way you want it to be!</li>
                </div>
            </div>

            {/* itachi start */}

            <div className='flex py-5 lg:flex-row flex-col-reverse  gap-24 justify-center items-center max-w-3xl mx-auto'>
                <div className='px-4 text-left'>
                    <h2 className='font-bold text-2xl py-2 '>Itachi Uchiha</h2>
                    <li className='text-gray-700 pt-2'>Those who cannot acknowledge themselves will eventually fail.</li>
                    <li className='text-gray-700 pt-2'>People live their lives bound by what they accept as correct and true. That’s how they define 'reality.' But what does it mean to be 'correct' or 'true?' Merely vague concepts... Their 'reality' may all be a mirage.'</li>
                    <li className='text-gray-700 pt-2'>You don't become the Hokage to be acknowledged by everyone. The one who is acknowledged by everyone becomes the Hokage.</li>
                </div>
                <div className=''>
                    <img className='max-w-[300px] mx-auto pt-3' src={itachi} alt="" />
                </div>
            </div>

            {/* zoro start */}
            <div className='md:flex py-5  gap-24 justify-center  items-center max-w-3xl mx-auto'>
                <div className=''>
                    <img className='max-w-[300px] mx-auto pt-3' src={zoro} alt="" />
                </div>
                <div className='px-4 text-left'>
                    <h2 className='font-bold text-2xl py-2 '>Roronoa Zoro</h2>
                    <li className='text-gray-700 pt-2'>I don't care if I die. If I have to, then I'll die knowing I tried to achieve my dream</li>
                    <li className='text-gray-700 pt-2'>Nothing... happened.</li>
                    <li className='text-gray-700 pt-2'>If I can't even protect my captain's dream, then whatever ambition I have is nothing but talk..!</li>
                </div>
            </div>

        </div>
    );
}

export default PopolorChar;