import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Welcome() {

    return (
      <div className="Welcome">
        <header className="Welcome-header">
          <h1>Magic The Gathering Color Quiz</h1>
          <p>
          Welcome! This is a Magic The Gathering Color quiz made with HTML, CSS, and JavaScript. Users will be able to answer the following questions that will determine what color is best suited to their play style. Though this may not be 100% accurate, please enjoy!
          </p>
          <a
            className="Quiz-link"
            href="https://reactjs.org"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }