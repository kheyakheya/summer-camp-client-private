
const TopClassCard = ({lesson}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={lesson.image} alt="top class" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{lesson.name}</h2>
          <p>Instructor: {lesson.instructor}</p>
          <p>Total Enrollment: {lesson.enrolled}</p>
          
        </div>
      </div>
    );
};

export default TopClassCard;