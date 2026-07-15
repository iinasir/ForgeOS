from app.services.theme_service import THEMES

print()

print("Available Themes")

print()

for theme in THEMES:

    print(f"Name : {theme.name}")

    print(f"File : {theme.id}")

    print(f"Premium : {theme.premium}")

    print(f"ATS : {theme.ats_friendly}")

    print("-" * 40)