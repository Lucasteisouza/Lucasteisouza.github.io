import photo from '../assets/photoLucas.jpg';
import { TypeAnimation } from 'react-type-animation';
function Header() {
  return (
    <header>
      <div>
      <h1>Lucas Souza</h1>
      <TypeAnimation
        sequence={[
          "Desenvolvedor",
          1000,
          "Front-end",
          1000,
          "Back-end",
          1000,
          "Fullstack",
          2000,
        ]}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: '2em' }}
      />
      </div>
      <img src={photo} alt="Foto de Lucas" />
    </header>
  )
}

export default Header;