from pathlib import Path
from dotenv import load_dotenv
import os

BASE_DIR = Path(__file__).resolve().parent.parent.parent

TEMPLATE_DIR = BASE_DIR / "app" / "templates"
EXPORT_DIR = BASE_DIR / "exports"
DATA_DIR = BASE_DIR / "examples" / "data"
DEFAULT_TEMPLATE = "modern.html"

load_dotenv(BASE_DIR / ".env")


class Settings:
    APP_NAME = "ForgeOS"
    APP_VERSION = "0.1.0"

    DEBUG = os.getenv("DEBUG", "True").lower() == "true"

    OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "")

    DATABASE_URL = os.getenv(
        "DATABASE_URL",
        "sqlite:///forgeos.db"
    )

    EXPORT_DIR = BASE_DIR / "exports"
    TEMPLATE_DIR = BASE_DIR / "app" / "templates"
    ASSETS_DIR = BASE_DIR / "assets"


settings = Settings()