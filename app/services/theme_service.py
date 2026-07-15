from dataclasses import dataclass


@dataclass(frozen=True)
class Theme:

    id: str

    name: str

    description: str

    ats_friendly: bool

    premium: bool


THEMES = [

    Theme(
        id="modern.html",
        name="Modern",
        description="Modern professional resume",
        ats_friendly=True,
        premium=False,
    ),

    Theme(
        id="minimal.html",
        name="Minimal",
        description="Minimal clean design",
        ats_friendly=True,
        premium=False,
    ),

    Theme(
        id="executive.html",
        name="Executive",
        description="Executive corporate layout",
        ats_friendly=True,
        premium=True,
    ),

    Theme(
        id="creative.html",
        name="Creative",
        description="Creative designer template",
        ats_friendly=False,
        premium=True,
    ),

    Theme(
        id="ats.html",
        name="ATS Optimized",
        description="Applicant Tracking System optimized",
        ats_friendly=True,
        premium=True,
    ),

]