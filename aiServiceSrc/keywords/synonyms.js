// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// [START aiplatform_gemini_multiturn_chat]
const {VertexAI} = require('@google-cloud/vertexai');

/**
 * TODO(developer): Update these variables before running the sample.
 */
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
  const content="블록체인, 탈중앙화, 분산 데이터베이스, 투명성, 신뢰성";
  chatInput1 = `Please find 2 each synonyms from the following keywords: ${content}
  Please respond korean with the prefixed with a dash (-).`;
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
  console.log(tmp);
  const tmp2 = tmp.split(/(?=[^a-zA-Z0-9가-힣\s])/).filter(word => word.length > 0);
  //keywords = tmp2.map(word => `${word.replace(/^[^a-zA-Z0-9가-힣]+/, '')}`);
  const keywords = tmp2.map(word => `${word.replace(/^[^a-zA-Z0-9가-힣]+/, '').trim()}`);
  const contentArray = content.split(',').map(word => word.trim());
  filteredKeywords = keywords.filter(keyword => !contentArray.includes(keyword));
  filteredKeywords = filteredKeywords.filter(keyword => keyword !== '');
  console.log(filteredKeywords);

  const jsonResponse = {
    user: chatInput1,
    responses: filteredKeywords,
  };

  console.log(JSON.stringify(jsonResponse, null, 2));
  return jsonResponse;
}
// [END aiplatform_gemini_multiturn_chat]

createStreamChat(...process.argv.slice(2)).catch(err => {
  console.error(err.message);
  process.exitCode = 1;
});