import React, { useState } from 'react';

function Recommend() {
  // Initialize pointers for each skill
  const [publicSpeakingPointer, setPublicSpeakingPointer] = useState(0);
  const [storytellingPointer, setStorytellingPointer] = useState(0);
  const [presentationMasterPointer, setPresentationMasterPointer] = useState(0);

  // Initialize state for user answers
  const [publicSpeakingAnswers, setPublicSpeakingAnswers] = useState([]);
  const [storytellingAnswers, setStorytellingAnswers] = useState([]);
  const [presentationMasterAnswers, setPresentationMasterAnswers] = useState([]);

  // Define questions for each skill
  const publicSpeakingQuestions = [
    "Do you enjoy speaking in front of a group?",
    "Have you received positive feedback on your speaking abilities?",
    "Are you comfortable with improvising during a speech?"
  ];

  const storytellingQuestions = [
    "Do you enjoy crafting and sharing stories?",
    "Do you often find yourself engaging in storytelling conversations?",
    "Have you received compliments on your storytelling skills?"
  ];

  const presentationMasterQuestions = [
    "Do you have experience creating visually engaging presentations?",
    "Have you received positive feedback on your presentation design?",
    "Are you confident in your ability to captivate an audience through presentations?"
  ];

  // Function to ask questions and update pointers and answers
  const askQuestions = (skillQuestions, skillPointerSetter, skillAnswerSetter) => {
    const answers = [];
    for (const question of skillQuestions) {
      const answer = window.prompt(question + " (yes/no): ").toLowerCase();
      answers.push(answer);
      if (answer === "yes") {
        skillPointerSetter((prevPointer) => prevPointer + 1);
      }
    }
    skillAnswerSetter(answers);
  };

  // Function to recommend a skill
  const recommendSkill = () => {
    askQuestions(publicSpeakingQuestions, setPublicSpeakingPointer, setPublicSpeakingAnswers);
    askQuestions(storytellingQuestions, setStorytellingPointer, setStorytellingAnswers);
    askQuestions(presentationMasterQuestions, setPresentationMasterPointer, setPresentationMasterAnswers);
  };

  // Display questions, answers, and recommendations in a div
  return (
    <div>
      <h1>Skill Recommendation</h1>
      <div>
        <button onClick={recommendSkill}>Get Recommendation</button>
      </div>
      <div>
        <h2>Public Speaking</h2>
        {publicSpeakingQuestions.map((question, index) => (
          <div key={index}>
            <p>{question}</p>
            <input
              type="text"
              value={publicSpeakingAnswers[index] || ''}
              readOnly
            />
          </div>
        ))}
      </div>
      <div>
        <h2>Storytelling</h2>
        {storytellingQuestions.map((question, index) => (
          <div key={index}>
            <p>{question}</p>
            <input
              type="text"
              value={storytellingAnswers[index] || ''}
              readOnly
            />
          </div>
        ))}
      </div>
      <div>
        <h2>Presentation Master</h2>
        {presentationMasterQuestions.map((question, index) => (
          <div key={index}>
            <p>{question}</p>
            <input
              type="text"
              value={presentationMasterAnswers[index] || ''}
              readOnly
            />
          </div>
        ))}
      </div>
      <div>
        <h2>Recommendation</h2>
        <p>Recommended Skill: {getRecommendedSkill()}</p>
      </div>
    </div>
  );
}

export default Recommend;
