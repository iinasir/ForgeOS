from pathlib import Path

from app.utils.exceptions import TemplateNotFoundError


class TemplateService:
    """
    Manage available resume templates.
    """

    TEMPLATE_DIR = Path("app/templates")

    @classmethod
    def get_templates(cls) -> list[str]:
        return sorted(
            file.name
            for file in cls.TEMPLATE_DIR.glob("*.html")
        )

    @classmethod
    def exists(cls, template_name: str) -> bool:
        return (cls.TEMPLATE_DIR / template_name).exists()

    @classmethod
    def validate(cls, template_name: str) -> None:
        """
        Validate that the requested template exists.
        """

        if not cls.exists(template_name):
            raise TemplateNotFoundError(
                f"Template '{template_name}' not found."
            )