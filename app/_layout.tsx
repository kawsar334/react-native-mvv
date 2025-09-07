import { maincolor, white } from "@/constant/colors";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="Payment" options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" options={{ headerShown: false }} />
        <Stack.Screen name="SuperAdmin" options={{ headerShown: false }} />
        <Stack.Screen name="Ongoing" options={{ headerShown: false }} />
        <Stack.Screen name="Client" options={{ headerShown: false }} />
        <Stack.Screen name="Quote" options={{ headerShown: false }} />
        <Stack.Screen name="Documents" options={{ headerShown: false }} />

        <Stack.Screen
          name="Login"
          options={{
            headerShown: true,
            title: "Sign In",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: maincolor },
            headerTintColor: white,
            headerTitleStyle: { fontWeight: "bold", fontSize: 22 },
          }}
        />
      </Stack>
    </>
  );
}
