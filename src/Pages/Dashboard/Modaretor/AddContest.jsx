import { Helmet } from "react-helmet-async";
import AddForm from "../../../Components/Form/AddForm";
import { useState } from "react";

const AddContest = () => {
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });
  const handleSubmit = (e) => {
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
    const newContest = {name, price, prize, submission, category, description};
    console.log(newContest)
  };
  const handleDates = ranges => {
    setDates(ranges.selection)
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
      />
    </div>
  );
};

export default AddContest;
