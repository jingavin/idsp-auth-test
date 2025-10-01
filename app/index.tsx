import { SignOutButton } from "@/components/SignOutButton";
import { SignedIn, SignedOut } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <>
    <SignedIn>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>logged in page here</Text>
        <SignOutButton />
      </View>
    </SignedIn>


<SignedOut>
  <Redirect href="/(auth)/sign-in" />
</SignedOut>
    </>
  );
}
