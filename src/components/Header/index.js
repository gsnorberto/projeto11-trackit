
import { HeaderArea, Title, Avatar, Menu, Button } from "./styles";
import { secondaryColor } from "../../constants/colors";
import { useNavigate } from "react-router-dom";

import { clearStorage } from "../../localStorage";
import { useContext } from "react";
import { Context } from "../../context/AuthContext";


export default () => {
    let { setUserData, userData } = useContext(Context);
    let navigate = useNavigate();

    const handleExit = () => {
        clearStorage();
        setUserData(undefined);
        navigate("/");
    }

    return (
        <HeaderArea color={secondaryColor}>
            <Title>TrackIt</Title>
            <Menu>
                <div className="column">
                    <div className="userName">{userData.name}</div>
                    <Button onClick={handleExit}>Sair</Button>
                </div>
                <Avatar src={userData.image}></Avatar>
            </Menu>

        </HeaderArea>
    );
}