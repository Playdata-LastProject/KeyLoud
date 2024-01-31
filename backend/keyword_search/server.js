const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

// MongoDB Atlas 연결 정보
const uri = 'mongodb+srv://ej:ol4an74mk11HU9zR@ej.siasvc0.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'keyloud'; // 사용할 데이터베이스의 이름

// 정적 파일 서비스 설정
app.use(express.static('public'));

// 파일 검색을 위한 엔드포인트
app.get('/search', async (req, res) => {
  try {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const database = client.db(dbName);
    const collection = database.collection('files');

    const keyword = req.query.keyword;
    const regex = new RegExp(keyword, 'i'); // 대소문자 구분 없이 검색

    // MongoDB 쿼리를 통해 파일 검색
    const searchResults = await collection.find({ content: { $regex: regex } }).toArray();

    res.json(searchResults);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    client.close();
  }
});

// 서버 시작
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
