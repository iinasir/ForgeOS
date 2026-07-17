import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const ResumeContext = createContext(null);

const defaultResume = {
  personal: {
    photo: "",
    fullName: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    portfolio: "",
    linkedin: "",
    summary: "",
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
      name: "",
      issuer: "",
      year: "",
      credentialUrl: "",
    },
  ],
};

export function ResumeProvider({ children }) {

  const [resumeData, setResumeData] = useState(() => {
    const savedResume = localStorage.getItem("forgeos-resume");

    if (savedResume) {
      return JSON.parse(savedResume);
    }

    return defaultResume;
  });

  const [activeSection, setActiveSection] = useState("personal");

  useEffect(() => {
    localStorage.setItem(
      "forgeos-resume",
      JSON.stringify(resumeData)
    );
  }, [resumeData]);

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        setResumeData,
        activeSection,
        setActiveSection,
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