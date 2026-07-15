import json
from pathlib import Path

from app.utils.exceptions import ResumeLoadError
from app.utils.logger import logger


class ResumeLoader:
    """
    Load resume data from JSON files.
    """

    @staticmethod
    def load(path: str) -> dict:

        file = Path(path)

        logger.info(f"Loading resume file -> {file}")

        if not file.exists():

            logger.error(f"Resume file not found -> {file}")

            raise ResumeLoadError(
                f"Resume file not found: {path}"
            )

        try:

            with file.open(
                "r",
                encoding="utf-8"
            ) as f:

                data = json.load(f)

            logger.info("Resume loaded successfully")

            return data

        except json.JSONDecodeError as e:

            logger.error(f"Invalid JSON -> {e}")

            raise ResumeLoadError(
                "Resume JSON is invalid."
            ) from e

        except Exception as e:

            logger.exception("Unexpected error while loading resume")

            raise ResumeLoadError(
                str(e)
            ) from e