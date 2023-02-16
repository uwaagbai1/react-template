import React from 'react';
import logo from './logo.svg';
import './App.scss';

export const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    React Template -{' '}
                    <a
                        className="App-link"
                        href="https://github.com/Matteas-Eden/react-template"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Get it here!
                    </a>
                </p>
                <div style={{ textAlign: 'left' }}>
                    <ul>
                        <li>ESLint for styling source files</li>
                        <li>Prettier for styling the rest</li>
                        <li>Husky for on-commit linting</li>
                        <li>GitHub Pages Deployment</li>
                    </ul>
                </div>
            </header>
        </div>
    );
};
