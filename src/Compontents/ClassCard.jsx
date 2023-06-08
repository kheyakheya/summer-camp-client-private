import { useContext } from "react";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const ClassCard = ({lesson}) => {
    const {user}=useContext(AuthContext);
    const navigate= useNavigate();
    const [isAdmin]=useAdmin();
    const [isInstructor]=useInstructor();
    return (
        <div className={lesson.seats!==0 ? 'card w-96  bg-base-100 shadow-xl': 'card w-96  bg-red-400 shadow-xl'}>
  <figure className="px-10 pt-10">
    <img src={lesson.image} alt="classes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{lesson.name}</h2>
    <p>Instructor: {lesson.instructor}</p>
    <p>Available Seats: {lesson.seats}</p>
    <p>Price: ${lesson.price}</p>
    <div className="card-actions">
      <button disabled={isAdmin || isInstructor || lesson.seats === 0} className="btn btn-primary">Select</button>
    </div>
  </div>
</div>
    );
};

export default ClassCard;