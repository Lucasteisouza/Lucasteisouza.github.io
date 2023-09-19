import linkedinLogo from '../assets/linkedInLogo.png'
import githubLogo from '../assets/gitHubLogo.png'
import whatsappLogo from '../assets/whatsappLogo.png'

const Footer = () => {
  return (
    <footer id='contact'>
      <h2>Contato</h2>
      <p>lucasteisouza@gmail.com</p>
      <p>(31) 97544-1211</p>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/lucasteisouza/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinLogo} alt="Logo do Linkedin" className='blue-filter'/>
        </a>
        <a href="https://github.com/Lucasteisouza" target="_blank" rel="noreferrer">
          <img src={githubLogo} alt="Logo do Github" className='gray-filter'/>
        </a>
        <a href="https://api.whatsapp.com/send?phone=5531975441211" target="_blank" rel="noreferrer">
          <img src={whatsappLogo} alt="Logo do Whatsapp" className='green-filter'/>
        </a>
      </div>
    </footer>
  )
}

export default Footer