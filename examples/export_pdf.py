from app.engines.resume_engine import ResumeEngine
from app.renderers.pdf_renderer import PDFRenderer

resume = ResumeEngine.from_json(
    "examples/data/sample_resume.json"
)

PDFRenderer.export(
    html_path="exports/resume.html",
    pdf_path="exports/resume.pdf"
)

print()
print("PDF Resume Generated Successfully")
print("Location: exports/resume.pdf")
print()