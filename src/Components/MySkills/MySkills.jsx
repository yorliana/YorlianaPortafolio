import React from 'react';
import style from './MySkills.module.css'
import logo from '../../assets/logo.png'
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
  
  width: 90vw;
  height: 75vh;
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
  width: 40vw;
  height: 80vh;
  z-index: 3;
  line-height: 1.5;

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
  font-size: 45px;

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



export default function MySkills() {
 
return (

    <>
    <div className={style.skills}>
     <PowerButton />
    <ThemeProvider theme={lightTheme}>
            <Suspense > <SocialIcons  />
                <Box 
                    key="skills"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1 } }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                >
                    <LogoComponent theme="light" />
                  
                   
                    <ParticlesComponent theme="light" />

                    <Main>
                        <Title>
                            <Design width={40} height={40} /> Desing
                        </Title>
                        <Description>
                           Me encanta diseñar , ya que tengo mucha creatividad al momento de realizar un sitio web
                        </Description>
                        <Description>
                            <strong>Me Gusta Diseñar</strong> <br />

                            <p>Web Design</p>

                        </Description>
                        <Description>
                            <strong>Tools</strong> <br />

                            <p>Figma</p>

                        </Description>
                    </Main>

                    <Main>
                        <Title>
                            <Develope width={40} height={40} /> Frontend Developer
                        </Title>
                        <Description>
                        Tengo experiencia y habilidades en el  desarrollo web y Ecommerce.
                       

                        </Description>
                        <Description>
                            <strong>Skills</strong> <br />
                            <p>
                                Html, Css, Js, React, Redux,Expess, Bootstrap, Tailwind, Node, PostgreSQL, MongoDB etc.
                                Pasarelas: MercadoP-Paypal-Stripe
                            </p>
                          
                           
                        </Description>
                        <Description>
                            <strong>Tools</strong> <br />
                            <p>VScode, Github, etc.</p>
                        </Description>
                    </Main>
                   
                </Box>
            </Suspense>
        </ThemeProvider>



</div>

        </>


      

      
    
);

    
  
}