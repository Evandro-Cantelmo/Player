import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [video, setVideo] = useState([]);
  const [text, setText] = useState("teto");

  const getVideo = async () => {
    let res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBnunSfLqtKpMemlW22YdiqRnqtTdlMoxs&type=video&q=${text}&maxResults=20`
    );
    
    let resJson = await res.json();
    setVideo(resJson.items);
    console.log(resJson)
  };

  useEffect(() => {
    getVideo();
  }, []);

  
  return (
    <div>
      Hello world
    </div>
  );
}

export default App;
