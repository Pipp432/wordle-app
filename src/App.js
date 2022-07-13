import React, { useEffect, useState } from "react";
import UserInput from "./component/UserInput";
import classes from "./App.module.css";

function App() {
	const [enteredWord, setEnteredWord] = useState("");
	const [correctInput, setCorrectInput] = useState(false);
	const correctWord = "crane";

	useEffect(() => {
		if (enteredWord.toLocaleLowerCase() === correctWord) {
			setCorrectInput(true);
		}
	}, [correctWord, enteredWord]);
	return (
		<React.Fragment>
			<div className={classes.title}>WORDLE</div>
			<UserInput setEnteredWord={setEnteredWord} correctInput={correctInput} />
		</React.Fragment>
	);
}

export default App;
