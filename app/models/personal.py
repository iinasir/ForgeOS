from typing import Optional

from pydantic import BaseModel, EmailStr


class PersonalInfo(BaseModel):
    full_name: str
    email: EmailStr
    phone: str

    location: Optional[str] = None

    linkedin: Optional[str] = None
    github: Optional[str] = None
    portfolio: Optional[str] = None

    summary: Optional[str] = None