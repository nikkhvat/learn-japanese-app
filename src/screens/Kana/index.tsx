import React, { useMemo, useState } from "react";
import {
  View,
  ScrollView,
} from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import letters, { ILetter, lettersDakuon, lettersHandakuon, lettersYoon } from "../../data/letters";

import { Audio } from "expo-av";
import { RootStackParamList } from "@/types/navigationTypes";
import { StackNavigationProp } from "@react-navigation/stack";

import styled from 'styled-components/native';
import KanaTable from "@/components/KanaTable";
import KanaModal from "@/components/KanaModal";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const Container = styled.View<{ paddingTop: number }>`
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.color1};
  padding-top: ${({ paddingTop }) => paddingTop + "px"};
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: 700;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.color4};
`;

const Content = styled.View`
  padding-left: 20px;
  padding-right: 20px;
`

const Tabs = styled.View`
  padding: 2px;
  flex-direction: row;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.second_color4};
  border-radius: 12px;
  margin-top: 8px;
`;

const Tab = styled.TouchableOpacity<{ active: boolean }>`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 46px;
  border-radius: 10px;
  background-color: ${({ theme, active }) =>
    active
      ? theme.colors.color1
      : "transparent"};
`;

const TabText = styled.Text`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.color4};
`;

const NameContainer = styled.View`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-color: ${({theme}) => theme.colors.color2};
  border-bottom-width: 1px;
`

const Name = styled.Text`
  color: ${({theme}) => theme.colors.color4};
  font-size: 17px;
  font-weight: 700;
`

export const Kana: React.FC<HomeScreenProps> = ({ navigation }) => {
  Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState("Hiragana");

  const rows = useMemo(
    () =>
      letters.map((item) =>
        item[0].en !== "WA" && item[0].en !== "YA" && item[0].en !== "N"
          ? item
          : item[0].en === "WA"
            ? [item[0], 0, 0, 0, item[1]]
            : item[0].en === "N"
              ? [0, 0, item[0], 0, 0]
              : [(item[0], 0, item[1], 0, item[2])]
      ),
    []
  );
  const rowsDokuon = useMemo(() => lettersDakuon.map((item) => item), []);
  const rowsHandakuon = useMemo(() => lettersHandakuon.map((item) => item), []);
  const rowsYoon = useMemo(() => lettersYoon.map((item) => item), []);

  const [isModalVisible, setModalVisible] = useState(null as null | [ILetter, number, number, string]);

  const closeModal = () => setModalVisible(null);  

  const list = ["basic", "dokuon", "handakuon", "yoon"];
  const listLetters = [rows, rowsDokuon, rowsHandakuon, rowsYoon]

  function isLetter(item: any) {
    return typeof item === 'object';
  }

  function findNext(isModalVisible: null | [ILetter, number, number, string]) {
    if (!isModalVisible) return;

    let [currentLetter, rowIndex, colIndex, listName] = isModalVisible;
    let listIndex = list.indexOf(listName);

    do {
      colIndex++;
      if (colIndex >= listLetters[listIndex][rowIndex].length) {
        rowIndex++;
        colIndex = 0;
        if (rowIndex >= listLetters[listIndex].length) {
          listIndex = (listIndex + 1) % list.length;
          rowIndex = 0;
        }
      }
    } while (!isLetter(listLetters[listIndex][rowIndex][colIndex]) && rowIndex < listLetters[listIndex].length);

    return [listLetters[listIndex][rowIndex][colIndex], rowIndex, colIndex, list[listIndex]];
  }

  function findPrev(isModalVisible: null | [ILetter, number, number, string]) {
    if (!isModalVisible) return;

    let [currentLetter, rowIndex, colIndex, listName] = isModalVisible;
    let listIndex = list.indexOf(listName);

    do {
      colIndex--;
      if (colIndex < 0) {
        rowIndex--;
        if (rowIndex < 0) {
          listIndex = (listIndex - 1 + list.length) % list.length;
          rowIndex = listLetters[listIndex].length - 1;
        }
        colIndex = listLetters[listIndex][rowIndex].length - 1;
      }
    } while (!isLetter(listLetters[listIndex][rowIndex][colIndex]) && rowIndex >= 0);

    return [listLetters[listIndex][rowIndex][colIndex], rowIndex, colIndex, list[listIndex]];
  }

  const prev = () => {
    const res: any = findPrev(isModalVisible);

    if (res !== undefined) {
      setModalVisible(res);
    }
  }
  
  const next = () => {
    const res: any = findNext(isModalVisible);

    if (res !== undefined) {
      setModalVisible(res);
    }
  }

  return (
    <Container paddingTop={insets.top}>
      <Title>Kana</Title>
      <Content>
        <Tabs>
          <Tab active={activeTab === "Hiragana"} onPress={() => setActiveTab("Hiragana")} >
            <TabText>Hiragana</TabText>
          </Tab>
          <Tab active={activeTab === "Katakana"} onPress={() => setActiveTab("Katakana")} >
            <TabText>Katakana</TabText>
          </Tab>
        </Tabs>
      </Content>
      <ScrollView>
        <NameContainer>
          <Name>Basic</Name>
        </NameContainer>
        <KanaTable type="basic" data={rows} kana={activeTab} onClick={setModalVisible} />
        <NameContainer>
          <Name>Dakuon</Name>
        </NameContainer>
        <KanaTable type="dokuon" data={rowsDokuon} kana={activeTab} onClick={setModalVisible} />
        <NameContainer>
          <Name>Handakuon</Name>
        </NameContainer>
        <KanaTable type="handakuon" data={rowsHandakuon} kana={activeTab} onClick={setModalVisible} />
        <NameContainer>
          <Name>Yoon</Name>
        </NameContainer>
        <KanaTable type="yoon" data={rowsYoon} kana={activeTab} onClick={setModalVisible} />
        <View style={{ marginBottom: 120 }}></View>
      </ScrollView>
      {isModalVisible !== null && (
        <KanaModal
          show={isModalVisible === null ? false : true}
          kana={activeTab}
          changeKata={(kata: string) => setActiveTab(kata)}
          letter={isModalVisible[0]}
          closeModal={() => closeModal()}
          drawSymbol={() => {}}
          prevLetter={() => prev()}
          nextLetter={() => next()}
        />
      )}
    </Container>
  );
};

export default Kana;