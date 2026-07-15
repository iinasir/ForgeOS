import sys

from app.ai.resume_reviewer import ResumeReviewer
from app.engines.resume_engine import ResumeEngine
from app.renderers.docx_renderer import DOCXRenderer
from app.renderers.html_renderer import HTMLRenderer
from app.renderers.pdf_renderer import PDFRenderer
from app.utils.exceptions import ForgeOSError
from app.utils.logger import logger


DATA_FILE = "examples/data/sample_resume.json"

HTML_FILE = "exports/resume.html"
PDF_FILE = "exports/resume.pdf"
DOCX_FILE = "exports/resume.docx"
JSON_FILE = "exports/resume.json"


def load_resume():

    logger.info("Loading resume")

    return ResumeEngine.from_json(DATA_FILE)


def render_html():

    resume = load_resume()

    logger.info("Rendering HTML")

    renderer = HTMLRenderer()

    html = renderer.render(resume)

    renderer.save(
        html,
        HTML_FILE
    )

    logger.info(f"HTML saved -> {HTML_FILE}")

    print("HTML generated successfully.")


def export_pdf():

    render_html()

    PDFRenderer.export(
        html_path=HTML_FILE,
        pdf_path=PDF_FILE
    )

    logger.info(f"PDF saved -> {PDF_FILE}")

    print("PDF generated successfully.")


def export_docx():

    resume = load_resume()

    DOCXRenderer.export(
        resume,
        DOCX_FILE
    )

    logger.info(f"DOCX saved -> {DOCX_FILE}")

    print("DOCX generated successfully.")


def export_json():

    resume = load_resume()

    ResumeEngine.to_json(
        resume,
        JSON_FILE
    )

    logger.info(f"JSON saved -> {JSON_FILE}")

    print("JSON generated successfully.")


def analyze():

    resume = load_resume()

    logger.info("Analyzing resume")

    analysis = ResumeEngine.validate(resume)

    review = ResumeReviewer.review(
        resume,
        analysis
    )

    print("\nResume Analysis")
    print("=" * 50)

    print(f"Score      : {analysis.score}")
    print(f"ATS Score  : {analysis.ats_score}")

    print("\nPassed")

    for item in analysis.passed:
        print(f"  - {item}")

    print("\nIssues")

    if analysis.issues:
        for item in analysis.issues:
            print(f"  - {item}")
    else:
        print("  None")

    print("\nSuggestions")

    if analysis.suggestions:
        for item in analysis.suggestions:
            print(f"  - {item}")
    else:
        print("  None")

    print("\nAI Review")

    for item in review:
        print(f"  - {item}")

    logger.info("Resume analysis completed")


COMMANDS = {
    "render": render_html,
    "pdf": export_pdf,
    "docx": export_docx,
    "json": export_json,
    "analyze": analyze,
}


def main():

    if len(sys.argv) != 2:
        print(
            "Usage: python forge.py "
            "[render|pdf|docx|json|analyze]"
        )
        return

    command = sys.argv[1].lower()

    if command not in COMMANDS:
        print(f"Unknown command: {command}")
        return

    try:
        COMMANDS[command]()

    except ForgeOSError as e:

        logger.exception("ForgeOS error")

        print("\nForgeOS Error")
        print(e)
        print("\nSee logs/forgeos.log for details.")

    except Exception as e:

        logger.exception("Unexpected error")

        print("\nUnexpected Error")
        print(e)
        print("\nSee logs/forgeos.log for details.")


if __name__ == "__main__":
    main()