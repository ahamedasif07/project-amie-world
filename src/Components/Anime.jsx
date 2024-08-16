
import PropTypes from 'prop-types';
const Anime = ({anime}) => {
    const {image,name,language}=anime;
    return (
        <div className=''>
                        <div className="mt-4 hover:scale-105 translate-x-3 transition-transform max-h-[500px] rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
	<img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2 flex justify-between">
			<h2 className="text-xl font-semibold tracking-wide">{name}</h2>
            <div>
                {
                language.map(lan => <p className='hover:underline'>{lan} / </p>)
                }
            </div>
		</div>
		{/* <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"> <a href="">Watch Now</a></button> */}
	</div>
    </div>

</div>
           
        
    );
};

Anime.propTypes = {
    anime : PropTypes.object.isRequired
}

export default Anime;