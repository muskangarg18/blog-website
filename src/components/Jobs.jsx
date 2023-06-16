import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import swdev from "../assets/swdev.jpg";
import fullstack from "../assets/fullstack.png"
import frontend from "../assets/frontend.png"

const JobPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const jobs = [
    {
      id: 1,
      title: 'Software Developer',
      image: swdev,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris efficitur.',
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      image: fullstack,
      description: 'Sed euismod lorem a lectus feugiat, in fringilla sapien finibus.',
    },
    {
      id: 3,
      title: 'Frontend Developer',
      image: frontend,
      description: 'Nullam pulvinar nulla et nunc lacinia, in tristique ex placerat.',
    },
  ];

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold">Software Developer Jobs</h1>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search for jobs"
            className="mt-4 p-2 border border-gray-300 rounded"
          />
        </div>
      </header>
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-3 gap-4">
          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-white rounded overflow-hidden shadow-lg flex flex-col">
              <img className="w-full h-48 object-cover" src={job.image} alt={job.title} />
              <div className="px-6 py-4 flex-grow">
                <div className="font-bold text-xl mb-2">{job.title}</div>
                <p className="text-gray-700 text-base">{job.description}</p>
              </div>
              <div className="px-6 py-4">
                <Link
                  to={`/jobs/${job.id}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-end"
                >
                  Know More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-gray-200 text-center py-4">
        <p>&copy; 2023 Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default JobPage;
