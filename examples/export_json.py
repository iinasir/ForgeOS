from app.engines.resume_engine import ResumeEngine

resume = ResumeEngine.from_json(
    "examples/data/sample_resume.json"
)

ResumeEngine.to_json(
    resume,
    "exports/resume.json"
)

print()
print("JSON Resume Generated Successfully")
print("Location: exports/resume.json")
print()