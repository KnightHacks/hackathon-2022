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
        Howler.volume(1.0)
        return (
            <div>
                <img id="speaker" width={25} height={25} src={speaker} onClick={this.changeIcon}/>
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