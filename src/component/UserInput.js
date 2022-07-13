import { useEffect, useRef, useState } from "react";
import Card from "../UI/Card";
import classes from "./UserInput.module.css";
const UserInput = (props) => {
	const [index, setIndex] = useState(2);
	const [inputWord, setInputWord] = useState("");
	const [inputClass, setInputClass] = useState(classes.userInput);
	useEffect(() => {
		props.setEnteredWord(inputWord);
	});

	const currentInput = useRef(document.getElementById("box1"));
	const inputChangeHandler = (event) => {
		// console.log("input called");

		if (event.target.value.trim().length > 0) {
			event.target.className = classes.userInputEntered;
			event.target.disabled = true;
			setInputWord(inputWord.concat(event.target.value));

			onBlurHandler();

			// setInputClass(classes.userInputEntered);
			// setDisableInput(true);
		}
		if (event.target.value === " ") event.target.value = "";
	};

	const onBlurHandler = () => {
		// console.log("blur called");
		if (index > 5) return;

		console.log(index);

		currentInput.current = document.getElementById(`box${index}`);
		currentInput.current.focus();
		setIndex(index + 1);
	};
	const submitHandler = (event) => {
		if (props.correctInput) {
			setInputClass(classes.userInputEnteredCorrect);
			console.log("Correct!");
		} else {
			setInputClass(classes.userInputEnteredIncorrect);
			console.log("??");
		}
	};

	const keyPressHandler = (event) => {
		// console.log("del called");
		if (event.key === "Backspace") {
			const prev = index - 2;
			setIndex(index - 1);

			if (prev < 1 || index <= 1) return;
			console.log(currentInput.current.className);

			currentInput.current = document.getElementById(`box${prev}`);
			currentInput.current.className = classes.userInput;
			if (`box${prev}` !== "box5") currentInput.current.disabled = false;
			currentInput.current.focus();
		}
	};
	return (
		<Card>
			<input
				type='text'
				className={inputClass}
				maxLength='1'
				onChange={inputChangeHandler}
				id='box1'
				ref={currentInput}
				onKeyDown={keyPressHandler}
			/>
			<input
				type='text'
				className={inputClass}
				maxLength='1'
				onChange={inputChangeHandler}
				id='box2'
				ref={currentInput}
				onKeyDown={keyPressHandler}
			/>
			<input
				type='text'
				className={inputClass}
				maxLength='1'
				onChange={inputChangeHandler}
				id='box3'
				ref={currentInput}
				onKeyDown={keyPressHandler}
			/>
			<input
				type='text'
				className={inputClass}
				maxLength='1'
				onChange={inputChangeHandler}
				id='box4'
				ref={currentInput}
				onKeyDown={keyPressHandler}
			/>
			<input
				type='text'
				className={inputClass}
				maxLength='1'
				onChange={inputChangeHandler}
				id='box5'
				ref={currentInput}
				onKeyDown={keyPressHandler}
			/>
			<button onClick={submitHandler}>ENTER</button>
		</Card>
	);
};
export default UserInput;
