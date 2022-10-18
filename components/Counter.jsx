import { Button, Text, View } from "react-native";

// Criação do nosso primeiro componente
const Counter = () => {

    const logNumero = () => {
        console.log("Você clicou")
    }

    return (
        <View>
            <Text>543854093854093</Text>
            <Button title="Clique" onPress={logNumero}/>
        </View>
    )
}

export default Counter;
