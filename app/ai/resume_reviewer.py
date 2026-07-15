from app.models.analysis import ResumeAnalysis
from app.models.resume import Resume


class ResumeReviewer:
    """
    AI Resume Reviewer.

    Currently rule-based.
    Future:
    - OpenAI
    - Gemini
    - Ollama
    """

    @staticmethod
    def review(
        resume: Resume,
        analysis: ResumeAnalysis
    ) -> list[str]:

        advice = []

        if analysis.score < 70:
            advice.append(
                "Overall resume needs significant improvement."
            )

        if not resume.personal.summary:
            advice.append(
                "Write a professional summary in 3-4 lines."
            )

        if len(resume.skills) < 5:
            advice.append(
                "Add more relevant technical skills."
            )

        if len(resume.projects) == 0:
            advice.append(
                "Include at least one real-world project."
            )

        if len(resume.experiences) == 0:
            advice.append(
                "Add internships or work experience if available."
            )

        if len(resume.education) == 0:
            advice.append(
                "Education section is missing."
            )

        if not advice:
            advice.append(
                "Excellent resume. Only minor improvements recommended."
            )

        return advice