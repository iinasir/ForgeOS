from typing import Optional

from pydantic import BaseModel, Field


class Project(BaseModel):
    name: str
    description: str

    technologies: list[str] = Field(default_factory=list)

    github: Optional[str] = None
    live_demo: Optional[str] = None