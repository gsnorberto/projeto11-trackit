import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo, Input, Button, RegisterArea, Btn, Form } from "./styles";
import logoImg from "../../assets/imgs/logo.png";
import { mainColor, inputColor, textColor } from "../../constants/colors";
import { ThreeDots } from "react-loader-spinner";
import axios from 'axios';
import { BASE_URL } from "../../constants/urls";

export default () => {
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    const handleUserRegister = (e) => {
        e.preventDefault();

        if (email === '') {
            alert('Digite um email')
        } else if (password === '') {
            alert("Digite uma senha")
        } else if (name === '') {
            alert("Campo nome não pode ser vazio");
        } else if (image === '') {
            alert("Campo foto não pode ser vazio");
        } else {
            setLoading(true);

            let data = {
                email,
                name,
                image,
                password
            };

            axios.post(BASE_URL + "/auth/sign-up", data)
                .then((res) => {
                    setLoading(false);
                    navigate('/');
                })
                .catch((error) => {
                    alert("Erro ao cadastrar: " + error.response.data.message);
                    setLoading(false);
                });
        }
    }

    return (
        <RegisterArea>
            <Logo src={logoImg} />

            <Form onSubmit={handleUserRegister}>
                <Input
                    data-test="email-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    color={textColor}
                    inputColor={inputColor}
                    placeholder="email"
                    disabled={loading}
                />
                <Input
                    data-test="password-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    color={textColor}
                    inputColor={inputColor}
                    placeholder="senha"
                    disabled={loading}
                />
                <Input
                    data-test="user-name-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    color={textColor}
                    inputColor={inputColor}
                    placeholder="nome"
                    disabled={loading}
                />
                <Input
                     data-test="user-image-input"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    type="text"
                    color={textColor}
                    inputColor={inputColor}
                    placeholder="foto"
                    disabled={loading}
                />
                <Button data-test="signup-btn" disabled={loading} type="submit" color={mainColor}>
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
            </Form>

            <Btn color={mainColor}> <Link  data-test="login-link" to="/">Já tem uma conta? Faça login!</Link> </Btn>

        </RegisterArea>
    );
}