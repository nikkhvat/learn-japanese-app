import React from "react";

import Button from "@/components/Button";

import styled from 'styled-components/native';

export type CardModeViewProp = {
  title: string;
  buttons: {
    title: string;
    type: "active" | "inactive" | "weak" | "general";
    key: string | any;
  }[][];
  onButtonClick?: Function
};

const Container = styled.View`
  flex: 1;
  margin-top: 30px;
`

const Title = styled.Text`
  font-size: 17px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.43px;
  color: ${({theme}: any) => theme.colors.color4};
`

const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 15px;
`

const Column = styled.View`
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`

const CardModeView: React.FC<CardModeViewProp> = ({ title, buttons, onButtonClick}) => {

  return (
    <Container>
      <Title>{title}</Title>
      <ButtonsContainer>
        <Column>
          {buttons[0].map((btn, idx) => (
            <Button
              onClick={() => onButtonClick?.(0, idx)}
              key={btn.title}
              customStyles={{flex: 1}}
              title={btn.title}
              type={btn.type}
            />
          ))}
        </Column>
        <Column>
          {buttons[1].map((btn, idx) => (
            <Button
              onClick={() => onButtonClick?.(1, idx)}
              key={btn.title}
              customStyles={{flex: 1}}
              title={btn.title}
              type={btn.type}
            />
          ))}
        </Column>
      </ButtonsContainer>
    </Container>
  );
};


export default CardModeView;