import React, {useState, useEffect} from "react";

const drums = [
  {
    keyCodes: 81, key: "Q", sound: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/20[kb]80s-LOWCONGA.wav.mp3", name: "lowconga"
  },
  {
    keyCodes: 87, key: "W", sound: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/12[kb]80s-Bdrum1.wav.mp3", name: "bdrum"
  },
  {
    keyCodes: 69, key: "E", sound: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/18[kb]80s-COWBELL1.wav.mp3", name: "cowbell"
  },
  {
    keyCodes: 65, key: "A", sound: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/87[kb]80s-CRASH1.wav.mp3", name: "crash"
  },
  {
    keyCodes: 83, key: "S", sound: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/11[kb]80s-HHCLOSE1.wav.mp3", name: "hhclose"
  },
  {
    keyCodes: 68, key: "D", sound: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/19[kb]80s-SNARE1.wav.mp3", name: "snare"
  },
  {
    keyCodes: 90, key: "Z", sound: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/19[kb]80s-SNARE1.wav.mp3", name: "tom1"
  },
  {
    keyCodes: 88, key: "X", sound: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/19[kb]80s-TOM2.wav.mp3", name: "tom2"
  },
  {
    keyCodes: 67, key: "C", sound: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/9[kb]80s-HHCLOSE2.wav.mp3", name: "hhclose"
  },
]
  
const Display = ({ description }) => {
  return (
    <div className="text-center">
      <div id="display" className="display">
        <h1>{description}</h1>
      </div>
    </div>
  );
};

const DrumPad = ({ data, audio, display }) => {
  return (
    <div className="row row-cols-3 mx-auto" style={{width: '500px'}}>
      {data.map(({ key, name, sound }) => (
        <div className="col">
        <div
          id={name}
          className="drum-pad col btn btn-primary p-4 m-1 w-100"
          key={key}
          onClick={() => {
            audio(key);
            display(name);
          }}
          >
          {key}
          <audio id={key} className="clip" src={sound}>
            Your browser does not support the <code>audio</code> element.
          </audio>
        </div>
        </div>
      ))}
    </div>
  );
};
  
export default DrumMachine = () => {
  const [display, setDisplay] = React.useState('play!');

  React.useEffect(() => {
    const handlekeydownEvent = (event) => {
      const { keyCode } = event;
      drums.forEach(item => {
        if (item.keyCodes === keyCode) {
          playAudio(item.key);
          setDisplay(item.name);
        }
      });
    };

    document.addEventListener("keyup", handlekeydownEvent);
    return () => {
      document.removeEventListener("keyup", handlekeydownEvent);
    }
  }, []);

  const playAudio = (name) => {
    const audio = document.getElementById(name);
    audio.play();
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div id="drum-machine" className="drum-machine">
        <Display description={display} />
        <DrumPad data={drums} audio={playAudio} display={setDisplay}/>
      </div>
    </div>
  );
}