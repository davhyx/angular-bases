interface AudioPlayer {
  audioVolume: number;
  audioDuration: number;
  audio: string;
  details: AudioDetails;
}
interface AudioDetails {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  audioDuration: 36,
  audio: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015,
  },
};

// Tradicional
console.log("Audio: ", audioPlayer.audio);
console.log("Volume: ", audioPlayer.audioVolume);
console.log("Author: ", audioPlayer.details.author);

// Con desestructuracion
const {
  audio,
  audioVolume: volume,
  details: { author },
} = audioPlayer;

console.log("Audio: ", audio);
console.log("Volume: ", volume);
console.log("Author: ", author);

export {};
