import React, { Component } from 'react';
import './udemy-theme.css'; // Import the custom Udemy-themed CSS

class Recommend extends Component {
  constructor() {
    super();
    this.state = {
      questions: [
        { id: 1, text: 'Do you enjoy public speaking?', domain: 'Public Speaking' },
        { id: 2, text: 'Have you given speeches in public before?', domain: 'Public Speaking' },
        { id: 3, text: 'Are you comfortable speaking in front of large audiences?', domain: 'Public Speaking' },
        { id: 4, text: 'Do you exercise regularly?', domain: 'Physical Health' },
        { id: 5, text: 'Do you follow a balanced diet?', domain: 'Physical Health' },
        { id: 6, text: 'Have you participated in any sports or fitness activities?', domain: 'Physical Health' },
        { id: 7, text: 'Do you enjoy reading books?', domain: 'Literature' },
        { id: 8, text: 'Have you written any poetry or stories?', domain: 'Literature' },
        { id: 9, text: 'Do you analyze literature in your free time?', domain: 'Literature' },
        { id: 10, text: 'Do you like giving presentations?', domain: 'Communication Skills' },
        { id: 11, text: 'Have you worked on improving your public speaking skills?', domain: 'Communication Skills' },
        { id: 12, text: 'Do you enjoy debates or discussions?', domain: 'Communication Skills' },
        { id: 13, text: 'Do you enjoy writing content?', domain: 'Content Writing' },
        { id: 14, text: 'Have you published any articles or blogs?', domain: 'Content Writing' },
        { id: 15, text: 'Do you know about SEO and keyword optimization?', domain: 'Content Writing' },
        { id: 16, text: 'Do you have any artistic hobbies?', domain: 'Hobbies' },
        { id: 17, text: 'Have you created any digital art or illustrations?', domain: 'Hobbies' },
        { id: 18, text: 'Have you ever sculpted with clay or other materials?', domain: 'Hobbies' },
      ],
      answers: {},
      submitted: false,
      recommendedSkill: null,
    };
  }

  handleAnswerChange = (questionId, answer) => {
    this.setState(prevState => ({
      answers: {
        ...prevState.answers,
        [questionId]: answer,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const recommendedSkill = this.recommendSkill();
    this.setState({ submitted: true, recommendedSkill });
  };

  recommendSkill = () => {
    const domainScores = {};

    // Initialize domain scores
    for (const question of this.state.questions) {
      const domain = question.domain;
      domainScores[domain] = 0;
    }

    for (const question of this.state.questions) {
      const domain = question.domain;
      const answer = this.state.answers[question.id];

      if (answer === 'Yes') {
        domainScores[domain]++;
      }
    }

    let recommendedSkill = null;
    let maxScore = 0;

    // Find the domain with the highest score
    for (const domain in domainScores) {
      if (domainScores[domain] > maxScore) {
        maxScore = domainScores[domain];
        recommendedSkill = domain;
      }
    }

    return recommendedSkill;
  };

  render() {
    const { submitted, recommendedSkill } = this.state;

    return (
      <div className="weird-unique-1"> {/* Apply the unique class name for the background color */}
        <div className="container weird-unique-2"> {/* Apply unique class names for the container */}
          <h1 className="weird-unique-3">Find Your Skill</h1> {/* Apply unique class name for the heading */}
          <form onSubmit={this.handleSubmit}>
            {this.state.questions.map(question => (
              <div key={question.id}>
                <p className="weird-unique-4">{question.text}</p> {/* Apply unique class name for question text */}
                <label>
                  <input
                    type="radio"
                    name={`answer-${question.id}`}
                    value="Yes"
                    onChange={() => this.handleAnswerChange(question.id, 'Yes')}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name={`answer-${question.id}`}
                    value="No"
                    onChange={() => this.handleAnswerChange(question.id, 'No')}
                  />
                  No
                </label>
              </div>
            ))}
            <button type="submit" className="weird-unique-6 btn btn-lg btn-dark">Submit</button> {/* Apply unique class name for the submit button */}
          </form>
          <div>{submitted && (
            <p className="weird-unique-7">Recommended Courses: {recommendedSkill}</p> /* Apply unique class name for the result message */
          )}</div>
          <footer className="weird-unique-8">
          </footer>
        </div>
      </div>
    );
  }
}

export default Recommend;