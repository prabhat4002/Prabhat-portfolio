import React from "react";
import Card from "react-bootstrap/Card";
import "../About/AboutCard.css"; // Custom CSS for refined styling

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        {/* EDUCATION SECTION */}
        <h3 className="section-title">
          <strong className="purple">Education</strong>
        </h3>
        <ul className="details-list">
          <li>
            <strong>Symbiosis Institute of Technology</strong>
            <br />
            Bachelor of Technology in Computer Science & Engineering
            <br />
            <i>Relevant Coursework:</i> Data Structures and Algorithms, Programming and Problem Solving, Object-Oriented Programming, Operating Systems
            <br />
            Pune, Maharashtra
            <br />
            <span className="year">2022 - Expected 2026</span>
          </li>
          <li>
            <strong>Kendriya Vidyalaya Ganeshkhind</strong>
            <br />
            CBSE (Class XII), Aggregate: 84.4%
            <br />
            Pune, Maharashtra
            <br />
            <span className="year">2021 - 2022</span>
          </li>
          <li>
            <strong>Kendriya Vidyalaya Ganeshkhind</strong>
            <br />
            CBSE (Class X), Aggregate: 84.2%
            <br />
            Pune, Maharashtra
            <br />
            <span className="year">2019 - 2020</span>
          </li>
        </ul>

        {/* PROJECTS SECTION */}
        <h3 className="section-title">
          <strong className="purple">Projects</strong>
        </h3>
        <ul className="details-list">
          <li>
            <strong>Travel Management System</strong>
            <br />
            Developed an integrated desktop application for tourists using Core Java (Swing & AWT). Implemented features for managing travel itineraries and bookings, and used MySQL for database management.
            <br />
            <i>Technologies Used:</i> Core Java (Swing & AWT)
            <br />
            <i>Database Used:</i> MySQL
            <br />
            <span className="year">May 2024</span>
          </li>
          <li>
            <strong>AttendRx-Face-Recognition-Attendance-System</strong>
            <br />
            Developed an automated attendance system for educational institutions using ESP32-CAM and face recognition technology. Designed core ESP32-CAM code (“AttendRx.ino”) for camera functionality and created a Python script (ESP32Cam.py) for data processing and face recognition.
            <br />
            <i>Technologies Used:</i> Python, Arduino IDE
            <br />
            <span className="year">Oct 2023</span>
          </li>
        </ul>

        {/* HACKATHONS AND CONTESTS SECTION */}
        <h3 className="section-title">
          <strong className="purple">Hackathons and Contests</strong>
        </h3>
        <ul className="details-list">
          <li>
            <strong>Flipkart GRID 5.0 - <a href="#">Software Development Track</a></strong>
            <br />
            Participated in the level II E-commerce and tech quiz of Flipkart GRID 5.0 - Software Development Track organized by Flipkart.
            <br />
            <span className="year">Aug 2023</span>
          </li>
          <li>
            <strong>Flipkart GRID 5.0 - <a href="#">Information Security Challenge</a></strong>
            <br />
            Participated in the level II E-commerce and tech quiz of Flipkart GRID 5.0 - Information Security Challenge organized by Flipkart.
            <br />
            <span className="year">Aug 2023</span>
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
