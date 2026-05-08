import { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import ResultCard from "./components/ResultCard";
import Loader from "./components/Loader";
import { generateInterviewQuestions } from "./services/gemini";

function App() {
  const [skill, setSkill] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!skill) {
      alert("Please enter skill");
      return;
    }

    setLoading(true);

    const data = await generateInterviewQuestions(
      skill,
      difficulty
    );

    setResult(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 flex justify-center items-center p-5">
      <div className="w-full max-w-4xl">
        <Header />

        <InputForm
          skill={skill}
          setSkill={setSkill}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          handleGenerate={handleGenerate}
        />

        {loading && <Loader />}

        {result && !loading && (
          <ResultCard result={result} />
        )}
      </div>
    </div>
  );
}
export default App;