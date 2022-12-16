
import { HeaderArea, Title, Avatar } from "./styles";
import patrickImg from "../../assets/imgs/patrick.png";
import { secondaryColor } from "../../constants/colors";

import { useContext } from "react";
import { Context } from "../../context/AuthContext";

export default () => {
    let {userData } = useContext(Context);

    return(
        <HeaderArea color={secondaryColor}>
            <Title>TrackIt</Title>
            <Avatar src={userData.image}></Avatar>
        </HeaderArea>
    );
}