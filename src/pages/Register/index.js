import { Link } from "react-router-dom";
import { Logo, Input, Button, RegisterArea, Btn } from "./styles";
import logoImg from "../../assets/imgs/logo.png";
import { mainColor } from "../../constants/colors";

export default () => {
    return(
        <RegisterArea>
            <Logo src={logoImg} />
            <Input placeholder="email" />
            <Input placeholder="senha" />
            <Input placeholder="nome" />
            <Input placeholder="foto" />
            <Button color={mainColor}>Cadastrar</Button>
            <Link>
                <Btn color={mainColor}>Já tem uma conta? Faça login!</Btn>
            </Link>
        </RegisterArea>
    );
}