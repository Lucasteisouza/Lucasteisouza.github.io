const stacks = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'ReactJS',
  'Redux',
  'NodeJS',
  'ExpressJS',
  'NestJS',
  'SQL',
  'NoSQL',
  'Python',
  '.NET',
  'ASP.NET',
  'C#',
];

const testSuites = [
  'Jest',
  'React Testing Library',
  'Mocha',
  'Chai',
  'Sinon',
  'Cypress',
  'Pytest',
  'XUnit',
];

const others = [
  'Git',
  'SCRUM',
  'Kanban',
  'Docker',
  'AWS',
  'Azure',
  'VSCode',
  'TDD',
  'POO',
  'Clean Code',
  'Microservices',
  'REST',
  'JWT',
  'CI/CD',
];

const Stacks = () => {
  return (
    <div className="stacks" id="stacks">
      <h2>Habilidades</h2>
      <div className="stacks-container">
        <div className="lang-list">
          <ul>Linguagens e frameworks
            {stacks.map((stack) => <li key={stack}>{stack}</li>)}
          </ul>
        </div>
        <div className="test-list">
          <ul>Suites de teste
            {testSuites.map((testSuite) => <li key={testSuite}>{testSuite}</li>)}
          </ul>
        </div>
        <div className="others-list">
          <ul>Outras Habilidades
            {others.map((other) => <li key={other}>{other}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Stacks