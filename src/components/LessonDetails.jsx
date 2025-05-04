import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import lessons from "../lessons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const LessonDetails = () => {
  const { id } = useParams();
  const lesson = lessons.find(l => l.id === parseInt(id));
  const [copySuccess, setCopySuccess] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(lesson.code)
      .then(() => {
        setCopySuccess("copied to clipboard!");
        setTimeout(() => setCopySuccess(""), 2000);
      })
      .catch(() => {
        setCopySuccess("try again!");
      });
  };

  if (!lesson) return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <p className="text-xl mb-4">الدرس غير موجود</p>
      <Link to="/" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
        Return Home
      </Link>
    </div>
  );

  return (
    <div className="px-4 sm:px-6 md:px-10 pt-17 sm:pt-20">
      <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-black mb-3 sm:mb-0 text-xs sm:text-sm">
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>Back to notes</span>
      </Link>
      
      <div className="flex justify-center">
        <h1 className="text-[17px] sm:text-lg md:text-[21px] font-semibold mb-1 sm:mb-3 underline text-center">{lesson.title}</h1>
      </div>
      
      <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-8 text-center">{lesson.category} | {lesson.date}</p>
      
      {/* Flexible layout that stacks on mobile */}
      <div className="flex flex-col md:flex-row md:justify-between md:gap-8">
        <div className="w-full md:w-1/2 mb-6">
          <iframe 
            className="w-full aspect-video" 
            src={lesson.src} 
            title={lesson.title} 
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="w-full md:w-1/2">
          <h2 className="text-[13.5px] sm:text-[16.5px] w-fit font-semibold mb-1.5 sm:mb-2.5 border-b-2 mt-1 sm:-mt-2">Notes</h2>
          <pre className="mb-5 text-gray-950/90 font-medium text-xs sm:text-sm md:text-[14.5px] bg-gray-100 p-2 sm:p-3 overflow-auto rounded-md"><code>{lesson.description}</code></pre>
        </div>
      </div>

      <div className="mt-3 sm:mt-6">
        <h2 className="text-[13.5px] sm:text-[16.5px] w-fit font-semibold mb-1.5 sm:mb-2 border-b-2">Questions</h2>
        <ul className="space-y-1">
          {lesson.qa.map((item, index) => (
            <li key={index} className="bg-gray-100 p-2 text-xs sm:text-sm md:text-[14.5px] rounded-md">
              <p className="font-semibold text-gray-800">Q: {item.question}</p>
              <p className="text-gray-700 mt-1">A: {item.answer}</p>
            </li>
          ))}
        </ul>
      </div>

      <h2 className="text-[13.5px] sm:text-[16.5px] w-fit font-semibold mb-1.5 sm:mb-2 border-b-2 pt-8 sm:pt-10">Code</h2>
      <div className="relative mb-4">
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 bg-gray-400/70 text-gray-800 text-[10px] sm:text-xs px-2 py-1 rounded hover:bg-gray-400/80 transition-all duration-200 ease-in-out cursor-pointer"
        >
          copy
        </button>
        <pre className="bg-gray-100 text-gray-700 px-3 py-5 sm:px-4 sm:py-5 overflow-auto font-medium text-xs sm:text-[13px] rounded-md">
          <code>{lesson.code}</code>
        </pre>
        {copySuccess && (
          <div className="flex justify-end">
            <p className="text-gray-600 text-xs sm:text-[13px] mt-1">{copySuccess}</p>
          </div>
        )}
      </div>

      <div className="mb-10">
        <h2 className="text-[13.5px] sm:text-[16.5px] w-fit font-semibold mb-1.5 sm:mb-2 border-b-2 pt-4 sm:pt-5">Links</h2>
        <ul className="space-y-1">
          {lesson.links.map((link, index) => (
            <li key={index} className="p-2 flex py-1.5 px-2 sm:px-3 bg-gray-100 rounded-md items-center gap-2 text-xs sm:text-sm md:text-[14px] flex-wrap">
              <FontAwesomeIcon icon={faLink} className="text-black min-w-4" />
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:underline rounded break-all"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LessonDetails;