from app.config.settings import settings


def main():
    print("=" * 50)
    print(f"{settings.APP_NAME} v{settings.APP_VERSION}")
    print("=" * 50)

    print("System initialized successfully.")
    print(f"Export Folder : {settings.EXPORT_DIR}")
    print(f"Template Folder : {settings.TEMPLATE_DIR}")


if __name__ == "__main__":
    main()