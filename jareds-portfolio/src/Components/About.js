import React from 'react'
import '../css/About.css';
function About({ handlePageChange }) {
    const headerIcon = '</>';
    return (
        <div className="overlay">
        <div className="jumbotron">
            <h1 className="display-4">Web Dev {headerIcon}</h1>
            <p className="lead">Welcome! My name is Jared Colletti, a web developer with a strong passion for coding. I began a
                self-study
                path to equip myself with the fundementals of HTML, CSS and JavaScript. I am currently attending the
                University of Pennsylvannia's full-time coding bootcamp where I am sharpening my skills and learning
                new ones!
                <p>Skills: HTML5, CSS, JavaScript, GitBash, JQuery, Node, Express, MySQL</p>
            </p>
            <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button" onClick={() => handlePageChange('Portfolio')} id="exploreBtn">Explore</a>
            </p>
        </div>
        </div>
    )
}

export default About
