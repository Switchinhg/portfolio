import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">Project Name</h1>
        <p className="text-gray-600 mt-2">A brief description of what this project does and why it's cool.</p>
      </div>
      
      {/* Tech Stack */}
      <div className="flex flex-wrap justify-center gap-4">
        <span className="px-3 py-1 bg-gray-200 rounded">Next.js</span>
        <span className="px-3 py-1 bg-gray-200 rounded">React</span>
        <span className="px-3 py-1 bg-gray-200 rounded">TailwindCSS</span>
      </div>
      
      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* <Image src="/project-img1.jpg" width={500} height={300} alt="Project Screenshot 1" className="rounded-lg shadow" />
        <Image src="/project-img2.jpg" width={500} height={300} alt="Project Screenshot 2" className="rounded-lg shadow" /> */}
      </div>
      
      {/* Project Details */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Project Details</h2>
        <p><strong>Problem:</strong> Explain the problem this project solves.</p>
        <p><strong>Solution:</strong> Describe how your project addresses the problem.</p>
        <p><strong>Features:</strong></p>
        <ul className="list-disc pl-6">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </div>
      
      {/* Links */}
      <div className="flex gap-4">
        <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded">Live Demo</a>
        <a href="#" className="px-4 py-2 bg-gray-800 text-white rounded">GitHub Repo</a>
      </div>
    </div>
  )
}
