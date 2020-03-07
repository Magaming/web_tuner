import { scales } from '../consts/scales';

const Home = () => {

  const sound = (freq: number) => {
    const audioCtx = new AudioContext();
    var oscillator = audioCtx.createOscillator();
    oscillator.frequency.value = freq;
    oscillator.connect(audioCtx.destination);
    oscillator.start();
    oscillator.stop(1);
  }

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