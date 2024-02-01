const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");
const speech2text = require("./speech2text");
const keywords = require("./keywords");
const summary = require("./summary");
const synonyms = require("./synonyms");

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

    fs.writeFileSync(`./uploads/${req.file.originalname}`, req.file.buffer);

    const copy_path = "./uploads/" + req.file.originalname;

    const text_result = await speech2text(copy_path, "컴퓨터"); // ->현재 입력이 경로가 들어가도록 되어있어서 data변환해서 쓰도록 speech2text를 수정해야함
    const summary_result = await summary(text_result);
    const keywords_result = await keywords(text_result);
    const synonyms_result = await synonyms(keywords_result);

    // 파일이 업로드된 후의 처리
    const fileDetails = {
      filename: req.file.originalname,
      content: req.file.buffer, // 바이너리 데이터로 저장
      scripts: text_result,
      summary: summary_result,
      keywords: keywords_result,
      synonyms: synonyms_result,
      // 기타 필요한 파일 정보들 추가 -> erd보고 추가
    };

    // MongoDB에 파일 정보 저장
    await conn.db.collection("test").insertOne(fileDetails);
    res.json({ message: "File uploaded successfully" });
    console.log("File uploaded successfully");

    fs.unlinkSync(`./uploads/${req.file.originalname}`);

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

// Update URL로 요청이 들어왔을 때의 처리
app.post("/update_scripts", async (req, res) => {
  try {
    const collection = conn.db.collection("test");

    // 프론트엔드에서 보낸 새로운 summary 값
    const newScripts = req.body.newScripts;

    // 특정 문서 조회 및 summary 필드 업데이트
    const result = await collection.updateOne(
      { /* 여기에 원하는 조건을 추가하세요 */ },
      { $set: { scripts: newScripts } }
    );

    if (result.modifiedCount > 0) {
      console.log("Scripts updated successfully");
      res.json({ message: "Scripts updated successfully" });
    } else {
      console.log("No document found or no modification needed");
      res.json({ message: "No document found or no modification needed" });
    }
  } catch (error) {
    console.error("Error during update:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Update URL로 요청이 들어왔을 때의 처리
app.post("/update_summary", async (req, res) => {
  try {
    const collection = conn.db.collection("test");

    // 프론트엔드에서 보낸 새로운 summary 값
    const newSummary = req.body.newSummary;

    // 특정 문서 조회 및 summary 필드 업데이트
    const result = await collection.updateOne(
      { /* 여기에 원하는 조건을 추가하세요 */ },
      { $set: { summary: newSummary } }
    );

    if (result.modifiedCount > 0) {
      console.log("Summary updated successfully");
      res.json({ message: "Summary updated successfully" });
    } else {
      console.log("No document found or no modification needed");
      res.json({ message: "No document found or no modification needed" });
    }
  } catch (error) {
    console.error("Error during update:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(5000, () => {
  console.log("Server started...");
});
