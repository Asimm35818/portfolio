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
              Full stack developer with a passion for building innovative web
              applications
            </p>
          </div>
          <section className="mb-16">
            <h2 className="text-2xl mb-6">My Story</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                porro voluptatem eligendi eum impedit? Ipsa ducimus sapiente
                adipisci illo accusamus modi error dolorum exercitationem
                eveniet numquam assumenda praesentium rem, quo excepturi
                temporibus. Inventore placeat adipisci praesentium porro, alias
                dolores labore?
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias alias reiciendis molestiae modi quas! Laboriosam
                corrupti eveniet illo nostrum dolores natus obcaecati, quod
                doloremque ratione esse qui, reprehenderit ipsam, aliquid
                impedit.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, voluptate quas, earum, deserunt praesentium qui quod
                aspernatur laboriosam minima rem ipsum?
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
                  2022 - Present
                </div>
                <h3 className="text-xl mb-2">Senior Full Stack Developer</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Lorem, ipsum dolor.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
              <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-6">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  2020 - 2022
                </div>
                <h3 className="text-xl mb-2">Full Stack Developer</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Lorem ipsum dolor sit amet
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
              <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-6">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  2019 - 2020
                </div>
                <h3 className="text-xl mb-2">Junior Developer</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Lorem ipsum
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="mb-16" hidden>
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
            <div className="border-l-2 border-blue-600 pl-6">
              <div className="text-sm text-gray-500 mb-1">2015 - 2019</div>
              <h3 className="text-xl mb-2">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                University of Technology
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
