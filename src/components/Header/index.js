
import { HeaderArea, Title, Avatar } from "./styles";
import patrickImg from "../../assets/imgs/patrick.png";
import { secondaryColor } from "../../constants/colors";

export default () => {
    return(
        <HeaderArea color={secondaryColor}>
            <Title>TrackIt</Title>
            <Avatar src={patrickImg}></Avatar>
        </HeaderArea>
    );
}