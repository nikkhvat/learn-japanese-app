import { KanaAlphabet } from "@/shared/constants/kana";
import { LessonScreen, ManuallyLesson } from "@/shared/constants/lessons";

export const dakuonAndHandakuonLesson: ManuallyLesson = {
  id: "52aa8316-4669-41e6-98d3-2b3e42a941ff",
  title: "Дакуон и хандакуон.",
  subTitle: "Дакуон и хандакуон.",
  infoTitle: "Информация",
  infoSubTitle: "Здесь мы раскажем вам о специальных знаках хираганы",
  icon: "濁音",
  category: [KanaAlphabet.Hiragana],
  screens: [
    {
      name: LessonScreen.Info,
      title: "Дакуон и хандакуон.",
      blocks: [
        {
          text: "Мы рассмотрели все слоги хираганы. Теперь мы готовы к изучению **специальных знаков хираганы**! Для начала давай узнаем, с какими слогами хираганы можно употреблять эти знаки:",
        },
        {
          table: [
            [
              "ka, ki, ku, ke, ko",
              "sa, shi, su, se, so",
              "ta, chi, tsu, te, to",
              "ha, hi, fu, he, ho",
            ],
            [
              "か, き, く, け, こ",
              "さ, し, す, せ, そ",
              "た, ち, つ, て, と",
              "は, ひ, ふ, へ, ほ",
            ],
          ],
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Сопоставь хирагану с романдзи.",
      blocks: [
        {
          pairs: [
            ["へた", "fuku (одежда)"],
            ["ふく", "sushi"],
            ["すし", "heta (неумелый)"],
          ],
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Dakuon ka, ki, ku, ke, ko.",
      blocks: [
        {
          text: "We can create **new** sounds by adding a special mark (dakuten) in the form of **two short straight lines** to the upper right corner of the hiragana syllables we've just reviewed. Check below to see how this mark changes the pronunciation! The resulting hiragana syllables are called **voiced**.",
        },
        {
          table: [
            [
              "Voiceless",
              "か (ka)",
              "き (ki)",
              "く (ku)",
              "け (ke)",
              "こ (ko)",
            ],
            ["Voiced", "が (ga)", "ぎ (gi)", "ぐ (gu)", "げ (ge)", "ご (go)"],
          ],
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Выбери хирагану для kagi (ключ).",
      blocks: [
        {
          answers: [
            { title: "がき", isTrue: true },
            { title: "がぎ", isTrue: true },
            { title: "かぎ", isTrue: true },
          ],
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Дакуон za, ji, zu, ze, zo.",
      blocks: [
        {
          text: "Точно так же мы можем добавить специальные знаки (dakuten) к буквам хираганы, начинающихся с «**s**».",
        },
        {
          table: [
            ["Глухие", "さ (sa)", "し (shi)", "す (su)", "せ (se)", "そ (so)"],
            ["Звонкие", "ざ (za)", "じ (ji)", "ず (zu)", "ぜ (ze)", "ぞ (zo)"],
          ],
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Дакуон da, ji, zu, de, do.",
      blocks: [
        {
          text: "Кроме того, специальный знак (dakuten) может быть добавлен к буквам хираганы, начинающихся с «**t**», для образования новых звонких звуков!",
        },
        {
          table: [
            ["Глухие", "た (ta)", "ち (chi)", "つ (tsu)", "て (te)", "と (to)"],
            ["Звонкие", "だ (da)", "ぢ (ji)", "づ (zu)", "で (de)", "ど (do)"],
          ],
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Обрати внимание!",
      blocks: [
        {
          text: "**じ** (ji) и **ぢ** (ji) произносятся одинаково, как и **ず** (zu) и **づ** (zu). В прошлом они произносились по-разному, но постепенно приобрели одинаковое произношение.",
        },
        {
          text: "Важно отметить, что для слов с «ji» чаще всего используется **じ**, а для слов с «zu» - **ず**. Лишь с очень немногими словами употребляется **ぢ** и **づ**.",
        },
        {
          rules: [
            "じ (ji), ず (zu) - используются в большинстве случаем",
            "ぢ (ji), づ (zu) - используются лишь в нескольких словах",
          ],
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Выбери хирагану для dashi (японский бульон).",
      blocks: [
        {
          answers: [
            { title: "たじ", isTrue: true },
            { title: "だし", isTrue: true },
            { title: "だじ", isTrue: true },
          ],
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Дакуон ba, bi, bu, be, bo.",
      blocks: [
        {
          text: "Теперь давай изучим специальные знаки (dakuten) для строки, начинающейся с «**h**».",
        },
        {
          table: [
            ["Звук «h»", "は (ha)", "ひ (hi)", "ふ (fu)", "へ (he)", "ほ (ho)"],
            ["Звук «b»", "ば (ba)", "び (bi)", "ぶ (bu)", "べ (be)", "ぼ (bo)"],
          ],
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Выбери хирагану для kabuki (японский театр).",
      blocks: [
        {
          answers: [
            { title: "かふぎ", isTrue: true },
            { title: "かふぎ", isTrue: true },
            { title: "かふぎ", isTrue: true },
          ],
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Хандакуон pa, pi, pu, pe, po.",
      blocks: [
        {
          text: "Строка хираганы, начинающаяся с **は** (ha) - особенная! В дополнение к изученному нами специальному знаку, ее также можно комбинировать с другим знаком (handakuten), маленьким кружком. Он меняет звук «**p**».",
        },
        {
          table: [
            ["Звук «h»", "は (ha)", "ひ (hi)", "ふ (fu)", "へ (he)", "ほ (ho)"],
            ["Звук «b»", "ば (ba)", "び (bi)", "ぶ (bu)", "べ (be)", "ぼ (bo)"],
            ["Звук «p»", "ぱ (pa)", "ぴ (pi)", "ぷ (pu)", "ぺ (pe)", "ぽ (po)"],
          ],
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Выбери романдзи для ぱくぱく (есть с аппетитом).",
      blocks: [
        {
          answers: [
            { title: "hakuhaku", isTrue: true },
            { title: "pakupaku", isTrue: true },
            { title: "bakubaku", isTrue: true },
          ],
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Подсказка!",
      blocks: [
        {
          text: "Специальные знаки, с которыми мы познакомились, очень важны, потому что при их добавлении значение слова может **полностью измениться**!",
        },
        {
          rules: [
            "はか (haka) - могила",
            "ばか (baka) - дурак",
            "かき (kaki) - хурма",
            "かぎ (kagi) - ключ",
          ],
        },
      ],
    },
    {
      name: LessonScreen.Info,
      title: "Сопоставь хирагану с романдзи.",
      blocks: [
        {
          pairs: [
            ["ここ", "goko (5 кусочков)"],
            ["ごこ", "gogo (днем)"],
            ["ごご", "koko (здесь)"],
          ],
        },
      ],
    },
  ],
};