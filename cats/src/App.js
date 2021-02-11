import "./App.css";

const url = "https://cats-rock-api.herokuapp.com/cats";
let response = fetch(url);
if (response.ok) {
  let json = response.json();
  console.log(json);
  console.log("hi there");
}

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
