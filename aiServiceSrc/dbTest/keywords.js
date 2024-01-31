const {VertexAI} = require('@google-cloud/vertexai');

function keywords(content){
    async function createStreamChat(
        projectId = 'keyloud',
        location = 'us-central1',
        model = 'gemini-pro'
      ) {
        // Initialize Vertex with your Cloud project and location
        const vertexAI = new VertexAI({project: projectId, location: location});
      
        // Instantiate the model
        const generativeModel = vertexAI.preview.getGenerativeModel({
          model: model,
        });
      
        const chat = generativeModel.startChat({});
        chatInput1 = `Extract 5 key keywords or phrases from the following text: ${content}
        Please respond korean with the extracted keywords, prefixed with a dash (-).
        At this point, the extracted keywords may have different language formats.
        As an example, when extracting keywords from a sentence like '나는 apple을 바바나와 맛있게 먹었다' respond with keywords that match the language format of the input text, such as 'apple' and '바나나'.`;
        //chatInput1 = chatInput1+"1. Identify and list the most important keywords or key phrases in the text. These keywords should capture the main topics, concepts, or subjects discussed in the text. 2. If there are subtopics or secondary themes mentioned in the text, list them as well. Ensure that the extracted keywords accurately represent the content's context. 3. Include the exact text span or sentence where each keyword or phrase is found in the original text. 4. If there are any ambiguous keywords or phrases, indicate the uncertainty and provide possible interpretations or context that might clarify the intended meaning. 5. Consider the context, relevance, and frequency of the keywords when determining their significance. 6. If the text suggests any actions, decisions, or recommendations related to the extracted keywords, provide a brief summary of these insights."
      
        console.log(`User: ${chatInput1}`);
      
        const result1 = await chat.sendMessageStream(chatInput1);
        tmp='';
        for await (const item of result1.stream) {
          //console.log(item.candidates[0].content.parts[0].text);
          const responseText = item.candidates[0].content.parts[0].text;
          const cleanedResponse = responseText.replace(/\n/g, ''); // 줄바꿈 문자 제거
          console.log(cleanedResponse);
          tmp = tmp + cleanedResponse;
          //keywords.push(cleanedResponse);
        }
        const tmp2 = tmp.split(/(?=[^a-zA-Z0-9가-힣\s])/).filter(word => word.length > 0);
        keywords = tmp2.map(word => `${word.replace(/^[^a-zA-Z0-9가-힣]+/, '')}`);
        console.log(keywords);

        //console.log(JSON.stringify(jsonResponse, null, 2));
        return keywords;
      }
      // [END aiplatform_gemini_multiturn_chat]
      
      createStreamChat(...process.argv.slice(2)).catch(err => {
        console.error(err.message);
        process.exitCode = 1;
      });
}

module.exports = keywords;