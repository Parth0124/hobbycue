import React, { useState, useRef } from 'react';

const MusicPlayer = ({ url }) => {
  const [isPlaying, setPlaying] = useState(false);
  const audioRef = useRef(new Audio(url));

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} src={url}></audio>
      <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  );
};

export default MusicPlayer;
