<<<<<<< HEAD
import React from "react";
import speaker from "../../assets/speaker.png";
import muted from "../../assets/muted.png";
import music from "../../assets/music.mp3";
import { Howl, Howler } from "howler";

class MusicCompenent extends React.Component {
  constructor() {
    super();
    this.sound = new Howl({
      src: music,
    });
    this.sound.play();
    this.changeIcon = this.changeIcon.bind(this);
  }

  changeIcon() {
    var speakerElement = document.getElementById("speaker");
    if (speakerElement.src == speaker) {
      speakerElement.src = muted;
      Howler.volume(0);
    } else {
      speakerElement.src = speaker;
      Howler.volume(1.0);
    }
  }

  render() {
    Howler.volume(0);
    return (
      <div>
        <img
          id="speaker"
          width={45}
          height={45}
          src={muted}
          onClick={this.changeIcon}
        />
      </div>
    );
  }
}

export default function Music() {
  return (
    <div class="flex justify-center">
      <MusicCompenent />
    </div>
  );
}

=======
import React from 'react';
import speaker from '../../speaker.png';
import muted from '../../muted.png';
import music from '../../music.mp3';
import {Howl, Howler} from "howler";
 
class MusicCompenent extends React.Component {

    
    
    constructor(){
        super();
        this.sound = new Howl({
            src: music
        });
        this.sound.play();
        this.changeIcon = this.changeIcon.bind(this);
    }

    changeIcon() {
        var speakerElement = document.getElementById("speaker");
        if (speakerElement.src==speaker) {
            speakerElement.src=muted;
            Howler.volume(0);
        } else {
            speakerElement.src=speaker;
            Howler.volume(1.0);
        }
    } 

    render() {
        Howler.volume(0)
        return (
            <div>
                <img id="speaker" width={25} height={25} src={muted} onClick={this.changeIcon}/>
            </div>
        );
    }
}

export default function Music() {
    return (
    <div class = "flex justify-center">
      <MusicCompenent />
    </div>
    );
  }
>>>>>>> c99d03cbaa96b58af6d07bcb1d3d6d7cd92fcdf7
