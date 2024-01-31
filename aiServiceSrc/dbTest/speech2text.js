const ffmpeg = require("fluent-ffmpeg");
const ffmpegPath = require("ffmpeg-static");
ffmpeg.setFfmpegPath(ffmpegPath);

const speech = require("@google-cloud/speech");
const fs = require("fs");

//const wav = require("wav");
const wav = require("node-wav");

const client = new speech.SpeechClient();

async function convertToLinear16(audioPath) {
  return new Promise((resolve, reject) => {
    const linear16FilePath = audioPath.replace(/\.[^/.]+$/, "_linear16.wav");

    ffmpeg()
      .input(audioPath)
      .audioCodec("pcm_s16le")
      .toFormat("wav")
      .on("end", () => resolve(linear16FilePath))
      .on("error", (err) => reject(err))
      .save(linear16FilePath);
  });
}

// Function to split audio into 60-second chunks
function splitAudio(audioBuffer, chunkSize, sampleRate) {
  const chunks = [];
  const totalDuration = audioBuffer.length / sampleRate; // Assuming 44.1 kHz sample rate

  for (let startTime = 0; startTime < totalDuration; startTime += chunkSize) {
    const endTime = Math.min(startTime + chunkSize, totalDuration);
    const startByte = Math.floor(startTime * sampleRate * 2); // 16-bit audio, 2 bytes per sample
    const endByte = Math.floor(endTime * sampleRate * 2);
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

async function speech2text(audioPath) {
  const linear16FilePath = await convertToLinear16(audioPath);

  // Read the linear16 audio file
  const audioFile = fs.readFileSync(linear16FilePath);
  const sampleRate = wav.decode(audioFile).sampleRate;
  console.log("sample rate : ", sampleRate);

  // Split audio into 60-second chunks
  const audioChunks = splitAudio(audioFile, 60, sampleRate);

  const config = {
    encoding: "LINEAR16",
    sampleRateHertz: sampleRate,
    languageCode: "ko-KR",
  };

  // Transcribe each chunk and concatenate results
  const result = await transcribeAndConcatenate(audioChunks, config);
  console.log("Transcription:", result);
}

module.exports = speech2text;
