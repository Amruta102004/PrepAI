function ResultCard({ result }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    alert("Copied Successfully");
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 mt-8 text-white shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">
          Generated Questions
        </h2>

        <button
          onClick={copyToClipboard}
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
        >
            Copy
        </button>
      </div>

      <pre className="whitespace-pre-wrap leading-8 text-sm overflow-auto">
        {result}
      </pre>
    </div>
  );
}

export default ResultCard;