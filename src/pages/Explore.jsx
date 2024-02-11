import JobTitleCard from '../components/JobTitleCard'
import './Explore.css'

const Explore = () => {
  const jobTitles = [
    "Software Developer (Full Stack, Front-End, Back-End, Android, iOS)",
    "Cloud Architect",
    "Data Scientist",
    "Cybersecurity Specialist",
    "Machine Learning Engineer",
    "DevOps Engineer",
    "Digital Marketing Specialist",
    "UI/UX Designer",
    "Product Manager",
    "Business Analyst",
    "Marketing Manager",
    "Sales Manager",
    "Human Resources Manager",
    "Finance Manager",
    "Operations Manager",
    "Project Manager",
    "Supply Chain Manager",
    "Customer Service Manager",
    "Consultant (Management, IT, Marketing, etc.)",
    "Business Development Manager",
    "Doctor (Surgeon, Physician, Dentist, etc.)",
    "Nurse",
    "Pharmacist",
    "Biotechnologist",
    "Medical Researcher",
    "Healthcare Administrator",
    "Public Health Specialist",
    "Dentist",
    "Veterinarian",
    "Ayurvedic Doctor",
    "Teacher (School, College, University)",
    "Professor",
    "Researcher (Scientific, Social Sciences, etc.)",
    "Academic Advisor",
    "Content Writer (Educational)",
    "Librarian",
    "Educational Counselor",
    "Chartered Accountant (CA)",
    "Lawyer",
    "Graphic Designer",
  ];
  
  return (
    <div className="Explore">
      <h1>Explore the top 40 roles in India</h1>
      <div className="jobs-wrapper">
        {jobTitles.map((role) => (
          <JobTitleCard role={role} key={role} />
        ))}
      </div>
    </div>
  );
}

export default Explore