import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Header from '../../components/Header';
import MainFeaturedPost from '../../components/MainFeaturedPost';
import CardAlimentos from '../../components/Alimentos';
import Main from '../../components/Main';
import Sidebar from '../../components/SideBar';
import Footer from '../../components/Footer';
import ExplorerUser from '../../context/ExplorerUser.md';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Transporte', url: '#' },
  { title: 'Produtores', url: 'dashboard' },
  
];

const mainFeaturedPost = {
  title: 'Plataforma de serviços Conecta Agro',
  description:
    "Compre, venda, transporte seus produtos de maneira fácil e segura para a cidade",
  image: 'https://source.unsplash.com/collection/190727/1600x900',
  imgText: 'main image description',
};

const cardAlimentos = [
  {
    title: 'Alface',
    description:
      'A alface mais fresca do Brasil',
    image: 'https://source.unsplash.com/collection/190727/1600x900',
    imageText: 'Image Text',
  },
  {
    title: 'Alface',
    description:
      'A alface mais fresca do Brasil',
    image: 'https://source.unsplash.com/collection/190727/1600x900',
    imageText: 'Image Text',
  },
  {
    title: 'Alface',
    description:
      'A alface mais fresca do Brasil',
    image: 'https://source.unsplash.com/collection/190727/1600x900',
    imageText: 'Image Text',
  },
  {
    title: 'Alface',
    description:
      'A alface mais fresca do Brasil',
    image: 'https://source.unsplash.com/collection/190727/1600x900',
    imageText: 'Image Text',
  },
  {
    title: 'Alface',
    description:
      'A alface mais fresca do Brasil',
    image: 'https://source.unsplash.com/collection/190727/1600x900',
    imageText: 'Image Text',
  },
  {
    title: 'Alface',
    description:
      'A alface mais fresca do Brasil',
    image: 'https://source.unsplash.com/collection/190727/1600x900',
    imageText: 'Image Text',
  },
];

const posts = [ExplorerUser];

const sidebar = {
  title: 'Rotas',
  description:
    'Confira abaixo as rotas disponíveis',
  archives: [
    { title: 'Marechal Floreano > Vitoria', url: '#' },
    { title: 'Venda Nova do Imigrante > Vitoria', url: '#' },
    { title: 'Colatina > Vitoria', url: '#' },
    { title: 'Linhares > Vitoria', url: '#' },
    { title: 'Cachoeiro de Itapemirim > Vitoria', url: '#' },
  ],
  social: [
    { name: 'Instagram', icon: InstagramIcon },
    { name: 'Facebook', icon: FacebookIcon },
    { name: 'WhatsApp', icon: WhatsAppIcon },
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Conecta Agro" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {cardAlimentos.map((post) => ( 
              <CardAlimentos key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* <Main title="From the firehose" posts={posts} /> */}
            <Main title="Explore outras maneiras de usar a plataforma" />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="Obrigado a todos! " description="Essa é a nossa proposta para melhorar a vida do homem do campo " />
    </React.Fragment>
  );
}








// import React from 'react';



// import { Container } from '@material-ui/core'


// const Home = () => {
//     return( 
//         <Container>

//         </Container>
//     )
// }

// export default Home; 

// import { Col, Container,Row,Navbar } from 'react-bootstrap';
// import { FontAwesomeIcon } from "@fortawesome/react-fortawesome";
// import {faTag, faBell, faHome} from "@fortawesome/free-solid-svg-icons"

// function App() {
//   return (
//   <Container fluid>
//     <Navbar expand="lg" variant="light" bg="light">
//   <Container>
//     <Navbar.Brand href="#">Navbar</Navbar.Brand>
//   </Container>
// </Navbar>
//    <footer className='footer'>
//     <Row>
//       <Col xs={4}>
//       <div className='botoes-menu'>
//         <button>
//         <FontAwesomeIcon icon={faHome}/>  
//         Início
//         </button>
//         </div>
//       </Col>
//       <Col xs={4}>
//       <div className='botoes-menu'>
//         <button>
//         <FontAwesomeIcon icon={faTag}/>  
//         Ofertas
//         </button>
//         </div>
//       </Col>
//       <Col xs={4}>
//       <div className='botoes-menu'>
//         <button>
//         <FontAwesomeIcon icon={faBell}/>  
//         Notificações
//         </button>
//         </div>
//       </Col>
//     </Row>
//     </footer>
//   </Container>
//     )
// }