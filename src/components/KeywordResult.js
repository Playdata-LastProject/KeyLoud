// KeywordResult.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/KeywordResult.css'

const KeywordResult = () => {
  const navigate = useNavigate();

  // 가상의 검색 결과 데이터
  const searchResults = [
    {
      id: 1,
      keyword: 'example',
      sentence: 'This is an example sentence.',
      fileName: 'example_audio.mp3',
      time: '0:30', // 가상의 시간 정보
    },
    // ... 다른 검색 결과 데이터
  ];

  const handleFileClick = (fileName) => {
    // 파일명을 클릭하면 새로운 화면으로 이동
    navigate(`/file-details/${fileName}`);
  };

  return (
    <div>
      {/* 키워드 검색창과 버튼 */}
      {/* 여기에 키워드 검색창, 버튼 구현 */}
      
      {/* 검색 결과 표시 */}
      <div className="keyword-search-container">
        {searchResults.map((result) => (
          <div key={result.id} className="search-result-item">
            <div className="result-text">
              {result.sentence.includes(result.keyword) ? (
                <>
                  {result.sentence.split(result.keyword).map((part, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && <span className="highlight">{result.keyword}</span>}
                      {part}
                    </React.Fragment>
                  ))}
                </>
              ) : (
                result.sentence
              )}
            </div>
            <div className="result-info">
              <div className="file-name" onClick={() => handleFileClick(result.fileName)}>
                {result.fileName}
              </div>
              <div className="time-info">{`시간: ${result.time}`}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeywordResult;