from typing import Optional

from pydantic import BaseModel


class Certification(BaseModel):
    title: str
    issuer: str

    issue_date: Optional[str] = None
    credential_url: Optional[str] = None