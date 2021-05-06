import React, { useState } from 'react';
import Sound from 'react-sound';
import audio from '../audio/lagu-yudi.mp3';

const PlaySound = (
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying
) => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className='animate__animated animate__fadeInDown animate__delay-1s'>
      <button onClick={() => setIsPlaying(!isPlaying ? 'Play' : 'Stop')}>
        <i class='fa fa-music'></i>
      </button>
      <Sound
        url={audio}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
        playFromPosition={100}
        onLoading={handleSongLoading}
        onPlaying={handleSongPlaying}
        onFinishedPlaying={handleSongFinishedPlaying}
        autoLoad={true}
        loop={true}
      />
    </div>
  );
};

export default PlaySound;
