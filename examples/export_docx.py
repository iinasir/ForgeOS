from app.engines.resume_engine import ResumeEngine
from app.renderers.docx_renderer import DOCXRenderer

resume = ResumeEngine.from_json(
    "examples/data/sample_resume.json"
)

DOCXRenderer.export(
    resume,
    "exports/resume.docx"
)

print()
print("DOCX Resume Generated Successfully")
print("Location: exports/resume.docx")
print()