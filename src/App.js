import { useState, useEffect } from "react";
import "./App.css";
import MiniBoxMusic from "./componentes/miniBoxMusic";
import MiniBoxOptions from "./componentes/miniBoxOptions";

function App() {
  const [video, setVideo] = useState([]);
  const [text, setText] = useState("");
  const [id, setId] = useState("");
  const [desc, setDesc] = useState("");
  const [effect, setEffect] = useState([]);

  const getVideo = async () => {
    let res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&type=video&q=${text}&maxResults=20`
    );

    let resJson = await res.json();
    setVideo(resJson.items);
  };

  const effectLayout = () => {
    setEffect({
      visibility: "visible",
      opacity: "1",
      transform: "none",
      overflow: "auto",
    });
  };

  const handleText = ({ target }) => {
    setText(target.value);
  };

  const inputEffect = () => {
    getVideo();
    effectLayout();
  };

  const enterPress = (event) => {
    if (event.key === "Enter") {
      inputEffect();
    }
  };

  useEffect(() => {
    getVideo();
  }, []);

  return (
    <div className="container">
      <div className="box-music" style={effect}>
        <MiniBoxMusic style={effect}>
          <iframe
            className="video"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </MiniBoxMusic>
        <MiniBoxMusic
          style={effect}
          description={video[desc]?.snippet.description}
        ></MiniBoxMusic>
      </div>

      <div className="box-options" style={effect}>
        <input
          placeholder="Oque deseja escutar?"
          onKeyPress={enterPress}
          onChange={handleText}
        ></input>
        <button type="submit" onClick={inputEffect}>
          Search
        </button>

        <div>
          <ul>
            {video.map((vids, index) => (
              <MiniBoxOptions
                style={effect}
                key={index}
                onClick={() => setId(vids.id?.videoId) || setDesc(index)}
              >
                <li className="mini-box-options-list">
                  {index + 1} {vids.snippet.title.substring(0, 25)}
                </li>
              </MiniBoxOptions>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
