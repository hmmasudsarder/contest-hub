import SectionsTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import useCourse from "../../../hook/useCourse";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
const Participated = () => {
  const [course, refetch] = useCourse();
  const totalPrice = course.reduce((total, course) => total + course.price, 0);
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parces/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div>
      <SectionsTitle
        heading="All contest"
        subHeading="scroll your course"
      ></SectionsTitle>
      <div className="flex justify-evenly px-5">
        <h3 className="text-3xl">Course: {course.length}</h3>
        <h3 className="text-3xl">Total Price: ${totalPrice}</h3>
        <button className="text-orange-400 btn">Pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Images</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {course.map((cours, index) => (
              <tr key={cours._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{cours.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={cours.img}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>Purple</td>
                <th>
                  <button
                    onClick={() => handleDelete(cours._id)}
                    className="btn btn-ghost btn-xs text-2xl text-red-600"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Participated;
