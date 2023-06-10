import React from "react";
import {v4 as uuidV4} from "uuid"
import withResults from "./withResults";

const DisplayFilm = ({ props, results: listFilms }) => {
  console.log(listFilms);
  return (
    <div>
      {listFilms.map((film) => (
        <div key={uuidV4()}>
          <span>{film?.original_title}</span>
        </div>
      ))}
    </div>
  );
};

export default withResults(
  DisplayFilm,
  "https://api.themoviedb.org/3/search/movie?api_key=2537abce0574afa219f72b4d7aacde04&language=en-US&query=Batman&page=2"
);
