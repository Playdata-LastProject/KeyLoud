//const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
//const ffmpeg = require("fluent-ffmpeg");
//ffmpeg.setFfmpegPath(ffmpegPath);

//서버 내에 ffmpeg 바이너리를 함께 포함하고,
//어플리케이션 내에서 해당 내장된 ffmpeg을 사용하는 방법
const ffmpeg = require("fluent-ffmpeg");
const ffmpegPath = require("ffmpeg-static");
ffmpeg.setFfmpegPath(ffmpegPath);

const speech = require("@google-cloud/speech");
const fs = require("fs");

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

// Function to split audio into 60-second chunks
function splitAudio(audioBuffer, chunkSize) {
  const chunks = [];
  const totalDuration = audioBuffer.length / 44100; // Assuming 44.1 kHz sample rate

  for (let startTime = 0; startTime < totalDuration; startTime += chunkSize) {
    const endTime = Math.min(startTime + chunkSize, totalDuration);
    const startByte = Math.floor(startTime * 44100 * 2); // 16-bit audio, 2 bytes per sample
    const endByte = Math.floor(endTime * 44100 * 2);
    const chunk = audioBuffer.slice(startByte, endByte);
    chunks.push(chunk);
  }

  return chunks;
}

async function transcribeAndConcatenate(chunks, config) {
  const transcriptions = [];

  for (const chunk of chunks) {
    const audioBytes = chunk.toString("base64");

    const audio = {
      content: audioBytes,
    };

    const request = {
      audio: audio,
      config: config,
    };

    try {
      const [response] = await client.recognize(request);
      const transcript = response.results
        .map((result) => result.alternatives[0].transcript)
        .join("\n");
      transcriptions.push(transcript);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return transcriptions.join(" ");
}

async function quickstart() {
  const mp3FilePath =
    "D:/playdata_mini_project/final_proj/KeyLoud/audio_samples/뇌공학수업대본.mp3";
  const linear16FilePath = await convertMp3ToLinear16(mp3FilePath);

  // Read the linear16 audio file
  const audioFile = fs.readFileSync(linear16FilePath);

  // Split audio into 60-second chunks
  const audioChunks = splitAudio(audioFile, 60);

  const config = {
    encoding: "LINEAR16",
    sampleRateHertz: 44100,
    languageCode: "ko-KR",
  };

  // Transcribe each chunk and concatenate results
  const result = await transcribeAndConcatenate(audioChunks, config);
  console.log("Transcription:", result);
}

quickstart().catch(console.error);
