import { Button, ButtonsArea } from "./styles";
import { inputColor } from "../../constants/colors";

export default ({ selectedDays, setSelectedDays, disabled }) => {

    const handleSetDays = (day) => {
        if (selectedDays.includes(day)) { // Remove o dia clicado
            let aux = selectedDays.filter(d => d !== day);
            setSelectedDays(aux);
        } else { // Seleciona o dia clicado
            let aux = [...selectedDays, day];
            aux.sort((a, b) => a - b); // ordena de forma crescente
            setSelectedDays(aux);
        }
    }

    return (
        <ButtonsArea>
            <Button disabled={disabled} onClick={() => handleSetDays(0)} checked={selectedDays.includes(0)} color={inputColor}> D </Button>
            <Button disabled={disabled} onClick={() => handleSetDays(1)} checked={selectedDays.includes(1)} color={inputColor}> S </Button>
            <Button disabled={disabled} onClick={() => handleSetDays(2)} checked={selectedDays.includes(2)} color={inputColor}> T </Button>
            <Button disabled={disabled} onClick={() => handleSetDays(3)} checked={selectedDays.includes(3)} color={inputColor}> Q </Button>
            <Button disabled={disabled} onClick={() => handleSetDays(4)} checked={selectedDays.includes(4)} color={inputColor}> Q </Button>
            <Button disabled={disabled} onClick={() => handleSetDays(5)} checked={selectedDays.includes(5)} color={inputColor}> S </Button>
            <Button disabled={disabled} onClick={() => handleSetDays(6)} checked={selectedDays.includes(6)} color={inputColor}> S </Button>
        </ButtonsArea>
    );

}