// src/pages/QuizPage.js
import React, { useState } from 'react';
import bgImage from '../bg2.jpg';
const QuizPage = () => {
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    let tempScore = 0;
    const formData = new FormData(event.target);
    formData.forEach((value, key) => {
      if (key === 'question1' && value === 'React') tempScore += 1;
      if (key === 'question2' && value === 'JavaScript') tempScore += 1;
      if (key === 'question3' && value === 'Node.js') tempScore += 1;
      if (key === 'question4' && value === 'Components') tempScore += 1;
      if (key === 'question5' && value === 'JSX') tempScore += 1;
      if (key === 'question6' && value === 'Virtual DOM') tempScore += 1;
      if (key === 'question7' && value === 'Props') tempScore += 1;
      if (key === 'question8' && value === 'State') tempScore += 1;
      if (key === 'question9' && value === 'useEffect') tempScore += 1;
      if (key === 'question10' && value === 'Hooks') tempScore += 1;
    });
    setScore(tempScore);
    setSubmitted(true);
  };

  return (
    <div
      className="container mt-4 text-white-shadow"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '20px',
        borderRadius: '8px',
        color: 'black' 
      }}
    >
      <h2>Course Quiz</h2>
      {submitted ? (
        <h3>Your Score: {score}/10</h3>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>1. What is used to build user interfaces?</label>
            <select name="question1" className="form-control">
              <option value="HTML">HTML</option>
              <option value="React">React</option>
              <option value="CSS">CSS</option>
            </select>
          </div>
          <div className="form-group">
            <label>2. What language is React built with?</label>
            <select name="question2" className="form-control">
              <option value="Python">Python</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Ruby">Ruby</option>
            </select>
          </div>
          <div className="form-group">
            <label>3. What is used to run JavaScript on the server?</label>
            <select name="question3" className="form-control">
              <option value="PHP">PHP</option>
              <option value="Node.js">Node.js</option>
              <option value="Django">Django</option>
            </select>
          </div>
          <div className="form-group">
            <label>4. What are reusable pieces of UI in React called?</label>
            <select name="question4" className="form-control">
              <option value="Modules">Modules</option>
              <option value="Functions">Functions</option>
              <option value="Components">Components</option>
            </select>
          </div>
          <div className="form-group">
            <label>5. What syntax is used to write HTML in React?</label>
            <select name="question5" className="form-control">
              <option value="JSX">JSX</option>
              <option value="HAML">HAML</option>
              <option value="Pug">Pug</option>
            </select>
          </div>
          <div className="form-group">
            <label>6. What does React use to improve performance by minimizing DOM updates?</label>
            <select name="question6" className="form-control">
              <option value="Real DOM">Real DOM</option>
              <option value="Shadow DOM">Shadow DOM</option>
              <option value="Virtual DOM">Virtual DOM</option>
            </select>
          </div>
          <div className="form-group">
            <label>7. How do you pass data from a parent component to a child component in React?</label>
            <select name="question7" className="form-control">
              <option value="State">State</option>
              <option value="Props">Props</option>
              <option value="Context">Context</option>
            </select>
          </div>
          <div className="form-group">
            <label>8. What is used to manage data within a component in React?</label>
            <select name="question8" className="form-control">
              <option value="Props">Props</option>
              <option value="State">State</option>
              <option value="Hooks">Hooks</option>
            </select>
          </div>
          <div className="form-group">
            <label>9. Which React hook is used for performing side effects?</label>
            <select name="question9" className="form-control">
              <option value="useContext">useContext</option>
              <option value="useEffect">useEffect</option>
              <option value="useState">useState</option>
            </select>
          </div>
          <div className="form-group">
            <label>10. What feature of React allows you to use state and other React features without writing a class?</label>
            <select name="question10" className="form-control">
              <option value="Lifecycle Methods">Lifecycle Methods</option>
              <option value="Mixins">Mixins</option>
              <option value="Hooks">Hooks</option>
            </select>
          </div>
          <button type="submit" className="btn btn-custom mt-3">Submit</button>
        </form>
      )}
    </div>
  );
};

export default QuizPage;
