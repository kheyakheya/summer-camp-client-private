import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const OurStarsCard = ({image,quote,name,team}) => {
    const [ref, inView] = useInView({
        triggerOnce: false, // Animation triggers only once
        threshold: 0.5, // Percentage of the card's visibility in the viewport to trigger the animation
      });
      const cardVariants = {
        hidden: {
          opacity: 0,
          y: 50,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.9,
          },
        },
      };
      return (
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={cardVariants}
        >
          <div className="mt-12 card w-96 glass">
            <figure><img className='mt-6 w-32 h-32 rounded-full  ' src={image} alt="car!" /></figure>
            <div className="card-body">
                <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-64 h-1 my-4 bg-red-600 border-0 rounded dark:bg-red-700" />
                    <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                        <svg aria-hidden="true" className="w-5 h-5 text-red-700 dark:text-red-300" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                    </div>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-center">{quote}</p>

                <p className="text-red-700 dark:text-800 text-center  pt-4" >{name}</p>
                <p className="text-black dark:text-black text-center">{team}</p>

            </div>
        </div>
        </motion.div>
      );
   
        

   
};

export default OurStarsCard;