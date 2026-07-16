export default function Dashboard() {
  const stats = [
    { title: "Resumes", value: "0" },
    { title: "AI Reviews", value: "0" },
    { title: "Exports", value: "0" },
    { title: "Templates", value: "4" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold">Welcome 👋</h1>
            <p className="text-gray-600">
              Manage your resumes from one place.
            </p>
          </div>

          <button className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90">
            + New Resume
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl shadow p-6"
            >
              <p className="text-gray-500">{item.title}</p>
              <h2 className="text-4xl font-bold mt-2">{item.value}</h2>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-bold mb-4">
              Recent Resumes
            </h2>

            <p className="text-gray-500">
              No resumes created yet.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-bold mb-4">
              Quick Actions
            </h2>

            <div className="space-y-4">

              <button className="w-full border rounded-xl py-3 hover:bg-gray-100">
                Create Resume
              </button>

              <button className="w-full border rounded-xl py-3 hover:bg-gray-100">
                Import Resume
              </button>

              <button className="w-full border rounded-xl py-3 hover:bg-gray-100">
                AI Resume Review
              </button>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}