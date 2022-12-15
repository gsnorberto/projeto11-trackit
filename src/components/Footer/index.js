import { FooterArea, Button, CenterButton, Border } from "./styles";
import { mainColor } from "../../constants/colors";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

export default () => {
    const percentage = 40;
    return (
        <FooterArea>
            <Button color={mainColor}>Hábitos</Button>
            <CenterButton color={mainColor}>
                <CircularProgressbar
                    className="progressBar"
                    value={percentage}
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