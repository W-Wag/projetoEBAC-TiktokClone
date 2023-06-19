import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';

import './App.css';
import Videos from './pages/Videos.js';
import db from './config/firebase';



function App() {

  let maxHeight;
  if (window.innerHeight <= 800) {
    maxHeight = window.innerHeight;
  } else {
    maxHeight = 800;
  }

  

  useEffect(() => {
    getVideos();
  }, []);

  const [videos, setVideos] = useState([]);

  async function getVideos() {
    
    try{
      const videosCollection = collection(db, "videos");
      const videosSnapshot = await getDocs(videosCollection);
      const videosList = videosSnapshot.docs.map(doc => doc.data());

      setVideos(videosList);
    }catch(err){
      console.error(err);
    }
  }

  return (
    <div className="App" style={{maxHeight: maxHeight + "px"}}>
      <div className="app_videos">
        {videos.map(video => {
          return <Videos key={video.id} {...video} />
        })}
        {/* <Videos 
        likes={100}
        messages={200}
        shares={300}
        name='Doe'
        description='Gato Goleiro'
        music='Musica épica'
        url='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z'
        /> */}

      </div>
    </div>
  );
}

export default App;
