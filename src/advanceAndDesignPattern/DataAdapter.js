import axios from "axios";
//render props --> return a function
// adapter pattern --> return a function, attribute,.....
const createAdapter = (url) => {
  const fetchData = async () => {
    const response = await axios.request({
      method: "GET",
      url,
    });
    return response.data.results;
  };
  return { fetchData };
};

export default createAdapter;
