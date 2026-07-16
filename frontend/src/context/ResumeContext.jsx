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
      photo: "",
    },

    education: [
      {
        id: Date.now(),
        institute: "",
        degree: "",
        startYear: "",
        endYear: "",
        description: "",
      },
    ],

    experience: [
      {
        id: Date.now() + 1,
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],

    skills: [
      {
        id: Date.now() + 2,
        name: "",
      },
    ],

    projects: [
      {
        id: Date.now() + 3,
        title: "",
        technologies: "",
        github: "",
        liveDemo: "",
        description: "",
      },
    ],

    certificates: [
      {
        id: Date.now() + 4,
        title: "",
        issuer: "",
        year: "",
      },
    ],
  });

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        setResumeData,
      }}
    >
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