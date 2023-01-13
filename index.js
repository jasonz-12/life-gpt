// const functions = require("firebase-functions");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const axios = require("axios");
const gpt3ApiCall = require("firebase-functions");

exports.gpt3ApiCall = (req, res) => {
  const {userInput} = req.body;
  axios.post("https://api.openai.com/v1/engines/davinci/completions",
      {prompt: userInput,
        max_tokens: 2048,
        api_key: "aoRXAQMJO7MNxJy7VzSZT3BlbkFJFvXIRHFgeN7nccCL2y33"})
      .then((response)=>{
        res.status(200).send(response.data);
      })
      .catch((error)=>{
        res.status(500).send(error);
      });
  gpt3ApiCall.logger.info(userInput);
};
