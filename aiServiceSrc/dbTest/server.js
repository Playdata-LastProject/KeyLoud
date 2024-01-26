const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// CORS 미들웨어 추가
app.use(cors());

// MongoDB 연결
mongoose.connect("mongodb://localhost:27017/keyloud");
const conn = mongoose.connection;

// 파일 업로드 라우트
app.post("/upload_files", multer().single("files"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        // 파일이 업로드된 후의 처리
        const fileDetails = {
            filename: req.file.originalname,
            fileData: req.file.buffer, // 바이너리 데이터로 저장
            // 기타 필요한 파일 정보들 추가
        };

        // MongoDB에 파일 정보 저장
        await conn.db.collection("test").insertOne(fileDetails);

        res.json({ message: "File uploaded successfully" });
    } catch (error) {
        console.error("Error during file upload:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.listen(5000, () => {
    console.log('Server started...');
});
