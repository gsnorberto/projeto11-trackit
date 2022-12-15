import { Link } from "react-router-dom";
import { Logo, Input, Button, LoginArea, Btn } from "./styles";
import logoImg from "../../assets/imgs/logo.png";
import { mainColor, inputColor, textColor } from "../../constants/colors";

export default () => {
    return(
        <LoginArea>
            <Logo src={logoImg} />
            <Input color={textColor} inputColor={inputColor} placeholder="email" />
            <Input color={textColor} inputColor={inputColor} placeholder="senha" />
            <Button color={mainColor}>Entrar</Button>
            <Link>
                <Btn color={mainColor}>Não tem uma conta? Cadastre-se</Btn>
            </Link>
        </LoginArea>
    );
}