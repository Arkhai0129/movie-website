import React, { useState } from "react";
import "./App.css";
import { Navbar } from "./assets/components/Navbar";
import { Movies } from "./assets/components/Movies";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";

const App = () => {
  const MovieData = [
    {
      id: "1",
      imgUrl: img1,
      name: "Inside Out 2",
      description:
        "Teenager Riley’s mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear, and ",
    },
    {
      id: "2",
      imgUrl: img2,
      name: "Baki Hanma vs Kengan Ashura",
      description:
        "It’s the ultimate showdown. The toughest fighters from “Baki Hanma” and “Kengan Ashura” clash in this unprecedented, hard-hitting ",
    },
    {
      id: "3",
      imgUrl: img3,
      name: "The Garfield Movie (2024)",
      description:
        "Garfield, the world-famous, Monday-hating, lasagna-loving indoor cat, is about to have a wild outdoor adventure! After an unexpected reunion with his long-lost father ",
    },
    {
      id: "4",
      imgUrl: img4,
      name: "Bad Boys: Ride or Die (2024)",
      description:
        "After their late former Captain is framed, Lowrey and Burnett try to clear his name, only to end up on the run themselves.",
    },
    {
      id: "5",
      imgUrl: img5,
      name: "Ultraman: Rising (2024)",
      description:
        "With Tokyo under attack from kaiju, Ultraman discovers his greatest challenge isn’t fighting giant monsters – it’s raising one.",
    },
  ];

  const [text, setvalue] = useState("");
  const textInput = (e) => {
    const inputvalue = e.target.value;
    setvalue(inputvalue);
  };

  let filteredMovie = MovieData.filter((MovieData) =>
    MovieData.name.toLowerCase().includes(text)
  );

  if (filteredMovie.length === 0) {
    return (
      <div>
        <Navbar />
        <input
          className="searchMovie"
          type="text"
          placeholder="Search movie..."
          onChange={textInput}
        ></input>
        <main>
          <h3>No data to show...</h3>
        </main>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <input
          className="searchMovie"
          type="text"
          placeholder="Search movie..."
          onChange={textInput}
        ></input>
        <main>
          {filteredMovie.map((data) => (
            <div className="movie-card" key={data.id}>
              <Movies
                imgUrl={data.imgUrl}
                name={data.name}
                description={data.description}
              />
            </div>
          ))}
        </main>
      </div>
    );
  }
};
export default App;
