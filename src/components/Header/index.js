
import { HeaderArea, Title, Avatar } from "./styles";
import patrickImg from "../../assets/imgs/patrick.png";

export default () => {
    return(
        <HeaderArea>
            <Title>TrackIt</Title>
            <Avatar src={patrickImg}></Avatar>
        </HeaderArea>
    );
}