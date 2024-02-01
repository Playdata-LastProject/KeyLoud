async function targetTimestamp(str, keyword){
    const str2 = str.split(' ');

    //word="분산데이터베이스"
    const word = keyword.replace(/\s/g, "");
    const result = [];
    for (let i = 0; i < str2.length-1; i++){
        if((str2[i]+str2[i+1]).includes(word)){
            console.log(str2[i]);
            console.log("index :",i);
            result.push(i);
        }
    }
    return result;
}


module.exports = targetTimestamp;