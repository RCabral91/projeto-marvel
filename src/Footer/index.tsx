import logoImg from '../assets/logo.png'
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { Container, Content } from './styles'

export const Footer:React.FC = () => (
    <Container>
      <Content>
        <div className='col d-flex'>
          <h2 className="fs-6">Follow Marvel</h2>
          <FaFacebook className='mx-2' />
          <FaInstagram />
          <FaTwitter className='mx-2' />  
          <FaYoutube />  
        </div>
        <img src={logoImg} alt="marvel"></img>
      </Content>
    </Container>
  );
