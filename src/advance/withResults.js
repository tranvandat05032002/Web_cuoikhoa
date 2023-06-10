import axios from "axios";
import React from "react";
//HOCs --> trả về 1 component
const withResults = (WrapperComponent, urlAPI, filter = "") => {
  return (props) => {
    const [results, setResults] = React.useState([]);
    React.useEffect(() => {
      const getResults = async () => {
        const response = await axios.request({
          method: "GET",
          url: urlAPI,
          params: filter,
        });
        if (response.data.results) {
          setResults(response.data.results);
        }
      };
      getResults();
    }, []);
    return <WrapperComponent results={results} {...props}></WrapperComponent>;
  };
};
//https://api.themoviedb.org/3/search/movie?api_key=2537abce0574afa219f72b4d7aacde04&language=en-US&query=Batman&page=2
export default withResults;
