import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [video, setVideo] = useState([]);
  const [text, setText] = useState("");

  const getVideo = async () => {
    let res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&type=video&q=${text}&maxResults=20`
    );

    let resJson = await res.json();
    setVideo(resJson.items);
    console.log(process.env.REACT_APP_YOUTUBE_API_KEY)
    console.log(resJson)
  };

  useEffect(() => {
    getVideo();
  }, []);


  return (
    <div className="container">
      <div className="box-music">

      </div>
      <div className="box-options">
      </div>
    </div>
  );
}

export default App;
