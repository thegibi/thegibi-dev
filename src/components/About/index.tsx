"use client"
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function AboutComponent() {
const sectionStyle = {
    backgroundImage: "url('/8S6A6322.jpg')",
    height: 'max-content',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <section className="flex flex-col p-8 h-screen bg-gray-100 bg-top" style={sectionStyle}>
      <div className="flex flex-col md:flex-row items-center justify-between mt-52  bg-white/50 rounded-xl p-6  shadow-2xl max-w-7xl mx-auto h-full">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full text-gray-950 font-medium"
        >
          <p className="mb-4">
            Tenho mais de 10 anos de experiência de desenvolvimento na indústria de software com especialização em desenvolvimento de sistema para web, desktop e mobile
            <br /> Apaixonado por tecnologia, minha experiência me permite criar aplicações que tenham impacto e ofereçam valor real para os usuários.
          </p>
          <p className="mb-4">
            Sou formado em Gestão da Tecnologia da Informação pela Unicesumar - PR e Pós-Graduado em Engenharia de Software pela Universidade Metropolitana - SP. <br /><br /> Atualmente trabalho como Desenvolvedor de Software Especialista no <a href="https://www.grupoboticario.com.br/" target="_blank" className="text-blue-600 font-semibold">Grupo Boticário.</a>
          </p>
        </motion.div>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 max-w-7xl mx-auto h-full">
          {/* Habilidade 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/50 p-6 rounded-xl shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800">Frontend</h3>
            <p className="text-gray-600 mt-4">JavaScript, Typescript, CSS, HTML, Next.js, React.js, Node.js</p>
          </motion.div>

          {/* Habilidade 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/50 p-6 rounded-xl shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800">Testes</h3>
            <p className="text-gray-600 mt-4">Jest, Vitest, Cypress, e2e</p>
          </motion.div>

          {/* Habilidade 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/50 p-6 rounded-xl shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800">UI/UX</h3>
            <p className="text-gray-600 mt-4">TailwindCSS, RadixUI, ShadcnUI, Framer Motion</p>
          </motion.div>

          {/* Habilidade 4 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/50 p-6 rounded-xl shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800">Design</h3>
            <p className="text-gray-600 mt-4">Figma</p>
          </motion.div>

             {/* Habilidade 5 */}
             <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/50 p-6 rounded-xl shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800">Desktop</h3>
            <p className="text-gray-600 mt-4">Electron.js, Node.js, WindowsOS, MacOS</p>
          </motion.div>

             {/* Habilidade 6 */}
             <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/50 p-6 rounded-xl shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800">Mobile</h3>
            <p className="text-gray-600 mt-4">React Native, Expo, iOS, Android</p>
          </motion.div>

          {/* Habilidade 6 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/50 p-6 rounded-xl shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800">IA</h3>
            <p className="text-gray-600 mt-4">OpenAI, Gemini, LLamma</p>
          </motion.div>
        </div>

          <div className="flex justify-center space-x-6 text-center mt-auto">
            <motion.a
              href="https://api.whatsapp.com/send/?phone=5548998463847"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="my-8 px-6 py-3 bg-green-900 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition w-full max-w-96"
              target="_blank"
            >
              <FaWhatsapp className="inline-block mr-2" size={24}/>
              Enviar mensagem
            </motion.a>
          </div>
    </section>
  )
} 