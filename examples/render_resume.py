from app.engines.resume_engine import ResumeEngine
from app.renderers.html_renderer import HTMLRenderer

resume = ResumeEngine.from_json(
    "examples/data/sample_resume.json"
)

renderer = HTMLRenderer()

html = renderer.render(
    resume,
    template_name="modern.html"
)

renderer.save(
    html,
    "exports/resume.html"
)

print()
print("HTML Resume Generated Successfully")
print("Location: exports/resume.html")
print()