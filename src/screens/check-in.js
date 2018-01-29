import React from 'react';
import { View, Text } from 'react-native';
import { Container, Content, Footer, Button } from 'native-base';

// import PrettyPrint from '../components/pretty-print';

class DidYou extends React.Component {
  static navigationOptions = {
    headerTitle: 'Check In'
  };

  defaultButtonProps = {
    large: true,
    block: true,
    style: styles.button,
    color: '#FFFFFF'
  };

  render() {
    return (
      <Container>
        {/* <PrettyPrint {...this.props} /> */}

        <Content
          contentContainerStyle={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white'
          }}
        >
          <View style={styles.promptContainer}>
            <Text style={styles.prompt}>Did you do</Text>
          </View>
          <View style={{ ...styles.promptContainer, flex: 2 }}>
            <Text style={{ ...styles.prompt, fontSize: 30 }}>[Activity X]</Text>
          </View>
          <View style={styles.promptContainer}>
            <Text style={styles.prompt}>today?</Text>
          </View>
        </Content>
        <Footer>
          <Button {...this.defaultButtonProps} primary>
            <Text style={styles.buttonText}>YES</Text>
          </Button>
          <Button {...this.defaultButtonProps} danger>
            <Text style={styles.buttonText}>NO</Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}

const styles = {
  container: {},
  content: {},
  actions: {},
  promptContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  prompt: {
    fontSize: 20
  },
  button: {
    flex: 1
  },
  buttonText: {
    color: 'white'
  }
};

export default DidYou;
