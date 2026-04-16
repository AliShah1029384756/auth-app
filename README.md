# 🚀 Node.js Authentication App

---

## 📌 Project Overview

This project is a **Node.js + Express Authentication System** that provides **Signup and Login functionality**.
It includes **automated testing using Mocha & Chai** and is integrated with a **Jenkins CI/CD pipeline** to ensure continuous testing and reliability.

---

## 👨‍💻 Author

* **Name:** Syed Muhammad Ali Naqvi
* **Submission Date:** April 2026

---

## 🛠️ Tech Stack

* Node.js
* Express
* bcryptjs
* EJS
* Mocha
* Chai
* Supertest
* Jenkins

---

# ▶️ How to Run the Application

## 1️⃣ Install Dependencies

```bash
npm install
```

## 2️⃣ Start Application

```bash
npm start
```

👉 Open in browser:

```
http://localhost:3000
```

---

# 🧪 Testing

## 🔹 Run All Tests

```bash
npm test
```

## 🔹 Run Unit Tests Only

```bash
npm run test:unit
```

## 🔹 Run Integration Tests Only

```bash
npm run test:integration
```

---

# 📊 Test Report (HTML)

## 🔹 Generate Report

```bash
npm run test:report
```

## 🔹 View Report

Open:

```
mochawesome-report/mochawesome.html
```

👉 This report includes:

* Total test cases
* Pass/Fail status
* Execution time
* Detailed breakdown

---

# 📈 Test Summary

| Type              | Count | Status |
| ----------------- | ----- | ------ |
| Unit Tests        | 19    | ✅ Pass |
| Integration Tests | 20    | ✅ Pass |
| **Total**         | 39    | ✅ Pass |

---

# 🔄 Jenkins CI/CD Setup & Execution Guide

## 📌 Overview

Jenkins is used to automate the testing workflow of this project.
It performs:

* Dependency installation
* Unit testing
* Integration testing
* Report generation

---

# ⚙️ Prerequisites

## ✔ Check Java Installation

```bash
java -version
```

👉 If not installed, install **JDK 11 or 17**

---

# 🚀 Running Jenkins (Your Setup)

## 🔹 Step 1: Navigate to Jenkins Folder

```bash
cd "C:\Program Files\Jenkins"
```

👉 (Path may differ depending on installation location)

---

## 🔹 Step 2: Verify Files

```bash
dir
```

👉 Ensure:

```
jenkins.war
```

---

## 🔹 Step 3: Start Jenkins

```bash
java -jar jenkins.war
```

👉 Wait for:

```
Jenkins is fully up and running
```

---

## 🔹 Step 4: Open in Browser

```
http://localhost:8080
```

---

## 🔹 Step 5: Initial Setup

* Unlock Jenkins using password from terminal
* Install suggested plugins
* Create admin user

---

# 🔌 Required Plugins

Go to **Manage Jenkins → Plugins**

Install:

* NodeJS Plugin
* HTML Publisher Plugin
* Git Plugin

---

# 🧰 Configure Node.js

Go to:
**Manage Jenkins → Tools**

* Add Node.js
* Name: `NodeJS`
* Version: 18
* Enable Auto Install

---

# 🏗️ Pipeline Configuration

## 🔹 Create Pipeline Job

* Dashboard → New Item
* Enter name: `auth-app-pipeline`
* Select **Pipeline**

---

## 🔹 Pipeline Script (Windows)

```groovy
pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Unit Tests') {
            steps {
                bat 'npm run test:unit'
            }
        }

        stage('Run Integration Tests') {
            steps {
                bat 'npm run test:integration'
            }
        }

        stage('Generate Reports') {
            steps {
                bat 'npm run test:report'
            }
        }
    }

    post {
        success {
            echo 'Build Successful'
        }
        failure {
            echo 'Build Failed'
        }
    }
}
```

---

# ▶️ Run Pipeline

* Click **Build Now**
* Open **Console Output**

👉 Expected:

```
Finished: SUCCESS
```

---

# 📊 Jenkins Output Explanation

* Dependencies installed ✔
* Unit tests executed ✔
* Integration tests executed ✔
* HTML report generated ✔

---

# ⚠️ Common Errors & Fixes

## ❌ java not recognized

👉 Install Java and set PATH

## ❌ jenkins.war not found

👉 Use correct folder and check using:

```bash
dir
```

## ❌ sh not recognized

👉 Use `bat` instead (Windows users)

---

# 🎯 Viva Preparation

## ❓ Why Jenkins?

👉 To automate testing and implement CI/CD

## ❓ What is CI/CD?

👉 Continuous Integration and Continuous Delivery — automatic build and test process

## ❓ Why Mocha & Chai?

👉 Mocha is test runner, Chai is assertion library

## ❓ What is POM?

👉 Page Object Model — improves code reusability and maintainability

---

# 💡 Key Features

* User Signup & Login system
* Secure password hashing
* Input validation
* Unit & Integration Testing
* Page Object Model (POM)
* Automated CI/CD pipeline
* HTML test reports

---

# 📚 Learning Outcomes

* Built scalable testing architecture
* Implemented automation testing
* Applied POM design pattern
* Integrated Jenkins CI/CD pipeline
* Generated professional reports

---

# 📎 Submission Includes

* ✅ Source Code
* ✅ Test Cases
* ✅ HTML Report
* ✅ Jenkins Pipeline
* ✅ Demo Video

---

# ✅ Conclusion

This project demonstrates a complete workflow of building, testing, and automating a Node.js application using modern tools and CI/CD practices.
