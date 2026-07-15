from typing import Optional

from pydantic import BaseModel


class Education(BaseModel):
    institution: str
    degree: str

    start_year: str
    end_year: Optional[str] = None

    grade: Optional[str] = None