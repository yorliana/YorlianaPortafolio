import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
//import Card from 'react-bootstrap/Card';
import style from '../About/About.module.css';
import logo from '../../assets/logo.png';
import avatarnuevo from '../../assets/avatarnuevo.png';
import PowerButton from '../PowerButton/PowerButton';
import { motion } from "framer-motion";
import styled, { ThemeProvider } from "styled-components";
import { lazy, Suspense } from "react";
import { lightTheme, mediaQueries } from "../Themes/Themes";

import { Design, Develope } from "../Redes/Redes";


const SocialIcons = lazy(() => import("../SociaIIcons/SocialIcons"));

const LogoComponent = lazy(() => import("../../Subcomponents/LogoComponents/LogoComponents"));
const ParticlesComponent = lazy(() => import("../../Subcomponents/ParticlesComponent/ParticlesComponent"));
const BigTitle = lazy(() => import("../../Subcomponents/BigTitle/BigTile"));

const Box = styled(motion.div)`

  width: 1500px;
  height: 400px;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 5rem;
 margin-top: 50px;

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
  width: 55vw;
  height: 80vh;
  z-index: 3;
  line-height: 1.5;
margin:50px;
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
      panding:20px;
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

const About = () =>{
    
   
  
    return(
         
    
    
        <>
      

      <div id={style.NavBarContainer}>
      
        <img className={style.img} src={logo} width={'150px'} />
        <PowerButton />

    </div>
<div className={style.about}>
<PowerButton/>
   

     <div className={style.fondo} >     
    <ThemeProvider theme={lightTheme}>
      
            <Suspense >
            
                <Box
                    key="About"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1 } }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                >
                    <LogoComponent theme="light" />
             
                    <ParticlesComponent theme="light" />
                  
                         

                    <Main>  
                      
                        <Title>
                        <Develope width={40} height={40} /> Developer
                        <img className={style.avatar} src={avatarnuevo} width={'50px'}/>
                        </Title>
                        <Description>
                        Soy Ingeniero de Telecomunicaciones y programadora full stack. Soy una mujer 
                        creativa y apasionada por lo que hago, tomare tus objetivos como un reto para
                        ofrecerte la mejor experiencia y cada proyecto convertirlo en una realidad.
                        </Description>
                        
                        <Description>
                            <strong>Aventurera</strong> <br />

                        </Description>
                    
                    </Main>
                    <BigTitle  text="About" top="5%" right="30px" /> 
                </Box>
            </Suspense>
        </ThemeProvider>





      
     
  
  
      
       
       </div>
      <br />
      <div>
        
      </div>
      
</div>
      

      
    </>
   
  );
}
        
       
  

export default About;