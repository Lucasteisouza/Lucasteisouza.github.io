const Projects = () => {
  return (
    <div className="projects">
      <h2>Principais projetos</h2>
        <div className="project-container">
        <div className="project">
          <h3><a href="https://github.com/Lucasteisouza/Booking-backend-Csharp-Trb" target="_blank" rel="noreferrer">Clone de Booking</a></h3>
          <div>
            <h4>Back-end de um aplicativo similar ao Booking</h4>
            <ul>Tecnologias utilizadas:
              <li>.NET Core</li>
              <li>ASP.NET</li>
              <li>Entity Framework</li>
              <li>SQL Server</li>
              <li>JWT</li>
              <li>C#</li>
            </ul>
          </div>
        </div>
        <div className="project">
          <h3><a href="https://github.com/Lucasteisouza/D-e-D-class-generator-Trb" target="_blank" rel="noreferrer">D&D Class Generator</a></h3>
          <h4>Back-end de um aplicativo gerador de classes inspirado no jogo Dundgeons & Dragons</h4>
          <ul>Tecnologias utilizadas:
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>POO</li>
          </ul>
        </div>
        <div className="project">
          <h3><a href="https://github.com/Lucasteisouza/GourmApp---Trb" target="_blank" rel="noreferrer">GourmApp</a></h3>
          <h4>Front-end de SPA de receitas utilizando as APIs MealDB e CocktailDB</h4>
          <ul>Tecnologias utilizadas:
            <li>ReactJS</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div className="project">
          <h3><a href="https://github.com/Lucasteisouza/SimulatedMusicPlayer-Trb" target="_blank" rel="noreferrer">Spotify Clone</a></h3>
          <h4>Front-end de SPA de streaming de músicas, inspirado e consumindo a API do Spotify</h4>
          <ul>Tecnologias utilizadas:
            <li>ReactJS</li>
            <li>Redux</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Projects