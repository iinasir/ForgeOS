import { useResume } from "../../../context/ResumeContext";

export default function useResumeUpdater() {
  const { resumeData, setResumeData } = useResume();

  const updatePersonal = (field, value) => {
    setResumeData({
      ...resumeData,
      personal: {
        ...resumeData.personal,
        [field]: value,
      },
    });
  };

  const updateSection = (section, index, field, value) => {
    const updated = [...resumeData[section]];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    setResumeData({
      ...resumeData,
      [section]: updated,
    });
  };

  const addItem = (section, item) => {
    setResumeData({
      ...resumeData,
      [section]: [...resumeData[section], item],
    });
  };

  const deleteItem = (section, id) => {
    setResumeData({
      ...resumeData,
      [section]: resumeData[section].filter(
        (item) => item.id !== id
      ),
    });
  };

  return {
    resumeData,
    updatePersonal,
    updateSection,
    addItem,
    deleteItem,
  };
}