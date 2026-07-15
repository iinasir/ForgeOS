class ForgeOSError(Exception):
    """
    Base exception for ForgeOS.
    """

    pass


class TemplateNotFoundError(ForgeOSError):
    """
    Raised when a template is missing.
    """

    pass


class ResumeValidationError(ForgeOSError):
    """
    Raised when resume validation fails.
    """

    pass


class ExportError(ForgeOSError):
    """
    Raised when exporting fails.
    """

    pass


class ResumeLoadError(ForgeOSError):
    """
    Raised when resume loading fails.
    """

    pass


class ResumeSaveError(ForgeOSError):
    """
    Raised when resume saving fails.
    """

    pass