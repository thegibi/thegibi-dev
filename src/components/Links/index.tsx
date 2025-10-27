import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa6";


export default function Links() {
  return (
    <div className="flex flex-col items-center md:items-start">
          <div className="flex space-x-4">
            <a
              href="https://www.github.com/thegibi"
              className="text-gray-400 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/thegibiofficial/"
              className="text-gray-400 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.youtube.com/@thegibiofficial"
              className="text-gray-400 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
  )
}