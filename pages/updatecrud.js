import react, { useEffect, useState } from "react";
import { ImageBackground, Alert } from "react-native";
import api from "../server/api";
import Button from "../components/buttom";
import Input from "../components/input";

export default function UpdateCrud({ route, navigation }) {

    const { item } = route.params;

    const [nome, setNome] = useState(item.nome);
    const [sobrenome, setSobrenome] = useState(item.sobrenome);

    const updateDados = async () => {

        try {

            const dados = { nome, sobrenome }
            const upDados = await api.put(`user/${item.id}`, dados);
            Alert.alert("Sucesso!", "Dados Atualizados com Sucesso!");
            navigation.navigate("GetCrud");

        } catch (error) {

            console.error("Erro ao atualizar dados!", error);

        }

    }

    return (



        <ImageBackground source={require("../assets/image/background.jpg")} style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>


            <Input placeholder={"Digite um Valor..."} placeholderTextColor={"black"} value={nome} onChangeText={setNome} />
            <Input placeholder={"Digite um Valor..."} placeholderTextColor={"black"} value={sobrenome} onChangeText={setSobrenome} />

            <Button text={"Atualizar"} onPress={updateDados} />




        </ImageBackground>



    )
}