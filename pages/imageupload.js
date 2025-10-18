import React, { useState, useEffect } from "react";
import { View, Button, Image, TextInput, FlatList, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import api from "../server/api";



export default function ImageUpload() {

    const [nome, setNome] = useState("");
    const [image, setImage] = useState(null);
    const [usuario, setUsuario] = useState([]);

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({

            mediaTypes: ImagePicker.mediaTypes,
            quality: 1,

        });

        if (!result.canceled) setImage(result.assets[0].uri)

    }

    const uploadUser = async () => {
        const formData = new FormData();
        formData.append("nome", nome);
        formData.append("file", {
            uri: image,
            name: "foto.jpg",
            type: "image/jpeg",
        });
        try {
            await api.post("/user", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            })

            alert("Usuário Cadastrado")
            setNome("")
            setImage(null)
            fechUser();
        } catch (error) {
            console.error("Erro ao cadastarr usuário", error)
        }
    }


    const fechUser = async () => {
        const response = await api.get("/user");
        setUsuario(response.data)
    }

    useEffect(() => {
        fechUser();
    }, [])



    return (

        <View style={{ padding: 20 }}>
            <TextInput placeholder="Digite o usuário" value={nome} onChangeText={setNome} style={{ borderWidth: 1, marginBottom: 10, padding: 5, borderRadius: 5 }} />
            <Button title="Escolher Imagem" onPress={pickImage} />
            {image && (
                <Image source={{ uri: image }}
                    style={{ width: 100, height: 100, marginVertical: 10 }}
                />
            )}

            <Button title="Salvar Imagem" onPress={uploadUser} />

        </View>

    );

}
