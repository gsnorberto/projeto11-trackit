import { FooterArea, Button, CenterButton, Border } from "./styles";
import { mainColor } from "../../constants/colors";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import { Context } from "../../context/AuthContext"; 

export default () => {
    let { habitsPercentage } = useContext(Context);
    
    return (
        <FooterArea>
            <Button color={mainColor}>Hábitos</Button>
            <CenterButton color={mainColor}>
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
            <Button color={mainColor}>Histórico</Button>
        </FooterArea>
    );
}