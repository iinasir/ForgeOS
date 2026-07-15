from pydantic import BaseModel, Field


class ResumeAnalysis(BaseModel):
    score: int

    ats_score: int

    passed: list[str] = Field(default_factory=list)

    issues: list[str] = Field(default_factory=list)

    suggestions: list[str] = Field(default_factory=list)