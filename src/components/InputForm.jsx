function InputForm({
  skill,
  setSkill,
  difficulty,
  setDifficulty,
  handleGenerate,
}) {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-xl">
      <div className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Enter Skill (Java, MERN, DBMS...)"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          className="bg-black/20 text-white px-4 py-3 rounded-lg outline-none border border-white/20"
        />

        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="bg-black/20 text-white px-4 py-3 rounded-lg outline-none border border-white/20"
        >
          <option className="text-black">Easy</option>
          <option className="text-black">Medium</option>
          <option className="text-black">Hard</option>
        </select>

        <button
          onClick={handleGenerate}
          className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white py-3 rounded-lg font-semibold"
        >
          Generate Questions
        </button>
      </div>
    </div>
  );
}
export default InputForm;