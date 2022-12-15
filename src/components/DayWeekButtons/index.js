import { Button, ButtonsArea } from "./styles";
import { inputColor } from "../../constants/colors";

export default () => {
    let checked = true;

    return(
        <ButtonsArea>
            <Button checked={checked} color={inputColor}> D </Button>
            <Button checked={checked} color={inputColor}> S </Button>
            <Button checked={checked} color={inputColor}> T </Button>
            <Button checked={checked} color={inputColor}> Q </Button>
            <Button checked={checked} color={inputColor}> Q </Button>
            <Button checked={checked} color={inputColor}> S </Button>
            <Button checked={checked} color={inputColor}> S </Button>
        </ButtonsArea>
    );
}