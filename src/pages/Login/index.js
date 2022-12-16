import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo, Input, Button, LoginArea, Btn } from "./styles";
import logoImg from "../../assets/imgs/logo.png";
import { mainColor, inputColor, textColor } from "../../constants/colors";
import { ThreeDots } from "react-loader-spinner";
import { useContext } from "react";

import { Context } from "../../context/AuthContext";

export default () => {
    let { auth, setAuth } = useContext(Context);
    const [loading, setLoading] = useState(false);

    return (
        <LoginArea>
            <Logo src={logoImg} />
            <Input color={textColor} inputColor={inputColor} placeholder="email" />
            <Input color={textColor} inputColor={inputColor} placeholder="senha" />
            <Button color={mainColor}>
                <ThreeDots
                    height="30"
                    width="40"
                    radius="9"
                    color="#FFFFFF"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={loading}
                />
                {loading ? '' : 'Entrar'}
            </Button>

            <Btn color={mainColor}> <Link to="/cadastro">Não tem uma conta? Cadastre-se</Link> </Btn>


        </LoginArea>
    );
}