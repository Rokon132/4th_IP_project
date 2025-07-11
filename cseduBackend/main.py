# filepath: cseduBackend/main.py

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr, constr
from passlib.hash import bcrypt
from datetime import datetime
import mysql.connector # Ensure you have mysql-connector-python installed


from fastapi.middleware.cors import CORSMiddleware
from pydantic import Field

from model import UserRegistration# Assuming UserRegistration is defined in model.py
from model import StudentRegistration # Assuming StudentRegistration is defined in model.py
from model import FacultyRegistration # Assuming FacultyRegistration is defined in model.py



# FastAPI application instance
app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or specify ["http://localhost:5173"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)





# MySQL connection config (adjust as needed)
db_config = {
    "host": "localhost",
    "user": "root",
    "password": "123456",
    "database": "csedu_db"
}





# class UserRegistration(BaseModel):
#     username: constr(min_length=3, max_length=50)
#     email: EmailStr
#     password: constr(min_length=4)
#     role: constr(min_length=3, max_length=20)

@app.post("/register")
def register_user(user: UserRegistration):
    # Hash the password
    password_hash = bcrypt.hash(user.password)
    try:
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor()
        # Insert user into database
        cursor.execute("""
            INSERT INTO users (username, email, password_hash, role, created_at, updated_at)
            VALUES (%s, %s, %s, %s, %s, %s)
        """, (
            user.username,
            user.email,
            password_hash,
            user.role,
            datetime.now(),
            datetime.now()
        ))
        conn.commit()
        user_id = cursor.lastrowid
        cursor.close()
        conn.close()
        return {"message": "User registered successfully!", "user_id": user_id}
    except mysql.connector.IntegrityError as e:
        raise HTTPException(status_code=400, detail="Username or email already exists.")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))



@app.get("/home")
def home():
    return {"message": "This is the home endpoint of CSEDU Backend!"} 


# @app.get("/")
# def read_root():
#     return {"message": "Welcome to CSEDU Backend!"}


@app.post("/register-student")
def register_student(student: StudentRegistration):
    try:
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO students (name, email, student_id, dob, current_year, program, profile_image, bio)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
        """, (
            student.name,
            student.email,
            student.student_id,
            student.dob,
            student.current_year,
            student.program,
            student.profile_image,
            student.bio
        ))
        conn.commit()
        student_db_id = cursor.lastrowid
        cursor.close()
        conn.close()
        return {"message": "Student registered successfully!", "student_id": student_db_id}
    except mysql.connector.IntegrityError:
        raise HTTPException(status_code=400, detail="Student with this email or student_id already exists.")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))





@app.post("/register-faculty")
def register_faculty(faculty: FacultyRegistration):
    try:
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO faculty (name, email, faculty_id, title, department, profile_image, bio, phone, office_location)
            VALUES (%s, %s , %s, %s, %s, %s, %s, %s, %s)
        """, (
            faculty.name,
            faculty.email,
            faculty.faculty_id,
            faculty.title,
            faculty.department,
            faculty.profile_image,
            faculty.bio,
            faculty.phone,
            faculty.office_location
        ))
        conn.commit()
        faculty_db_id = cursor.lastrowid
        cursor.close()
        conn.close()
        return {"message": "Faculty registered successfully!", "faculty_id": faculty_db_id}
    except mysql.connector.IntegrityError:
        raise HTTPException(status_code=400, detail="Faculty with this ID already exists.")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))