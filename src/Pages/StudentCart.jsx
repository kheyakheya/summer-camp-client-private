import Swal from "sweetalert2";
import useCart from "../hooks/useCart";
import { FaTrash } from 'react-icons/fa';
import { Link } from "react-router-dom";

const StudentCart = () => {
    const [cart, refetch] = useCart();
    const handleDelete=(lesson)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed){
                fetch(`http://localhost:5000/cart/${lesson._id}`,{
                    method: 'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount>0){
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
            }
        })

    }
    return (
        <div>
            <h1>total order{cart.length}</h1>
            <table className="table w-full">
                {/* head*/}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Class</th>
                        <th>Instructor</th>
                        <th>Price</th>
                        <th>Delete</th>
                        <th>Pay</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((lesson, index) =>
                        <tr key={lesson._id}>
                            <th>{index + 1}</th>
                            <td>{lesson.name}</td>
                            <td>{lesson.instructor}</td>
                            <td>{lesson.price}</td>
                            <td><button onClick={()=>handleDelete(lesson)}><FaTrash className="text-red-400"></FaTrash></button></td>
                            <td><Link to={`payment/${lesson._id}`} ><button>Pay</button></Link></td>
                          </tr>
                    )}

                </tbody>
            </table>

        </div>
    );
};

export default StudentCart;