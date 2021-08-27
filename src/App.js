import { useState, useEffect } from 'react';
import './App.css';
import MiniBoxMusic from './componentes/miniBoxMusic';
import MiniBoxOptions from './componentes/miniBoxOptions';

function App() {
  const [video, setVideo] = useState([]);
  const [text, setText] = useState("");
  const [id, setId] = useState('');
  const [effect, setEffect] = useState([]);

  const getVideo = async () => {
    let res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&type=video&q=${text}&maxResults=20`
    );

    let resJson = await res.json();
    setVideo(resJson.items);
  };

  console.log(id)
  const effectLayout = () => {
    setEffect({
      visibility: "visible",
      opacity: "1",
      transform: "none"
    })
  }


  useEffect(() => {
    getVideo();
  }, []);


  return (
    <div className="container">


        <div className="box-music" style={effect}>
          <MiniBoxMusic style={effect}>
            <iframe className="video" width="260" height="180" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </MiniBoxMusic>
          <MiniBoxMusic style={effect} description="asdasdaasdaasdasdsdasdasdsdasdmfejksckdjasdmsfnse">
          </MiniBoxMusic>
        </div>

      <div className="box-options" style={effect}>
        <input></input>
        <button type="button" onClick={effectLayout}>Search</button>

        <div>
          <ul>
            {video.map((vids, index) => (
              <MiniBoxOptions
                style={effect}
                key={index}
                onClick={() => setId(vids.id?.videoId)}
                
              >
                <li className="mini-box-options-list">
                  {index + 1} {vids.snippet.title.substring(0, 25)}{vids.id.videoId}
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
