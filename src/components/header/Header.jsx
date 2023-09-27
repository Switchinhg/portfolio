export default function Header() {
  return (
    <nav className="nav">
      <div className="basicInfo">
        <img src={'/img-curriculum.png'} alt="Image of Santiago Font" />
        <h1>Santiago Font</h1>
        <p>Full Stack Developer</p>
      </div>

      <section className="links">
        <h3>PROJECTS</h3>
        <h3>ABOUT ME</h3>
      </section>
      <footer >
        <p>LK</p>
        <p>GH</p>
        <p>IG</p>
      </footer>
    </nav>
  )
}
