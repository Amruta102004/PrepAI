import axios from "axios";

const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

export async function generateInterviewQuestions(
  skill,
  difficulty
) {
  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",

        messages: [
          {
            role: "user",
            content: `
Generate 5 ${difficulty} level interview questions with answers for ${skill}.
`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content;

  } catch (error) {
    console.log(error);

    return "API Error";
  }
}