import Board from "./components/Board";


function App() {
  return (
    <>
      <div className="App">
        <h1>Tetris</h1>
        <Board currentBoard={board} />
      </div>
    </>
  );
}

export default App;
