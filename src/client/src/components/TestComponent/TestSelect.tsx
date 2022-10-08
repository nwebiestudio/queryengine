function TestSelect() {
  return (
    <div className="flex mx-auto mt-3 py-3 px-4 border-2 border-purple-800 hover:bg-green-100 cursor-pointer fontAnswer w-[70%] rounded-xl">
      <input type="radio" name="test" className="mr-3 cursor-pointer" />
      <p>Первый ответ</p>
    </div>
  );
}

export default TestSelect;
