import React, { useState } from 'react';

export default function Quiz1() {
	const questions = [
		{
			questionString: 'What is the capital of France?',
			possibleAnswers: [
				{ answerString: 'New York', isCorrect: false, answerDetails: 'some text1' },
				{ answerString: 'London', isCorrect: false, answerDetails: 'some text 2'},
				{ answerString: 'Paris', isCorrect: true, answerDetails: 'some text 3'},
				{ answerString: 'Dublin', isCorrect: false, answerDetails: 'some text 4'},
			],
		},
		{
			questionString: 'Who is CEO of Tesla?',
			possibleAnswers: [
				{ answerString: 'Jeff Bezos', isCorrect: false, answerDetails: 'some text 5'},
				{ answerString: 'Elon Musk', isCorrect: true, answerDetails: 'some text 6'},
				{ answerString: 'Bill Gates', isCorrect: false, answerDetails: 'some text 7'},
				{ answerString: 'Tony Stark', isCorrect: false, answerDetails: 'some text 8'},
			],
		},
		{
			questionString: 'The iPhone was created by which company?',
			possibleAnswers: [
				{ answerString: 'Apple', isCorrect: true, answerDetails: 'some text 9'},
				{ answerString: 'Intel', isCorrect: false, answerDetails: 'some text 10'},
				{ answerString: 'Amazon', isCorrect: false, answerDetails: 'some text 11'},
				{ answerString: 'Microsoft', isCorrect: false, answerDetails: 'some text 12'},
			],
		},
		{
			questionString: 'How many Harry Potter books are there?',
			possibleAnswers: [
				{ answerString: '1', isCorrect: false, answerDetails: 'some text 13'},
				{ answerString: '4', isCorrect: false, answerDetails: 'some text 14'},
				{ answerString: '6', isCorrect: false, answerDetails: 'some text 15'},
				{ answerString: '7', isCorrect: true, answerDetails: 'some text 16'},
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);

	const [showScore, setShowScore] = useState(false);

	const [score, setScore] = useState(0);

	const [isToggled, setToggled] = useState(false);

	const [showingDetails, setShowingDetails] = useState(false);


	const handleNextButtonClick = () => {
		const nextQuestion = currentQuestion + 1;
		if (isToggled === true) {
			setScore(score + 1);
		}
		if(nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
		setToggled(false);
		setShowingDetails(false);
	}

	const handleAnswerButtonClick = (isCorrect) => {
		if(isCorrect===true){
			setToggled(true);
		} else {
			setToggled(false);			
		}
	}

	const handleResetButtonClick = () => {	
			setCurrentQuestion(0);
			setScore(0);
			setToggled(false);
			setShowingDetails(false);
			setShowScore(false);		
	}
		

	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}
					<button onClick={handleResetButtonClick}>
						Reset
					</button>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>{currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-string'>{questions[currentQuestion].questionString}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].possibleAnswers.map((possibleAnswers) => (
							<button key={possibleAnswers.answerString} onClick={() => handleAnswerButtonClick(possibleAnswers.isCorrect) }>
								{possibleAnswers.answerString}</button>
						))}
					</div>
						<div>
							<button onClick={handleNextButtonClick}>
								Next
							</button>
						</div>
							<div className="answers">
								<button onClick={() => setShowingDetails({ showingDetails: !showingDetails })}>View Answers</button>
								{questions[currentQuestion].possibleAnswers.map((possibleAnswers) => (
								<div key={possibleAnswers.answerDetails}>
								{ showingDetails
									? <div>{possibleAnswers.answerDetails}</div>
									: null
								}
								</div>
								))}	
							</div>
				</>				
			)}
		</div>
	);
}
