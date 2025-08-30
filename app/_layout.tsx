import { darkGreen } from "@/constant/colors";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" options={{ headerShown: false }} />
        <Stack.Screen name="SuperAdmin" options={{ headerShown: false }} />
        <Stack.Screen name="Ongoing" options={{ headerShown: false }} />

        <Stack.Screen
          name="Login"
          options={{
            headerShown: true,
            title: "Sign In",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor:darkGreen },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold", fontSize: 22 },
          }}
        />
      </Stack>
    </>
  );
}
