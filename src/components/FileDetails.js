import React from 'react';

const FileDetails = () => {
  // 가상의 파일 세부 정보 데이터
  const fileDetails = {
    fileName: 'example_audio.mp3',
    script: 'This is the full script of the audio file.',
    summary: 'This is the summary of the script.',
    // ... 다른 파일 세부 정보 데이터
  };

  const handleDownloadSummary = () => {
    // 요약 스크립트 다운로드 로직
  };

  return (
    <div>
      {/* 파일 세부 정보 표시 */}
      <div className="file-details-container">
        <div className="audio-file-bar">{/* 여기에 시간 바 구현 */}</div>
        <div className="script-details">
          <div className="full-script">{fileDetails.script}</div>
          <div className="summary-script">{fileDetails.summary}</div>
        </div>
        <button onClick={handleDownloadSummary}>요약 다운로드</button>
      </div>
    </div>
  );
};

export default FileDetails;