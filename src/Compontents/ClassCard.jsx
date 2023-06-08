import { useContext } from "react";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../hooks/useCart";

const ClassCard = ({ lesson }) => {
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();

    const navigate = useNavigate();
    const location = useLocation();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    // add to cart 
    const handleCart = (lesson) => {
        if (user && user?.email) {
            const chosenClass = { classId: lesson._id, name: lesson.name, instructor:lesson.instructor, price: lesson.price, email: user.email, enrolled: parseInt(lesson.enrolled), seats: parseInt(lesson.seats) };
            fetch('http://localhost:5000/cart', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(chosenClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added to cart.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Login Please`,

            })
            navigate('/login', { state: { from: location } })
        }

    }


    return (
        <div className={lesson.seats !== 0 ? 'card w-96  bg-base-100 shadow-xl' : 'card w-96  bg-red-400 shadow-xl'}>
            <figure className="px-10 pt-10">
                <img src={lesson.image} alt="classes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{lesson.name}</h2>
                <p>Instructor: {lesson.instructor}</p>
                <p>Available Seats: {lesson.seats}</p>
                <p>Price: ${lesson.price}</p>
                <div className="card-actions">
                    <button onClick={() => handleCart(lesson)} disabled={isAdmin || isInstructor || lesson.seats === 0} className="btn btn-primary">Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;