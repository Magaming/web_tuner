import { scales } from '../consts/scales';
import { useCallback, useEffect } from 'react';

const Home = () => {

  const AudioContext = window.AudioContext;
  const ctx = new AudioContext();
  const oscillator = ctx.createOscillator();

  const sound = useCallback((freq: number) => {
    oscillator.frequency.value = freq;
    oscillator.connect(ctx.destination);
    oscillator.start();
    oscillator.stop(1);
  },[])

  useEffect(() => {
    document.addEventListener('touchstart', initAudioContext);
    function initAudioContext(){
      document.removeEventListener('touchstart', initAudioContext);
      // wake up AudioContext
      const emptySource = ctx.createBufferSource();
      emptySource.start();
      emptySource.stop();
    }
  },[])

  return (
    <>
      <h1>Web Tuner</h1>

      {/* 本来はベースはE1,A1,D2,G2 だけどしょぼいスピーカーだと出ないので2oct上げる */}
      <button onClick={() => sound(scales['E3'])}>
        E
      </button>
      <button onClick={() => sound(scales['A3'])}>
        A
      </button>
      <button onClick={() => sound(scales['D4'])}>
        D
      </button>
      <button onClick={() => sound(scales['G4'])}>
        G
      </button>
    </>
  )
};

export default Home;