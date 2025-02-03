import "./App.css";
import Button from "./components/Button";

function App() {
  const handleClick = (id: number) => {
    console.log(id);
  };

  return (
    <div className="grid grid-cols-3 gap-16">
      <Button
        text="bad"
        id={1}
        className="w-48 h-24 rounded-lg bg-red-300 uppercase hover:bg-red-500 cursor-pointer duration-300 ease-in-out"
        onClick={handleClick}
      />
      <Button
        text="meh"
        id={2}
        className="w-48 h-24 rounded-lg bg-yellow-300 uppercase hover:bg-yellow-500 cursor-pointer duration-300 ease-in-out"
        onClick={handleClick}
      />
      <Button
        text="good"
        id={3}
        className="w-48 h-24 rounded-lg bg-green-300 uppercase hover:bg-green-500 cursor-pointer duration-300 ease-in-out"
        onClick={handleClick}
      />
    </div>
  );
}

export default App;
