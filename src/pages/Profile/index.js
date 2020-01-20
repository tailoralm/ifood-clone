import React from 'react';

import Person from '../../components/Header/Person';

import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import { Container,
  OptionsList,
  Option,
  Info,
  Title,
  Description,
  Wrapper,
  AdditionalMenu,
  AdditionalOption,
  OptionName,
  } from './styles';


export default function Profile() {
  return (
    <Container>
      <OptionsList>
          <Option onPress={() => {}}>
            <MaterialIcons name="notifications" size={35} color="#333" />
            <Info>
              <Title>Notificações</Title>
              <Description>Minha central de notificações</Description>
            </Info>
              <MaterialIcons name="keyboard-arrow-right" color="#999999" size={20} />
          </Option>
          <Option onPress={() => {}}>
            <MaterialIcons name="account-balance-wallet" size={35} color="#333" />
            <Info>
              <Title>Carteira</Title>
              <Description>Meu saldo e QR code</Description>
            </Info>
              <MaterialIcons name="keyboard-arrow-right" color="#999999" size={20} />
          </Option>
          <Option onPress={() => {}}>
            <MaterialIcons name="local-offer" size={35} color="#333" />
            <Info>
              <Title>Cupons</Title>
              <Description>Meus cupons de desconto</Description>
            </Info>
              <MaterialIcons name="keyboard-arrow-right" color="#999999" size={20} />
          </Option>
          <Option onPress={() => {}}>
            <MaterialIcons name="favorite-border" size={35} color="#333" />
            <Info>
              <Title>Favoritos</Title>
              <Description>Meus locais favoritos</Description>
            </Info>
              <MaterialIcons name="keyboard-arrow-right" color="#999999" size={20} />
          </Option>
          <Option onPress={() => {}}>
            <MaterialIcons name="credit-card" size={35} color="#333" />
            <Info>
              <Title>Formas de pagamento</Title>
              <Description>Minhas formas de pagamento</Description>
            </Info>
              <MaterialIcons name="keyboard-arrow-right" color="#999999" size={20} />
          </Option>
          <Option onPress={() => {}}>
            <MaterialIcons name="local-shipping" size={35} color="#333" />
            <Info>
              <Title>Endereços</Title>
              <Description>Meus endereços de entrega</Description>
            </Info>
              <MaterialIcons name="keyboard-arrow-right" color="#999999" size={20} />
          </Option>
      </OptionsList>

      <AdditionalMenu>
          <AdditionalOption>
            <Wrapper>
              <MaterialCommunityIcons name="lifebuoy" size={35} color="#cecece" />
              <OptionName>Ajuda</OptionName>
            </Wrapper>
            <MaterialIcons name="keyboard-arrow-right" color="#999999" size={20} />
          </AdditionalOption>
          <AdditionalOption>
            <Wrapper>
              <MaterialCommunityIcons name="settings-outline" size={35} color="#cecece" />
              <OptionName>Configurações</OptionName>
            </Wrapper>
            <MaterialIcons name="keyboard-arrow-right" color="#999999" size={20} />
          </AdditionalOption>
          <AdditionalOption>
            <Wrapper>
              <MaterialIcons name="security" size={35} color="#cecece" />
              <OptionName>Segurança</OptionName>
            </Wrapper>
            <MaterialIcons name="keyboard-arrow-right" color="#999999" size={20} />
          </AdditionalOption>
          <AdditionalOption>
            <Wrapper>
              <MaterialIcons name="store-mall-directory" size={35} color="#cecece" />
              <OptionName>Sugerir Restaurantes</OptionName>
            </Wrapper>
            <MaterialIcons name="keyboard-arrow-right" color="#999999" size={20} />
          </AdditionalOption>
          <AdditionalOption>
            <Wrapper>
              <MaterialCommunityIcons name="rocket" size={35} color="#cecece" />
              <OptionName>Seja parceiro</OptionName>
            </Wrapper>
            <MaterialIcons name="keyboard-arrow-right" color="#999999" size={20} />
          </AdditionalOption>
      </AdditionalMenu>
    </Container>
  );
}

Profile.navigationOptions = ({navigation}) => ({
  headerTitleStyle: {
    display: 'none',
  },
  headerStyle: {
    height: 130,
  },
  headerLeft: () => (
    <Person />
  )
})