from pathlib import Path

from jinja2 import Environment, FileSystemLoader

from app.config.settings import TEMPLATE_DIR
from app.models.resume import Resume
from app.services.template_service import TemplateService


class HTMLRenderer:
    """
    Render Resume to HTML.
    """

    def __init__(self):

        self.env = Environment(
            loader=FileSystemLoader(TEMPLATE_DIR),
            autoescape=True
        )

    def render(
        self,
        resume: Resume,
        template_name: str = "modern.html"
    ) -> str:

        # Validate template
        TemplateService.validate(template_name)

        template = self.env.get_template(template_name)

        return template.render(
            resume=resume
        )

    def save(
        self,
        html: str,
        output_path: str
    ):

        output = Path(output_path)

        output.parent.mkdir(
            parents=True,
            exist_ok=True
        )

        output.write_text(
            html,
            encoding="utf-8"
        )