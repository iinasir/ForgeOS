from typing import Optional

from pydantic import BaseModel, Field


class Experience(BaseModel):
    company: str
    position: str

    start_date: str
    end_date: Optional[str] = "Present"

    location: Optional[str] = None

    description: list[str] = Field(default_factory=list)