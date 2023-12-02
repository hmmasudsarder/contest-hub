import { Helmet } from "react-helmet-async";
import AddForm from "../../../Components/Form/AddForm";
import { useContext, useState } from "react";
import useAxiosOpen from "../../../hook/useAxiosOpen";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import Swal from "sweetalert2";
const image_key= import.meta.env.VITE_IMAGE_KEY;
const image_api=`https://api.imgbb.com/1/upload?key=${image_key}`;
const AddContest = () => {
    const {user} = useContext(AuthContext);
    const axiosOpen = useAxiosOpen();
    const axiosSecure = useAxiosSecure();
    const [loading, setLoading] = useState(false);
    const [uploadButtonText, setUploadButton] = useState('Upload Image')
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });
  const handleSubmit = async(e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const prize = form.prize.value;
    const to = dates.endDate;
    const from = dates.startDate;
    const submission = form.submission.value;
    const category = form.category.value;
    const description = form.description.value;
    const image = form.image.files[0];
    const image_url = await axiosOpen.post(image_api, {image}, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    })
    const moderator = {
        name: user?.displayName,
        image: user?.photoURL,
        email: user.email
    }

    const newContest = {
        name, 
        price, 
        prize, 
        submission, 
        category, 
        description, 
        image: image_url.data.data.display_url,
         to, 
         from,
        moderator
         };
         const resultItem = await axiosSecure.post('/contest', newContest)
         if(resultItem.data.acknowledged){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your contest has been saved",
                showConfirmButton: false,
                timer: 1500
              });
         }
   
  };
  const handleDates = ranges => {
    setDates(ranges.selection)
  }
  const handleImageChange = image => {
    setUploadButton(image.name)
  }
  return (
    <div>
      <Helmet>
        <title>Add Contest</title>
      </Helmet>
      <AddForm 
      handleSubmit={handleSubmit} 
      handleDates={handleDates} 
      dates={dates}
      handleImageChange={handleImageChange}
      loading={loading}
      uploadButtonText={uploadButtonText}
      />
    </div>
  );
};

export default AddContest;
