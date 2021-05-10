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
    <div>
      <i class='fa fa-music' onClick={() => setIsPlaying(!isPlaying)}>
        {' '}
        {!isPlaying ? 'Play' : 'Stop'}{' '}
      </i>
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
