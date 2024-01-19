const { GoogleAuth } = require('google-auth-library');
//const { PredictionServiceClient } = require('@google-cloud/aiplatform').v1;
const { v1: { PredictionServiceClient } } = require('@google-cloud/aiplatform')
const { helpers } = require('@google-cloud/aiplatform');

async function callPredict() {
  // Automatically discover and load the application default credentials
  const auth = new GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
  });
  const authClient = await auth.getClient();
  console.log(authClient);
  console.log('test');
  // Your project and model information
  const project = 'keyloud';
  const location = 'global';
  const publisher = 'google';
  const model = 'text-bison@001';

  // Specify the location of the API endpoint
  const clientOptions = {
    apiEndpoint: 'us-central1-aiplatform.googleapis.com',
  };

  console.log('test2');
  // Instantiate the PredictionServiceClient with ADC
  const predictionServiceClient = new PredictionServiceClient({
    clientOptions,
    auth: authClient,
  });
  console.log('test3');
  // Configure the parent resource
  const endpoint = `projects/${project}/locations/${location}/publishers/${publisher}/models/${model}`;
  console.log('test4');
  //const prompt = {
  //  prompt: 'Give me ten interview questions for the role of program manager.',
  //};
  const content="test";
  const prompt = "Extract key keywords or phrases from the following text: ${content}"
  console.log(prompt);
  prompt = prompt+"1. Identify and list the most important keywords or key phrases in the text. These keywords should capture the main topics, concepts, or subjects discussed in the text. 2. If there are subtopics or secondary themes mentioned in the text, list them as well. Ensure that the extracted keywords accurately represent the content's context. 3. Include the exact text span or sentence where each keyword or phrase is found in the original text. 4. If there are any ambiguous keywords or phrases, indicate the uncertainty and provide possible interpretations or context that might clarify the intended meaning. 5. Consider the context, relevance, and frequency of the keywords when determining their significance. 6. If the text suggests any actions, decisions, or recommendations related to the extracted keywords, provide a brief summary of these insights."
  console.log('test5');
  const instanceValue = helpers.toValue(prompt);
  const instances = [instanceValue];
  console.log('test6');

  const parameter = {
    temperature: 0.2,
    maxOutputTokens: 256,
    topP: 0.95,
    topK: 40,
  };
  const parameters = helpers.toValue(parameter);

  console.log('test7');
  const request = {
    endpoint,
    instances,
    parameters,
  };

  // Predict request
  const response = await predictionServiceClient.predict(request);
  console.log('test8');
  console.log('Get text prompt response');
  console.log(response);
}

callPredict().catch(console.error);
