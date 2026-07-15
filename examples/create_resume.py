from app.engines.resume_engine import ResumeEngine
from app.validators.resume_validator import ResumeValidator
resume_data = {
    "personal": {
        "full_name": "Nasir Khan",
        "email": "nasir@example.com",
        "phone": "+91 9876543210",
        "location": "Punjab, India",
        "summary": "Building ForgeOS."
    },
    "skills": [
        {
            "name": "Python",
            "level": "Advanced"
        },
        {
            "name": "FastAPI",
            "level": "Intermediate"
        }
    ]
}

resume = ResumeEngine.create(resume_data)

print("\nResume Created\n")

print(resume)

print("\nValid :", ResumeEngine.validate(resume))

print("\nSummary")

print(ResumeEngine.get_summary(resume))

report = ResumeValidator.analyze(resume)

print("\nResume Analysis\n")

print(report)