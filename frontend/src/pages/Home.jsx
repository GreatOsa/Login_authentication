import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token"); // get token from local storage
      const response = axios.get("http://localhost:3000/auth/home", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status !== 201) {
        // if the response status is not 201, navigate to login page
        navigate("/login");
      }
    } catch (err) {
      navigate("/login");
      console.log(err);
    }

    // console.log(response);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return <div className="text-3xl text-blue-500">Home</div>;
};

export default Home;
