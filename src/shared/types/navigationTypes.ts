import { Stats } from "@/hooks/useStats";
import { CardMode, DifficultyLevelType, PracticeScreenMode, TestMode } from "@/shared/constants/kana";

export type RootStackParamList = {
  Root: undefined;
  Home: undefined;
  Practice: { 
    keysCardModeState: CardMode[], 
    keysModeState: TestMode[], 
    keysDifficultyLevelState: DifficultyLevelType[]
    mode: PracticeScreenMode.Testing | PracticeScreenMode.WordGame
   };
  ChooseAlphabet: {
    screen: "Learning" | "Practice" | "WordBuilding"
  };
  Results: { stats: Stats };
};