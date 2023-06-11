import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import Navbar from "../Compontents/Shared/Navbar";
import Footer from "../Compontents/Shared/Footer";
import useInstructor from "../hooks/useInstructor";


const DashboardLayout = () => {
    const [isAdmin]=useAdmin();
    const [isInstructor]= useInstructor();
    return (
        
       <>
        <Navbar></Navbar>
         <div className="pt-16 text-black drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                <Outlet></Outlet>

            </div>
            <div className="drawer-side bg-gray-200 ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu py-20 px-12 w-80 font-bold">
                    {
                        isAdmin ? (
                            <>
                            <li><NavLink to="/dashboard/allClasses">Manage Classes</NavLink></li>

                            <li><NavLink to="/dashboard/allUsers">Manage Users</NavLink></li>

                            </>

                        ) : isInstructor ? (
                            <>
                             <li><NavLink to="/dashboard/addClass"> Add a Class</NavLink></li>
                             <li><NavLink to="/dashboard/instructorClass">My Classes</NavLink></li>

                            </>
                        ) : (
                            <>
                             <li><NavLink to="/dashboard/selectedClass"> My Selected Class</NavLink></li>
                             <li><NavLink to="/dashboard/enrolledClass"> My Enrolled Class</NavLink></li>
                             <li><NavLink to="/dashboard/paymentHistory"> Payment History</NavLink></li>

                            </>

                        )
                    }
                    


                    <div className="divider font-bold"></div>
                    <li><NavLink to="/"> Home</NavLink> </li>
                    <li><NavLink to="/instructor">Classes</NavLink></li>
                    <li><NavLink to="/classes">Instructors</NavLink></li>
                </ul>

            </div>
        </div>
       <div className="-mt-24">
       <Footer></Footer>
       </div>
       </>

    );
};

export default DashboardLayout;