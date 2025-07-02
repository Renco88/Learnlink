import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fakeUser = {
    email: "test@example.com",
    password: "123456",
    email: "renco@example.com",
    password: "123456",

  };

  const handleLogin = () => {
    if (email === fakeUser.email && password === fakeUser.password) {
      router.replace("/(tabs)/home"); // ✅ Go to Tabs
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 30,
        backgroundColor: "#f0f4f8",
      }}
    >
      <Text style={{ fontSize: 32, fontWeight: "bold", marginBottom: 20 }}>
        Login
      </Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={{
          backgroundColor: "#fff",
          padding: 15,
          borderRadius: 10,
          marginBottom: 15,
        }}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          backgroundColor: "#fff",
          padding: 15,
          borderRadius: 10,
          marginBottom: 20,
        }}
      />

      <TouchableOpacity
        onPress={handleLogin}
        style={{
          backgroundColor: "#3b82f6",
          padding: 15,
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
      className="mt-4"
        onPress={() => router.push("/register")}
        style={{
          backgroundColor: "#3b82f6",
          padding: 15,
          borderRadius: 10,
          alignItems: "center",
        }}

      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
}
