from pydantic import BaseModel, Field

from app.models.personal import PersonalInfo
from app.models.experience import Experience
from app.models.education import Education
from app.models.project import Project
from app.models.skill import Skill
from app.models.certification import Certification
from app.models.language import Language


class Resume(BaseModel):
    """
    Main Resume model.
    This is the root object for the entire resume.
    """

    personal: PersonalInfo

    experiences: list[Experience] = Field(default_factory=list)

    education: list[Education] = Field(default_factory=list)

    projects: list[Project] = Field(default_factory=list)

    skills: list[Skill] = Field(default_factory=list)

    certifications: list[Certification] = Field(default_factory=list)

    languages: list[Language] = Field(default_factory=list)