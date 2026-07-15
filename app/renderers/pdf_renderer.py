from pathlib import Path

from playwright.sync_api import sync_playwright


class PDFRenderer:
    """
    Export HTML to PDF using headless Chromium.
    """

    @staticmethod
    def export(
        html_path: str,
        pdf_path: str
    ):

        html = Path(html_path).resolve()

        output = Path(pdf_path)

        output.parent.mkdir(
            parents=True,
            exist_ok=True
        )

        with sync_playwright() as p:

            browser = p.chromium.launch()

            page = browser.new_page()

            page.goto(
                html.as_uri(),
                wait_until="networkidle"
            )

            page.pdf(

                path=str(output),

                format="A4",

                print_background=True,

                margin={
                    "top": "10mm",
                    "bottom": "10mm",
                    "left": "10mm",
                    "right": "10mm",
                }

            )

            browser.close()