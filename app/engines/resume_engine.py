from app.models.analysis import ResumeAnalysis
from app.models.resume import Resume
from app.services.resume_loader import ResumeLoader
from app.services.resume_saver import ResumeSaver
from app.validators.resume_validator import ResumeValidator


class ResumeEngine:
    """
    Core Resume Engine
    """

    @staticmethod
    def create(data: dict) -> Resume:
        return Resume.model_validate(data)

    @staticmethod
    def validate(resume: Resume) -> ResumeAnalysis:
        return ResumeValidator.analyze(resume)

    @staticmethod
    def get_summary(resume: Resume) -> str:
        return (
            f"{resume.personal.full_name} | "
            f"{len(resume.skills)} Skills"
        )

    @staticmethod
    def from_json(path: str) -> Resume:
        data = ResumeLoader.load(path)
        return ResumeEngine.create(data)

    @staticmethod
    def to_json(
        resume: Resume,
        path: str
    ):
        ResumeSaver.save(
            resume,
            path
        )