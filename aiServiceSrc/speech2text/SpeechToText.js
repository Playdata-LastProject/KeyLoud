//const ffmpeg = require("fluent-ffmpeg");
//const ffmpegStatic = require("ffmpeg-static");

const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);

const speech = require("@google-cloud/speech");
const fs = require("fs");

//ffmpeg.setFfmpegPath(ffmpegStatic.path); // ffmpeg-static을 사용하여 설정

const client = new speech.SpeechClient();

async function convertMp3ToLinear16(mp3FilePath) {
  return new Promise((resolve, reject) => {
    const linear16FilePath = mp3FilePath.replace(".mp3", "_linear16.wav");

    ffmpeg()
      .input(mp3FilePath)
      .audioCodec("pcm_s16le")
      .toFormat("wav")
      .on("end", () => resolve(linear16FilePath))
      .on("error", (err) => reject(err))
      .save(linear16FilePath);
  });
}

async function quickstart() {
  const mp3FilePath =
    "D:/playdata_mini_project/final_proj/KeyLoud/audio_samples/뇌공학수업대본.mp3";
  const linear16FilePath = await convertMp3ToLinear16(mp3FilePath);

  const file = fs.readFileSync(linear16FilePath);
  const audioBytes = file.toString("base64");

  const audio = {
    content: audioBytes,
  };

  const config = {
    encoding: "LINEAR16",
    sampleRateHertz: 44100,
    languageCode: "ko-KR",
  };

  const request = {
    audio: audio,
    config: config,
  };

  const [response] = await client.recognize(request);
  const transcription = response.results
    .map((result) => result.alternatives[0].transcript)
    .join("\n");

  console.log(`Transcription: ${transcription}`);
}

quickstart().catch(console.error);
