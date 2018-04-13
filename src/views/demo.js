import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Link, Title, Hint, Input} from '../ui';
import {Button, Text, Container} from 'native-base';

export default class Demo extends React.Component {
  static navigationOptions = {
    title: 'Demo',
  };

  goToOrderScreen = () => {
    const {navigate} = this.props.navigation;
    navigate('Order', {orderId: '12860037'});
  };

  render() {
    return (
      <Container>
        <Title>Заголовок</Title>
          <Button onPress={this.goToOrderScreen}>
              <Text>Click Me! </Text>
          </Button>
        <Link>Ссылка</Link>
        <Hint color="red">Красный текст</Hint>
        <Hint color="black">Черный текст текст</Hint>
        <Input />
      </Container>
    );
  }
}