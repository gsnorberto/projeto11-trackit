import { FooterArea, Button, CenterButton, Border } from "./styles";
import { mainColor } from "../../constants/colors";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import { Context } from "../../context/AuthContext"; 

import { useNavigate } from "react-router-dom";

export default () => {
    let navigate = useNavigate();

    const handleNavigate = (link) => {
        navigate(link);
    }
    
    let { habitsPercentage } = useContext(Context);
    
    return (
        <FooterArea>
            <Button onClick={() => handleNavigate("/habitos")} color={mainColor}> Hábitos </Button>
            <CenterButton onClick={() => handleNavigate("/hoje")} color={mainColor}>
                <CircularProgressbar
                    className="progressBar"
                    value={habitsPercentage}
                    text={`Hoje`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#3e98c7",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                />
            </CenterButton>
            <Button onClick={() => handleNavigate("/historico")} color={mainColor}>Histórico</Button>
        </FooterArea>
    );
}