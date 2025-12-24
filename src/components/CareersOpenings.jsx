import { useState } from "react";
import { ChevronDown } from "lucide-react";

/* ---------------- DATA ---------------- */

const jobs = [
  {
    title: "Customer Support Operator",
    description: {
      responsibilities: [
        "Provide first-class customer support via chat, email and phone.",
        "Assist clients with account and platform-related enquiries.",
        "Maintain accurate records of client interactions.",
      ],
      requirements: [
        "Excellent communication skills.",
        "Customer-focused mindset.",
        "Ability to work flexible shifts.",
      ],
    },
  },
  {
    title: "Client Relations Officer (Multiple languages)",
    description: {
      responsibilities: [
        "Build and maintain strong client relationships.",
        "Support international clients across multiple regions.",
        "Resolve client issues in a timely and professional manner.",
      ],
      requirements: [
        "Fluency in multiple languages.",
        "Strong interpersonal skills.",
        "Experience in Forex or financial services preferred.",
      ],
    },
  },
  {
    title: "Client Accounts / Backoffice Administrator",
    description: {
      responsibilities: [
        "Process account applications and verification checks.",
        "Maintain accurate client records.",
        "Support internal teams with back-office operations.",
      ],
      requirements: [
        "Strong attention to detail.",
        "Experience in administration or finance roles.",
        "Knowledge of KYC/AML processes is an advantage.",
      ],
    },
  },
  {
    title: "Technical Writer",
    description: {
      responsibilities: [
        "Create and maintain technical documentation.",
        "Work closely with developers and product teams.",
        "Ensure clarity and consistency across documentation.",
      ],
      requirements: [
        "Excellent written English skills.",
        "Ability to explain complex topics simply.",
        "Experience in technical or financial writing preferred.",
      ],
    },
  },
  {
    title: "Partners Account Manager",
    description: {
      responsibilities: [
        "Manage and grow partner relationships.",
        "Monitor partner performance and reporting.",
        "Identify new partnership opportunities.",
      ],
      requirements: [
        "Strong negotiation and communication skills.",
        "Experience in partnership or account management.",
        "Knowledge of Forex/CFD industry is a plus.",
      ],
    },
  },
];

/* ---------------- COMPONENT ---------------- */

const CareersOpenings = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* LOCATION */}
        <h2 className="text-3xl font-semibold mb-8">Seychelles</h2>

        {/* JOB LIST */}
        <div className="space-y-4">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              {/* HEADER */}
              <div
                className="bg-gray-50 px-6 py-5 flex items-center justify-between cursor-pointer hover:bg-gray-100 transition"
                onClick={() => toggle(index)}
              >
                <span className="text-lg font-medium">{job.title}</span>

                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* CONTENT */}
              {openIndex === index && (
                <div className="bg-white px-6 py-6 space-y-6 text-sm text-gray-800">
                  {/* Responsibilities */}
                  <div>
                    <h4 className="font-semibold mb-2">Responsibilities</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {job.description.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h4 className="font-semibold mb-2">Requirements</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {job.description.requirements.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* APPLY */}
                  <div className="pt-4 border-t">
                    <a
                      href="mailto:careers@icmarkets.com"
                      className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-medium transition"
                    >
                      Apply for this role
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* FOOTER NOTE */}
        <p className="mt-10 text-sm text-gray-800">
          For more information on vacancies, or to submit your CV and covering
          letter, please email{" "}
          <a
            href="mailto:careers@icmarkets.com"
            className="text-green-500 font-medium hover:underline"
          >
            careers@icmarkets.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default CareersOpenings;
