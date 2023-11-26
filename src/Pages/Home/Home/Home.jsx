import { Helmet } from "react-helmet-async";
import Navbar from "../../../Components/Shared/Nabvar/Navbar";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Contest-Hub Home </title>
      </Helmet>
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
};

export default Home;
