import { Ionicons } from '@expo/vector-icons';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { auth } from '../../Firebase'; // Make sure this is correctly imported

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    role: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleRegister = async () => {
    const { name, mobile, email, role, password, confirmPassword } = form;

    if (!name || !mobile || !email || !role || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Set display name
      await updateProfile(user, {
        displayName: name,
      });

      console.log("User registered:", user);
      alert("Registration successful!");
      // Optionally navigate or reset form here
    } catch (error) {
      console.error("Registration error:", error);
      alert(error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 justify-center px-6 py-10">

          <Text className="text-3xl font-bold text-blue-700 text-center mb-8">Register</Text>

          <TextInput
            placeholder="Name"
            className="border border-gray-300 rounded-md p-3 mb-4"
            value={form.name}
            onChangeText={(val) => handleChange('name', val)}
          />

          <TextInput
            placeholder="Mobile"
            keyboardType="phone-pad"
            className="border border-gray-300 rounded-md p-3 mb-4"
            value={form.mobile}
            onChangeText={(val) => handleChange('mobile', val)}
          />

          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            className="border border-gray-300 rounded-md p-3 mb-4"
            value={form.email}
            onChangeText={(val) => handleChange('email', val)}
          />

          <View className="border border-gray-300 rounded-md mb-4">
            <RNPickerSelect
              onValueChange={(value) => handleChange('role', value)}
              items={[
                { label: 'Student', value: 'student' },
                { label: 'Teacher', value: 'teacher' },
              ]}
              placeholder={{ label: 'Select Role', value: null }}
              style={{
                inputIOS: { padding: 12, fontSize: 16 },
                inputAndroid: { padding: 10, fontSize: 16, color: '#000' },
              }}
            />
          </View>

          {/* Password Field */}
          <View className="relative mb-4">
            <TextInput
              placeholder="Password"
              secureTextEntry={!showPassword}
              className="border border-gray-300 rounded-md p-3 pr-10"
              value={form.password}
              onChangeText={(val) => handleChange('password', val)}
            />
            <Pressable
              onPress={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-4"
            >
              <Ionicons
                name={showPassword ? 'eye-off' : 'eye'}
                size={20}
                color="gray"
              />
            </Pressable>
          </View>

          {/* Confirm Password Field */}
          <View className="relative mb-6">
            <TextInput
              placeholder="Re-enter Password"
              secureTextEntry={!showConfirmPassword}
              className="border border-gray-300 rounded-md p-3 pr-10"
              value={form.confirmPassword}
              onChangeText={(val) => handleChange('confirmPassword', val)}
            />
            <Pressable
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-4"
            >
              <Ionicons
                name={showConfirmPassword ? 'eye-off' : 'eye'}
                size={20}
                color="gray"
              />
            </Pressable>
          </View>

          <TouchableOpacity
            onPress={handleRegister}
            className="bg-blue-600 rounded-md p-3"
          >
            <Text className="text-white text-center font-bold text-lg">Register</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;
