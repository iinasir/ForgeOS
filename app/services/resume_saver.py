import json
from pathlib import Path

from app.models.resume import Resume


class ResumeSaver:
    """
    Save resume data to JSON.
    """

    @staticmethod
    def save(
        resume: Resume,
        path: str
    ):

        file = Path(path)

        file.parent.mkdir(
            parents=True,
            exist_ok=True
        )

        file.write_text(
            json.dumps(
                resume.model_dump(),
                indent=4
            ),
            encoding="utf-8"
        )