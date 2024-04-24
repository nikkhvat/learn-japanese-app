import React from "react";

import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";

import Draw from "@/entities/education/draw/draw";
import { useThemeContext } from "@/features/settings/settings-theme/theme-context";
import { KanaAlphabet } from "@/shared/constants/kana";
import { LessonDraw } from "@/shared/constants/lessons";
import Button from "@/shared/ui/button/button";

type LessonDrawScreenProps = LessonDraw & {
  next: () => void
  kana: KanaAlphabet
}

const LessonDrawScreen: React.FC<LessonDrawScreenProps> = ({ name, symbol, kana, next }) => {

  const { colors } = useThemeContext();

  const { t } = useTranslation();

  return (
    <View style={styles.container} >
      <View>
        <Text style={[styles.title, {
          color: colors.color4
        }]} >
          {t("lesson.drawLetter")} «{symbol.en}» {t("lesson.inTheCorrectSequence")}.
        </Text>

        <Draw kana={kana} letter={symbol} />
      </View>

      <Button
        customStyles={{ width: "100%" }}
        type={"general"}
        title={t("common.next")}
        onClick={next}
      />
    </View>
  );
};

export default LessonDrawScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center"
  },
});
