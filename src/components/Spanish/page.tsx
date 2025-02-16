import Link from "next/link"

export default function Spanish() {
  return (
<div>
    <h1 className="text-3xl lg:text-5xl pb-8">
      Hola, bienvenido. 😀
      <br /> Soy Evandro Gibicoski, conocido como <code>Gibi</code>
    </h1>
    <p className="text-xl">
      Como desarrollador de software, tengo una pasión por crear soluciones de software.
      Mi experiencia abarca tecnologías enfocadas en la Web y aplicaciones de Escritorio multiplataforma, lo que me permite adaptarme en entornos de desarrollo en constante cambio.
    </p>

    <br />
    <p className="text-xl">
      <code>Soy licenciado en Gestión de Tecnología de la Información por la Facultad Unicesumar de Maringá y Postgraduado en Ingeniería de Software por la Universidad Metropolitana de SP.</code>
    </p>

    <br />
    <p className="text-xl mb-10">
      Actualmente trabajo como <strong>Developer Specialist</strong> en <a href="https://www.grupoboticario.com.br/es/home-es/" target="_blank" className="text-[#78866B] font-semibold">Grupo Boticário</a>.
    </p>

    <Link href="/contact" className="text-[#78866B] border border-[#78866B] py-4 px-6 rounded-full font-semibold">Contáctame</Link>
</div>
  )
}
