import { useQuery } from "@tanstack/react-query";
import SectionsTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

const AllUser = () => {
 
  const axiosSecure = useAxiosSecure();
  const {refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleMakeAdmin = user => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, admin it",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`users/admin/${user._id}`)
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: `Your are has been admin`,
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  }
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
        axiosSecure.delete(`/users/${id}`).then((res) => {
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
      <SectionsTitle subHeading="ADMIN" heading="i'm Admin"></SectionsTitle>
      <div className="flex justify-evenly">
        <h1 className="text-3xl">All User</h1>
        <h1 className="text-3xl">Total User: {users.length} </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                {user.role === 'admin' ? 
                <button
                className="btn btn-lg text-4xl bg-orange-400"
              >
                <MdOutlineAdminPanelSettings className="text-white"/> 
              </button>
                :<button
                  onClick={() => handleMakeAdmin(user)}
                  className="btn btn-lg text-2xl bg-orange-400"
                >
                  <FaUsers  className="text-white"></FaUsers>
                </button>}
                </td>
                <td>
                <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-lg text-2xl text-red-600"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
