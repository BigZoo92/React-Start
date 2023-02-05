import { useState } from "react";

function QuestionForm() {
const [inputValue, setInputValue] = useState('')
  return (
    <form>
      <input type="email"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
    </form>
  );
}

export default QuestionForm;
