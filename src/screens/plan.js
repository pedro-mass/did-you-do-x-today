import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Container,
  Footer,
  Content,
  Form,
  Button,
  Item,
  Input,
  Label
} from 'native-base';

import PrettyPrint from '../components/pretty-print';
import PlanHeader from './components/plan-header';
import { updatePlan } from '../store/plan';

class Plan extends Component {
  state = {
    name: ''
  };

  static displayName = 'Plan';

  static propTypes = {
    updatePlan: PropTypes.func.isRequired,
    plan: PropTypes.shape({
      name: PropTypes.string
    })
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.plan != nextProps.plan) {
      this.initializeState(nextProps);
    }
  }

  should;

  render() {
    return (
      <Container>
        <PlanHeader />
        <Content>
          <Form>
            <Item inlineLabel>
              <Label>Plan Name</Label>
              <Input
                placehold={this.props.plan.name}
                value={this.state.name}
                onChangeText={name => this.setState({ name })}
              />
            </Item>
          </Form>
          <PrettyPrint name={this.props.plan.name} />
        </Content>
        <Footer style={styles.footer}>
          <View style={styles.actions}>
            <Button large style={styles.button} primary onPress={this.saveForm}>
              <Text style={styles.buttonText}>SAVE</Text>
            </Button>
            <Button large style={styles.button} danger onPress={this.resetForm}>
              <Text style={styles.buttonText}>CANCEL</Text>
            </Button>
          </View>
        </Footer>
      </Container>
    );
  }

  initializeState(props = this.props) {
    this.setState({ ...props.plan });
  }

  resetForm = () => {
    this.initializeState();
  };

  saveForm = () => {
    // TODO: Not updating props
    this.props.updatePlan(this.state);
  };
}

const styles = {
  container: {
    marginTop: 20
  },
  footer: {
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
    marginBottom: 20
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flex: 1
  },
  button: {
    width: '40%'
  },
  buttonText: {
    width: '100%',
    textAlign: 'center',
    color: 'white'
  }
};

const mapStateToProps = ({ plan }) => {
  return { plan };
};

export default connect(mapStateToProps, { updatePlan })(Plan);
