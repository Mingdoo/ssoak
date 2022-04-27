import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Loading from "../Templates/loading";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "../Organisms/Navigation";

const LoadingContainer = () => {
  const [isLoading, setIsLoading] = useState(true);

  // main 페이지의 api 연결되면 수정 예정
  useEffect(() => {
    setTimeout(function () {
      setIsLoading(true);
    }, 3000);
    setIsLoading(false);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <NavigationContainer>
          <BottomTabs />
        </NavigationContainer>
      ) : (
        <Loading />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});

export default LoadingContainer;
