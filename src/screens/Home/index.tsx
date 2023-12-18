import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/types/navigationTypes";

import Learning from "./Learning";
import Practice from "./Practice";
import WordBuilding from "./WordBuilding";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import styled from 'styled-components/native';

import { GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler";

type ContainerProps = {
  paddingTop: number;
};

const Container = styled.View<ContainerProps>`
  flex: 1;
  background-color: ${({ theme }: any) => theme.colors.background};
  padding-top: ${({ paddingTop }) => paddingTop + "px"};
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: 700;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.color4};
`

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  height: 54px;
`

const TabLine = styled.View`
  background-color: ${({ theme }) => theme.colors.color4};
  height: 2px;
  width: 32px;
  position: absolute;
  top: 4px;
  left: 10px;
`

type TabProps = {
  active: boolean;
};

const Tab = styled.Text<TabProps>`
  font-size: 15px;
  font-weight: 700;
  color: ${({ active, theme }) =>
    active ? theme.colors.color4 : theme.colors.color3};
`;

const Content = styled.View`
  flex: 1;
`

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  enum Screen {
    Learning,
    Practice,
    WordBuilding
  }

  const [screen, setScreen] = useState(Screen.Learning);

  const screens = [
    { title: "Practice", val: Screen.Learning },
    { title: "Testing", val: Screen.Practice },
    { title: "Word game", val: Screen.WordBuilding },
  ];

  const insets = useSafeAreaInsets();

  const onSwipeEnd = (event: any) => {
    const { translationX } = event.nativeEvent;
    if (translationX > 50 && screen > Screen.Learning) {
      setScreen(screen - 1);
    } else if (translationX < -50 && screen < Screen.WordBuilding) {
      setScreen(screen + 1);
    }
  };


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PanGestureHandler onEnded={onSwipeEnd}>
        <Container paddingTop={insets.top}>
          <Title>Learning</Title>
          <Header>
            {screens.map((item) => (
              <TouchableOpacity
                key={item.val}
                style={{
                  padding: 10
                }}
                onPress={() => setScreen(item.val)}
              >
                <Tab active={item.val === screen}>{item.title}</Tab>
                {item.val === screen && <TabLine />}
              </TouchableOpacity>
            ))}
          </Header>
          <Content>
            {screen === Screen.Learning && <Learning navigation={navigation} />}
            {screen === Screen.Practice && <Practice navigation={navigation} />}
            {screen === Screen.WordBuilding && (
              <WordBuilding navigation={navigation} />
            )}
          </Content>
        </Container>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

export default React.memo(HomeScreen);