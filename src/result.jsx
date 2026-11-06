function Result({ percentage }) {
  return (
    <div>
      <h2>Result</h2>
      <h1>{percentage.toFixed(2)}%</h1>
    </div>
  );
}

export default Result;