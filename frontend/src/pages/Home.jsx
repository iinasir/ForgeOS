import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="px-10 py-20 text-center">

        <h1 className="text-6xl font-bold mb-6">
          Build Professional Resumes
          <br />
          with ForgeOS
        </h1>


        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Create ATS-friendly resumes, export to PDF/DOCX,
          and improve your chances of getting hired.
        </p>


        <Link
          to="/builder"
          className="inline-block bg-black text-white px-8 py-4 rounded-xl"
        >
          Create Resume
        </Link>

      </section>


      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6 px-10 pb-20">


        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-bold mb-2">
            AI Resume Review
          </h3>

          <p>
            Analyze your resume and get improvement suggestions.
          </p>
        </div>



        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-bold mb-2">
            Premium Templates
          </h3>

          <p>
            Modern, executive and ATS-friendly designs.
          </p>
        </div>



        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-bold mb-2">
            Export Anywhere
          </h3>

          <p>
            Download professional PDF and DOCX resumes.
          </p>
        </div>


      </section>


    </div>
  );
}


export default Home;