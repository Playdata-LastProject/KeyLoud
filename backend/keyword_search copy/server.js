const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const cors = require("cors");
const speech2text = require("./speech2text");
const keywords = require("./keywords");

const app = express();

// CORS 미들웨어 추가
app.use(cors());

// MongoDB 연결
// mongoose.connect("mongodb://localhost:27017/keyloud");
// const conn = mongoose.connection;
mongoose.connect('mongodb+srv://ej:ol4an74mk11HU9zR@ej.siasvc0.mongodb.net/keyloud', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  retryWrites: true,
  w: 'majority'
});

const conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'MongoDB connection error:'));
conn.once('open', () => {
  console.log('Connected to MongoDB');
});

// 파일 업로드 라우트
app.post("/upload_files", multer().single("files"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        //const text_result = speech2text(); ->현재 입력이 경로가 들어가도록 되어있어서 data변환해서 쓰도록 speech2text를 수정해야함
        //const keywords_result = keywords(text_result);

        // 파일이 업로드된 후의 처리
        const fileDetails = {
            filename: req.file.originalname,
            content: req.file.buffer, // 바이너리 데이터로 저장
            //scripts: text_result,
            //summary: keywords_result,
            // 기타 필요한 파일 정보들 추가 -> erd보고 추가
        };

        // MongoDB에 파일 정보 저장
        await conn.db.collection("test").insertOne(fileDetails);
        res.json({ message: "File uploaded successfully" });

        /*
        // 파일 읽기 및 MongoDB에서 조회
        const document = await conn.db.collection("test").findOne({ filename: fileDetails.filename });

        if (!document || !document.fileData) {
            console.error('해당 문서 또는 바이너리 데이터가 없습니다.');
            return;
        }*/

        //console.log(document);
    } catch (error) {
        console.error("Error during file upload:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }


});

app.listen(3000, () => {
    console.log('Server started...');
});
