import PropTypes from 'prop-types';


const Movie = ({movie}) => {

    const {image,language}=movie;

   

    return (
        <div>
                                <div className="mt-4  border-4 relative max-h- hover:scale-105  transition-transform max-h-[500px] rounded-md shadow-md dark:bg-gray-100  dark:text-gray-800">
	<img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-green-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2 flex justify-between">
			<h2 className="text-xl font-semibold tracking-wide">{name}</h2>
            <div>
                {
                language.map((lan,idx) => <p key={idx} className='hover:underline whitespace-nowrap'>{lan}</p>)
                }
            </div>
		</div>
		<button  type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"> <a href="">Watch Now</a></button>
	</div>
    </div>
        </div>
    );
};

Movie.propType = {
    movie:PropTypes.object.isRequired
}
export default Movie;