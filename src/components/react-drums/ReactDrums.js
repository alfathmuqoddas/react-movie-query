import React, {useState, useEffect} from "react";

export default const ReactDrums = () => {

  const [display, setDisplay] = useState('');
 
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
  
  const DrumMachine = (props) => {
        
    useEffect(() => {
      document.addEventListener('keydown', handleKeyPress);      
      return () => {
        document.removeEventListener('keydown', handleKeyPress);
      }
    }, []);
    
    function handleKeyPress(e) {
      console.log(e.keyCode);
        if (e.keyCode === props.keyCodes) {
          playAudio();          
        }
      }
 
    function playAudio() {
      const audio = document.getElementById(props.key4);
      audio.play();
    } 
    
    return (
      <>
              <button onClick={playAudio} className="btn btn-primary p-4 m-1 drum-pad w-100" id={props.name}>
                {props.key2}
                <audio className="clip" id={props.key3} src={props.sound} type="audio/mpeg" />
              </button>
      </>
    );
  }
  
  return (
  <>
      <div className="container">
        <h1 className="text-center">React Drum</h1>
        <div id="drum-machine">
          <div id="display">{display}</div>
          <div className="row row-cols-3 mx-auto" style={{maxWidth: '500px'}}>
          { drums.map(drum => (
            <div key={drum.key} className="col">
            <DrumMachine key1={drum.key} key2={drum.key} key3={drum.key} key4={drum.key} sound={drum.sound} name={drum.name} keyCodes={drum.keyCodes} nameDisplay={drum.name} />
            </div>
          ))}
          </div>
        </div>
      </div>
  </>
  );
}