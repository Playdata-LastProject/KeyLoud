// KeywordSearch.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/KeywordSearch.css';

const KeywordSearch = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // 검색 버튼을 눌렀을 때의 로직
    // 여기서는 검색어(searchKeyword)를 이용하여 검색 결과를 처리하는 로직을 추가할 수 있습니다.
    // 예시로 검색 버튼을 누르면 keywordSearchScreen.js로 이동하면서 검색어를 전달하는 코드를 작성했습니다.
    navigate(`/keyword-result`);
  };

  return (
    <div className="keyword-search-container">
      <input
        type="text"
        placeholder="검색할 키워드를 입력하세요"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        className="keyword-input"
      />
      <button onClick={handleSearch} className="search-button">
        검색
      </button>
    </div>
  );
};

export default KeywordSearch;