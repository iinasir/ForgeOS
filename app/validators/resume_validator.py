from app.models.analysis import ResumeAnalysis
from app.models.resume import Resume


class ResumeValidator:
    """
    Resume Quality Analyzer
    """

    @staticmethod
    def analyze(resume: Resume) -> ResumeAnalysis:

        score = 100
        issues = []
        suggestions = []
        passed = []

        # ---------- Personal ----------

        if resume.personal.full_name:
            passed.append("Full Name")

        if resume.personal.email:
            passed.append("Email")

        if resume.personal.summary:
            passed.append("Professional Summary")
        else:
            score -= 10
            issues.append("Professional summary missing.")
            suggestions.append("Add a short professional summary.")

        if resume.personal.linkedin:
            passed.append("LinkedIn")
        else:
            score -= 5
            issues.append("LinkedIn profile missing.")

        if resume.personal.github:
            passed.append("GitHub")
        else:
            score -= 3
            suggestions.append("Add GitHub profile.")

        # ---------- Skills ----------

        if len(resume.skills) == 0:
            score -= 20
            issues.append("No skills added.")
        else:
            passed.append(f"{len(resume.skills)} Skills")

            if len(resume.skills) < 5:
                score -= 8
                suggestions.append("Add more technical skills.")

        # ---------- Projects ----------

        if len(resume.projects) == 0:
            score -= 15
            suggestions.append("Add at least one project.")
        else:
            passed.append(f"{len(resume.projects)} Projects")

        # ---------- Experience ----------

        if len(resume.experiences) == 0:
            suggestions.append("Add work experience if available.")
        else:
            passed.append(f"{len(resume.experiences)} Experience")

        # ---------- Education ----------

        if len(resume.education) == 0:
            score -= 10
            issues.append("Education missing.")
        else:
            passed.append(f"{len(resume.education)} Education")

        ats_score = max(score - len(issues) * 2, 0)

        return ResumeAnalysis(
            score=max(score, 0),
            ats_score=ats_score,
            passed=passed,
            issues=issues,
            suggestions=suggestions
        )