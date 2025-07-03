function DropDown({ color, setColor }) {
  return (
    <div>
      <h1 className="m-2.5">Select Clock Color 🎨</h1>
      <select
        name=""
        id=""
        value={color}
        onChange={(event) => {
          setColor(event.target.value);
        }}
        className="border-2 border-gray-300 rounded-md p-2 bg-slate-900 m-2.5"
      >
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="purple">Purple</option>
        <option value="orange">Orange</option>
        <option value="red">Red</option>
        <option value="white">White</option>
      </select>
    </div>
  );
}
export default DropDown;
