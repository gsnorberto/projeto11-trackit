import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo, Input, Button, LoginArea, Btn, Form } from "./styles";
import logoImg from "../../assets/imgs/logo.png";
import { mainColor, inputColor, textColor } from "../../constants/colors";
import { ThreeDots } from "react-loader-spinner";
import axios from 'axios';
import { BASE_URL } from "../../constants/urls";

import { addLocalStorage } from "../../localStorage";
import { Context } from "../../context/AuthContext";

export default () => {
    let { userData, setUserData } = useContext(Context);
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Direciona para página "Hoje" se o usuário já estiver armazenado
    useEffect(() => {
        if(userData){
            navigate("/hoje")
        }
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            alert('Digite seu email e senha')
        } else {
            setLoading(true);

            let data = { email, password}

            axios.post( BASE_URL + '/auth/login' , data)
                .then((response) => {
                    setLoading(false);
                    addLocalStorage(response.data);
                    setUserData(response.data);
                    navigate("/hoje")
                } )
                .catch((error) => {
                    alert(error.response.data.message);
                    setLoading(false);
                })
        }
    }

    return (
        <LoginArea>
            <Logo src={logoImg} />
            <Form onSubmit={handleLogin}>
                <Input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    color={textColor}
                    inputColor={inputColor}
                    placeholder="email"
                    type="email"
                    disabled={loading}
                />
                <Input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    color={textColor}
                    inputColor={inputColor}
                    placeholder="senha"
                    type="password"
                    disabled={loading}
                />
                <Button type="submit" disabled={loading} color={mainColor}>
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
            </Form>

            <Btn color={mainColor}> <Link to="/cadastro">Não tem uma conta? Cadastre-se</Link> </Btn>


        </LoginArea>
    );
}