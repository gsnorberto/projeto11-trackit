import { NotFoundArea, Title, Desc } from "./styles"
import { textColor, mainColor } from "../../constants/colors";

export default () => {
    return(
        <NotFoundArea>
            <Title color={mainColor}>DESCULPE :(</Title>
            <Desc color={textColor}>404: Não conseguimos encontrar esta página</Desc>
        </NotFoundArea>
    );
}