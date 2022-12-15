import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo, Input, Button, RegisterArea, Btn } from "./styles";
import logoImg from "../../assets/imgs/logo.png";
import { mainColor, inputColor, textColor } from "../../constants/colors";
import { ThreeDots } from "react-loader-spinner";

export default () => {
    const [loading, setLoading] = useState(false);

    return(
        <RegisterArea>
            <Logo src={logoImg} />
            <Input color={textColor} inputColor={inputColor} placeholder="email" />
            <Input color={textColor} inputColor={inputColor} placeholder="senha" />
            <Input color={textColor} inputColor={inputColor} placeholder="nome" />
            <Input color={textColor} inputColor={inputColor} placeholder="foto" />
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
                {loading ? '' : 'Cadastrar'}
            </Button>
            <Link>
                <Btn color={mainColor}>Já tem uma conta? Faça login!</Btn>
            </Link>
        </RegisterArea>
    );
}