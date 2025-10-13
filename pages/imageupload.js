import React, { useState, useEffect } from "react";
import { View, Button, Image, TextInput, FlatList, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import api from "../server/api";

export default function ProfileScreen() {
  const [nome, setNome] = useState("");
  const [image, setImage] = useState(null);
  const [usuarios, setUsuarios] = useState([]);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaType,
      quality: 1,
    });
    if (!result.canceled) setImage(result.assets[0].uri);
  };

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
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Usuário cadastrado!");
      setNome("");
      setImage(null);
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUsers = async () => {
    const response = await api.get("/user");
    setUsuarios(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={{
          borderWidth: 1,
          marginBottom: 10,
          padding: 8,
          borderRadius: 5,
        }}
      />
      <Button title="Escolher imagem" onPress={pickImage} />
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 200, height: 200, marginVertical: 10 }}
        />
      )}
      <Button title="Salvar usuário" onPress={uploadUser} />

      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10, alignItems: "center" }}>
            <Text>{item.nome}</Text>
            {item.foto_url && (
              <Image
                source={{ uri: item.foto_url }}
                style={{ width: 100, height: 100, borderRadius: 50 }}
              />
            )}
          </View>
        )}
      />
    </View>
  );
}
