import { lazy, Suspense } from "react";
import {useLocation} from "react-router-dom"
import style from '../Contact/Contact.module.css'
import logo from '../../assets/logo.png'
import PowerButton from '../PowerButton/PowerButton'
import styled, { ThemeProvider } from "styled-components";
import gmail from '../../assets/gmail.png'
import telefono from '../../assets/telefono.png'
import whatsapp from '../../assets/whatsapp.png'  
import { motion } from "framer-motion";
import { lightTheme, mediaQueries } from "../Themes/Themes";
import { Design, Develope } from "../Redes/Redes";

const Box = styled(motion.div)`

  width: 1000px;
  height: 600pxvh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
apacity:0.6;;
  ${mediaQueries(50)`
            flex-direction:column;  
            padding:8rem 0;
height:auto;
            &>*:nth-child(5){
              margin-bottom:5rem;
            }
           
  `};
  ${mediaQueries(30)`
           
            &>*:nth-child(5){
              margin-bottom:4rem;
            }
           
  `};
`;

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 50vw;
  height: 80vh;
  z-index: 3;
  line-height: 1.5;
margin-top:left;
  ${mediaQueries(60)`
            height: 55vh;
  `};

  ${mediaQueries(50)`
              width: 50vw;
              height: max-content;

  `};

  font-family: "Ubuntu Mono", monospace;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${mediaQueries(60)`
          font-size:calc(0.8em + 1vw);
  `};

  ${mediaQueries(50)`
          font-size:calc(1em + 2vw);
          margin-bottom:1rem;
  `};

  ${mediaQueries(30)`
                      font-size:calc(1em + 1vw);
  `};
  ${mediaQueries(25)`
                      font-size:calc(0.8em + 1vw);
                      svg{
                        width:30px;
                        height:30px;
                      }
  `};

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;
const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  ${mediaQueries(50)`
            font-size: calc(0.8em + 1vw);
  `};

  ${mediaQueries(30)`
                      font-size:calc(0.7em + 1vw);
  `};

  ${mediaQueries(25)`
                      font-size:calc(0.5em + 1vw);
  `};

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;
const LogoComponent = lazy(() => import("../../Subcomponents/LogoComponents/LogoComponents"));
const ParticlesComponent = lazy(() => import("../../Subcomponents/ParticlesComponent/ParticlesComponent"));
const BigTitle = lazy(() => import("../../Subcomponents/BigTitle/BigTile"));

const Contact = () =>{
    
    const {pathname} = useLocation()

    return(
<div>
<><div id={style.NavBarContainer}>
      
       
        <PowerButton />

    </div>
    <div className={style.contact}>
    
    <ThemeProvider theme={lightTheme}>
            <Suspense > 
                <Box 
                    key="Contactame"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1 } }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                >
                    <LogoComponent theme="light" />
                  
                   
                    <ParticlesComponent theme="light" />

                    <Main>
                        <Title>
                            Contactame 
                        </Title>
                        <Description>
                           Puedes comunicarte de manera directa a traves de estos medios personales.
                        </Description>
                        <Description>
                        <Suspense >
<a > <img className={style.icon} src={gmail}></img></a><p with='80px'>ing.yorlianam24@gmail.com</p>

<a><img className={style.icon} src={whatsapp}></img></a><p size='80px'>+58 4125911614</p>

</Suspense>

                        </Description>
                        
                    </Main>

                    
                    
                    <BigTitle text="Contactame" top="100%" right="30%" />
                </Box>
            </Suspense>
        </ThemeProvider>



</div>

        </>


      

      
 

        
       

  </div>
        
   
    )
};


export default Contact;