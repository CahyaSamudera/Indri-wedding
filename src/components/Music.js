import React from 'react';
import useSound from 'use-sound';
// import audio from '../audio/lagu-yudi.mp3';

const Music = () => {
  const soundUrl = '../audio/lagu-yudi.mp3';

  const [play, { stop, isPlaying }] = useSound(soundUrl);
  return (
    <button
      className='fa fa-music'
      active={isPlaying}
      size={60}
      iconColor='var(--color-background)'
      idleBackgroundColor='var(--color-text)'
      activeBackgroundColor='var(--color-primary)'
      play={play}
      stop={stop}
    />
  );
};

export default Music;
