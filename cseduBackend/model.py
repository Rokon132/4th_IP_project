
from pydantic import BaseModel, EmailStr, constr

class UserRegistration(BaseModel):
    username: constr(min_length=3, max_length=50)
    email: EmailStr
    password: constr(min_length=4)
    role: constr(min_length=3, max_length=20)



class StudentRegistration(BaseModel):
        name: constr(min_length=1, max_length=100)
        email: EmailStr
        student_id: constr(min_length=1, max_length=20)
        dob: constr(min_length=4, max_length=20)
        current_year: constr(min_length=1, max_length=10)
        program: constr(min_length=1, max_length=100)
        profile_image: str = ""
        bio: str = ""

class FacultyRegistration(BaseModel):
    name: constr(min_length=1, max_length=100)
    email: EmailStr
    faculty_id: constr(min_length=1, max_length=20)
    title: constr(min_length=1, max_length=50)
    department: constr(min_length=1, max_length=50)
    profile_image: str = ""
    bio: str = ""
    phone: constr(min_length=10, max_length=15) = ""
    office_location: str = ""