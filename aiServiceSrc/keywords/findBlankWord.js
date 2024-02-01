const str = "안녕하세요 blockchain이 뭐예요 안녕하세요 blockchain은 탈중앙화된 등산 거래 정보기술로 여러 장을 척안의 신뢰 를 기반으로 하는 분산데 이터베이스 왜 blockchain을 사용하나요 블록 씨는 중앙관리자 없이 안전하게  거래기록을 유지하고 거래  투명성과 신뢰성을 강합니다 동안 주인은 군산에 2공항에서 작동하므로 단일고장 지점이 없어 시스템이 더욱 안정적입니다";
const str2 = str.split(' ');

const result = [];
for (let i = 0; i < str2.length-1; i++){
    if((word)==(str2[i]+str2[i+1])){
        console.log(str2[i]);
        console.log("index :",i);
        result.push(i);
    }
}

/*
const wordIndex = (word) => {
    const result = [];
    for (let i = 0; i < word.length; i++){
        result.push(str.indexOf(word[i]));
    }
    return result;
};
wordindex = wordIndex(twogram);
console.log(wordindex);
for (let i = 0; i < twogram.length-1; i+=2){
    if((twogram[i+1].length-twogram[i].length) == (twogram[i].length-1)){
        if (word == twogram[i]+twogram[i+1]){
            console.log(twogram[i]+twogram[i+1]);
            console.log(str2.indexOf(twogram[i]+twogram[i+1]));
        }
        
    }
}
*/



