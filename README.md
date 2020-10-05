#  Hospital API

Features of the app
        ● This is a design of an API for the doctors of a Hospital which has been
          allocated by the govt for testing and quarantine + well being of COVID-19
          patients
                There can be 2 types of Users
                - Doctors
                - Patients
                - Doctors can log in
                - Each time a patient visits, the doctor will follow 2 steps
                - Register the patient in the app (using phone number, if the patient
                  already exists, just return the patient info in the API)
                - After the checkup, create a Report
                - Patient Report will have the following fields
                - Created by doctor
                - Status
                - Can be either of: [Negative, Travelled-Quarantine,
                             Symptoms-Quarantine, Positive-Admit]
                - Date


# Technologies Used

1.  Nodejs
2.  Express
3.  MongoDB for database

# Prerequisites

- MongoDB
- Node.js 10+
- Command Line Tools
- Robo 3T
- Visual Studio Code

# INSTALLATION

        1)npm init
        2)npm insatll express
        3)npm install mongoose
        4)npm install dotenv
        5)npm install jsonwebtoken
        6)npm install nodemon
        7)npm install passport
        8)npm install passport-jwt
        
# npm start to run the code.

# The Server should running at: http://localhost:2000/

# FOLDER STRUCTURE:

1. Config
     Connect to Mongodb.
        a)mongoose.js
        b)passport-jwt-strategy.js

2. Controllers
        a) doctors_controller.js
        b) patients_controller.js
        c) reports_controller.js
  
3. Models:

        Schema of :
        a) doctor
        b) patient
        c) report

4. routes
        -> api
              -> v1

            Request from browser to server controls through this folder.
            /doctors/register → with username and password
            - /doctors/login → returns the JWT to be used
            - /patients/register
            - /patients/:id/create_report
            - /patients/:id/all_reports → List all the reports of a patient oldest to latest
            - /reports/:status → List all the reports of all the patients filtered by a specific
            status





