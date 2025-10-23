import styled from "styled-components";
import ConfigDark from "../../config/particlesjs-config.json";
import ConfigLight from "../../config/particlesjs-config-light.json";
//import Particles from "react-tsparticles";
import { Particles } from "@tsparticles/react";
import particlesConfig from "../../config/particlesjs-config-light.json";


const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

const ParticlesComponent = (props) => {
    return (
        <Box>
            
            <Particles
                style={{ position: "absolute", top: 0 }}
                params={props.theme === "light" ? ConfigLight : ConfigDark}
                 options={particlesConfig} // Aquí lo usas
            />
        </Box>
    );
};

export default ParticlesComponent;