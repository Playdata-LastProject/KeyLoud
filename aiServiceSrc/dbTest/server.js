const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const Grid = require("gridfs-stream");
const {GridFsStorage} = require("multer-gridfs-storage");
//const cors = require("cors");

const app = express();

// CORS 미들웨어 추가
//app.use(cors());

// MongoDB 연결
mongoose.connect("mongodb://localhost:27017/test");
const conn = mongoose.connection;

// GridFS 스트림 연결
Grid.mongo = mongoose.mongo;
let gfs;

conn.once("open", () => {
    gfs = Grid(conn.db);
    console.log("Connected to MongoDB");
});

// Multer Storage 엔진 설정
const storage = new GridFsStorage({
    url: "mongodb://localhost:27017/test",
    file: (req, files) => {
        return new Promise((resolve, reject) => {
            const filename = files.originalname;
            const fileInfo = {
                filename: filename,
                bucketName: "uploads" // GridFS bucket 이름
            };
            resolve(fileInfo);
        });
    }
});

const upload = multer({ storage });

//app.use(express.json());
//app.use(express.urlencoded({extended: true}));

// 파일 업로드 라우트
app.post("/upload_files", upload.single("files"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        // 파일이 업로드된 후의 처리
        const fileDetails = {
            filename: req.file.filename,
            fileId: req.file.id,
            // 기타 필요한 파일 정보들 추가
        };

        // MongoDB에 파일 정보 저장
        await conn.db.collection("fileDetails").insertOne(fileDetails);

        res.json({ message: "File uploaded successfully" });
    } catch (error) {
        console.error("Error during file upload:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


/*function uploadFiles(req, res){
    console.log(req.body);
    console.log(req.files);
    res.json({ message: "Successfully uploaded files" });
}*/

app.listen(5000, () => {
    console.log('Server started...');
});