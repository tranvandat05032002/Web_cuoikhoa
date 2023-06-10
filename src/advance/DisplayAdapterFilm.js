import React from "react";
import { v4 as uuidV4 } from "uuid";
import createAdapter from "./DataAdapter";

const DisplayAdapterFilm = () => {
  const [films, setFilm] = React.useState([]);
  React.useEffect(() => {
    async function fetchDataFilm() {
      const AdapterData = createAdapter(
        "https://api.themoviedb.org/3/search/movie?api_key=2537abce0574afa219f72b4d7aacde04&language=en-US&query=Batman&page=2"
      );
      const results = await AdapterData.fetchData();
      setFilm(results);
    }
    fetchDataFilm();
  }, []);
  return (
    <div>
      {films.map((adapterFilm) => (
        <div key={uuidV4()}>
          <span>{adapterFilm?.original_title}</span>
        </div>
      ))}
    </div>
  );
};

export default DisplayAdapterFilm;
