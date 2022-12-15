import { Link } from "react-router-dom";
import { Logo, Input, Button, RegisterArea, Btn } from "./styles";
import logoImg from "../../assets/imgs/logo.png";
import { mainColor, inputColor, textColor } from "../../constants/colors";

export default () => {
    return(
        <RegisterArea>
            <Logo src={logoImg} />
            <Input color={textColor} inputColor={inputColor} placeholder="email" />
            <Input color={textColor} inputColor={inputColor} placeholder="senha" />
            <Input color={textColor} inputColor={inputColor} placeholder="nome" />
            <Input color={textColor} inputColor={inputColor} placeholder="foto" />
            <Button color={mainColor}>Cadastrar</Button>
            <Link>
                <Btn color={mainColor}>Já tem uma conta? Faça login!</Btn>
            </Link>
        </RegisterArea>
    );
}