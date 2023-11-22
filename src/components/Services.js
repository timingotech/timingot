import React from 'react'

const Services = () => {

  const handleEmailClick = () => {
    window.location.href = 'mailto:timingotech@gmail.com';
  };
  
  return (
    <div>
           <div className="container p-8 mx-auto">
      <h1 className="mb-6 text-4xl font-bold text-center hometext-gradient">Vitaskr Project Details</h1>

      <div className="mb-8">
        {/* Project descriptions */}
        <div className="mb-8">
          {/* Project 1: Mental Well-being Platform */}
          <div className="mb-6">
            <h2 className="mb-2 text-2xl font-bold">Mental Well-being Platform</h2>
            <p className="mb-4 text-lg">
              Vitaskr is a revolutionary platform aimed at enhancing mental health and productivity. It's designed to offer personalized support, task management, and community engagement, catering to students, professionals, and individuals seeking holistic well-being.
            </p>
            {/* Key Features for Mental Well-being Platform */}
            <ul className="list-disc list-inside">
              <li>AI-driven mental health chatbot for personalized support</li>
              <li>Task management tools with prioritization and scheduling features</li>
              <li>Community engagement forums for support and collaboration</li>
              <li>Resource hubs for mental health resources and professional development</li>
              {/* Add all key features here */}
            </ul>
          </div>

          {/* Project 2: Corporate Well-being Solution */}
          <div className="mb-6">
            <h2 className="mb-2 text-2xl font-bold">Corporate Well-being Solution</h2>
            <p className="mb-4 text-lg">
              Vitaskr extends its capabilities to cater to corporate environments, offering a comprehensive solution for employee well-being and task management. It empowers companies to prioritize mental health initiatives and foster a healthier, more engaged workforce.
            </p>
            {/* Key Features for Corporate Well-being Solution */}
            <ul className="list-disc list-inside">
              <li>Task management integration for employee well-being tracking</li>
              <li>Team-building exercises facilitated by the AI chatbot</li>
              <li>Resource hub for stress-relief exercises and professional development</li>
              {/* Add all key features here */}
            </ul>
          </div>

          {/* Project 3: Personal Growth & Well-being */}
          <div className="mb-6">
            <h2 className="mb-2 text-2xl font-bold">Personal Growth & Well-being</h2>
            <p className="mb-4 text-lg">
              Vitaskr provides a space for personal growth, offering customizable goal setting, mood tracking, and personalized self-care suggestions. It's a platform tailored to support individuals in their journey towards mental wellness and holistic growth.
            </p>
            {/* Key Features for Personal Growth & Well-being */}
            <ul className="list-disc list-inside">
              <li>Customizable goal setting and progress tracking</li>
              <li>AI-driven personalized self-care suggestions</li>
              <li>Community engagement features for mutual support</li>
              {/* Add all key features here */}
            </ul>
          </div>
        </div>

        {/* Call-to-action button */}
        <div className="flex justify-center">
          <button
            onClick={handleEmailClick}
            className="px-4 py-2 font-bold text-white text-gradient focus:outline-none focus:shadow-outline"
          >
            Join Our Team - Reach Out to Us
          </button>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Services