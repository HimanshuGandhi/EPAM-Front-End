import React from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import grade from './images/grade.png';

function Header() {
  const today = new Date().toLocaleDateString();
  const professorName = 'Himanshu Gandhi';
  const college = 'Lovely University';
  const department = 'Computer Science';
  const semester = 'Final Semester';

  return (
    <header>
      <div className="header-left">
      { /* <FontAwesomeIcon icon="fa-solid fa-book-open" beat size="2xl" style={{color: "#511f2e",}} /> */}
      <img src={grade} alt="profile" className="profile"/>
      <h3>Grade Book</h3>
      </div>
      <div className="header-right">
        <p> Today's Date: {today}</p>
        <p> Professor: {professorName}</p>
        <p> College: {college}</p>
        <p> Department: {department}</p>
        <p> Semester: {semester}</p>
      </div>
    </header>
  );
}

export default Header;
