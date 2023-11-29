import { Helmet } from "react-helmet-async";
import Navbar from "../../../Components/Shared/Nabvar/Navbar";
import Banner from "../Banner/Banner";
import Winner from "../Winner/Winner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Contest-Hub Home </title>
      </Helmet>
      <Navbar></Navbar>
      <Banner></Banner>
      <Winner/>
    </div>
  );
};

export default Home;
