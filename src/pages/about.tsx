import React from "react";
import { useEffect } from "react";
interface PageProps {
  title?: string;
}

const About: React.FC<PageProps> = ({ title = "About" }) => {
  useEffect(() => {
    document.title = `${title}`;
  }, [title]);

  return (
    <main className="flex-1">
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl mb-4">About Me</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              I am a dedicated Full-Stack Software Developer with over 10 years
              of independent programming experience, passionate about building
              scalable, secure, and user-focused applications.
            </p>
          </div>
          <section className="mb-16">
            <h2 className="text-2xl mb-6">My Story</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                My journey into software development began over a decade ago as
                a self-taught programmer, driven by a natural curiosity for how
                systems function and a desire to solve complex technical
                challenges. This foundation evolved through formal education and
                hands-on professional roles, where I honed my ability to bridge
                the gap between technical requirements and functional,
                performant software solutions.
              </p>
              <p>
                My professional path has taken me through diverse environments,
                from deploying customized ID card infrastructure to leading
                security research teams investigating major data breaches. These
                experiences have fostered a unique perspective on the
                intersection of software engineering and cybersecurity, allowing
                me to maintain a focus on both high performance and robust
                system integrity.
              </p>
              <p>
                Today, I continue to expand my technical expertise through
                ongoing, project-driven learning. I am committed to leveraging
                my background in full-stack development and analytical
                problem-solving to build impactful technology that serves
                real-world needs.
              </p>
            </div>
          </section>
          <section className="mb-16">
            <h2 className="text-2xl mb-6 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-briefcase w-6 h-6"
              >
                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                <rect width="20" height="14" x="2" y="6" rx="2"></rect>
              </svg>
              Experience
            </h2>
            <div className="space-y-8">
              <div className="border-l-2 border-blue-600 dark:border-[#7aa2f7] pl-6">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  01/18 - 12/18
                </div>
                <h3 className="text-xl mb-2">Junior Software Developer</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Integrated Payment Solutions
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  <li>
                    Designed and developed customized ID card software,
                    deploying solutions across multiple educational sites.{" "}
                  </li>
                  <li>
                    Managed end-to-end hardware and software infrastructure
                    installation for high-volume student enrolment.{" "}
                  </li>
                  <li>
                    Provided technical support, resolving over 95% of issues
                    within a 24-hour SLA.{" "}
                  </li>
                  <li>
                    Collaborated with cross-functional teams to troubleshoot
                    bugs and optimize performance.{" "}
                  </li>
                </ul>
              </div>
              <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-6">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  07/19 - 08/19
                </div>
                <h3 className="text-xl mb-2">Security Researcher</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Meta Defence Labs
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  <li>
                    Led a technical research team in investigating a major
                    public corporate data breach.{" "}
                  </li>
                  <li>
                    Performed root-cause analysis to document vulnerabilities
                    and systemic impacts.{" "}
                  </li>
                  <li>
                    Authored technical research papers and executive briefs
                    regarding security vulnerabilities.{" "}
                  </li>
                  <li>
                    Translated complex exploit paths into actionable security
                    insights.{" "}
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="mb-16">
            <h2 className="text-2xl mb-6 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-graduation-cap w-6 h-6"
              >
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                <path d="M22 10v6"></path>
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
              </svg>
              Education
            </h2>
            <div className="border-l-2 border-blue-600 pl-6 mb-12">
              <div className="text-sm text-gray-500 mb-1">2020 - 2022</div>
              <h3 className="text-xl mb-2">Computer Science</h3>
              <p className="text-gray-600 dark:text-gray-300">
                University of Westminister
              </p>
            </div>
            <div className="border-l-2 border-blue-600 pl-6 mb-12">
              <div className="text-sm text-gray-500 mb-1">2018 - 2020</div>
              <h3 className="text-xl mb-2">BTEC Extended Diploma in I.T</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Barnet & Southgate College
              </p>
            </div>
            <div className="border-l-2 border-blue-600 pl-6 mb-12">
              <div className="text-sm text-gray-500 mb-1">2013 - 2018</div>
              <h3 className="text-xl mb-2">GCSEs</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Enfield Grammar School
              </p>
            </div>
          </section>
          <section hidden>
            <h2 className="text-2xl mb-6 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-award w-6 h-6"
              >
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                <circle cx="12" cy="8" r="6"></circle>
              </svg>
              Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-[#24283b] border border-gray-200 dark:border-gray-700 rounded-lg transition-colors duration-300">
                AWS Certified Developer - Associate
              </div>
              <div className="p-4 bg-gray-50 dark:bg-[#24283b] border border-gray-200 dark:border-gray-700 rounded-lg transition-colors duration-300">
                MongoDB Certified Developer
              </div>
              <div className="p-4 bg-gray-50 dark:bg-[#24283b] border border-gray-200 dark:border-gray-700 rounded-lg transition-colors duration-300">
                Google Cloud Professional Developer
              </div>
              <div className="p-4 bg-gray-50 dark:bg-[#24283b] border border-gray-200 dark:border-gray-700 rounded-lg transition-colors duration-300">
                React Advanced Certification
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default About;
