import { createContext, useContext, useState } from "react";

const ResumeContext = createContext(null);

export function ResumeProvider({ children }) {
  const [resumeData, setResumeData] = useState({
    personal: {
      fullName: "",
      title: "",
      email: "",
      phone: "",
      summary: "",
    },
    education: [],
    experience: [],
    skills: [],
    projects: [],
    certificates: [],
  });

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);

  if (!context) {
    throw new Error(
      "useResume must be used inside <ResumeProvider>. Provider is missing."
    );
  }

  return context;
}