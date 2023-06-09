
const TopInstructorCard = ({instructor}) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <img className="w-20 h-20 rounded-full" src={instructor.image} alt="top instructor" />
            <p className="font-bold text-xl pt-6">{instructor.name}</p>
            
        </div>
    );
};

export default TopInstructorCard;