https://drive.google.com/file/d/1J1PzSOBj1TPFQRGWyG3kNv6pE2X9W0SM/view?usp=sharing

Code explanations



# Student Management System

Student Management System is a CRUD-based web application developed using Node.js, Express.js, EJS, and MongoDB. The project helps manage student records efficiently through a simple and user-friendly interface.

Users can add new students, view all records, update existing information, and remove student data whenever required.

---

## Technologies Used

- Node.js
- Express.js
- EJS
- MongoDB
- Mongoose
- CSS3

---

## Features

- Add Student
- View Student Records
- Update Student Information
- Delete Student Records
- MongoDB Database Integration
- Responsive Interface
- Dynamic Data Rendering with EJS

---

## Modules Included

### Student Registration
Allows users to add new student details.

### Student List
Displays all student records stored in the database.

### Edit Student
Update student information whenever required.

### Delete Student
Remove records permanently from the database.

---

## Project Structure

```bash
Node-Pr-4-main
│
├── config
│   └── db.js
│
├── models
│   └── Student.js
│
├── public
│   └── css
│
├── views
│   ├── add-student.ejs
│   ├── edit-student.ejs
│   ├── students.ejs
│   └── index.ejs
│
├── index.js
├── package.json
└── package-lock.json
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Meetpatel0264/Node-Pr-4
```

### Open Project Folder

```bash
cd Node-Pr-4-main
```

### Install Dependencies

```bash
npm install
```

### Start Application

```bash
node index.js
```

or

```bash
npm start
```

### Open Browser

```bash
http://localhost:3000
```

---

## Database Setup

Make sure MongoDB is installed and running on your system.

Connection URL:

```javascript
mongodb://127.0.0.1:27017/studentDB
```

After starting MongoDB and the application, student records will be stored automatically in the database.

---

## What I Learned

This project helped me understand:

- Express Routing
- CRUD Operations
- MongoDB Integration
- Mongoose Models
- Form Handling
- Server Side Rendering
- Database Connectivity

---

## Future Improvements

- Search Students
- Student Profile Images
- Authentication System
- Dashboard Analytics
- Pagination
- Export Student Data

---

## Developer

meet Patel

Full Stack Developer interested in building practical web applications and improving backend development skills.

GitHub: https://github.com/meetpatel0264

---

This project was developed for learning and practicing Node.js, Express.js, EJS, and MongoDB concepts.
