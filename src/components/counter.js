import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import {increment,decrement} from '../actions/index.js'
class Counter extends Component{
    render(){
        console.log(this.props.count);
        return(
          <Container>
            <Header>
              <Body>
                <Title>Redux Counter</Title>
              </Body>
            </Header>
            <Content padder>
              <Card>
                <CardItem>
                  <Text>
                    {this.props.count}
                  </Text>
                </CardItem>
              </Card>
              <Button dark bordered onPress= {() => this.props.increment()}>
                <Text>Increment</Text>
              </Button>
              <Button dark bordered onPress= {() => this.props.decrement()}>
                <Text>Decrement</Text>
              </Button>
            </Content>
          </Container>
        );
    }
}

// 数据传给props
// dataObj : state.reducerName ，对应combineReducers中的name
function stateToProps(state){
    return {
        count : state.count
    }
}

// action传给props
// combines our actions into a single object.
function dispatchToProps(dispatch){
    /**
     * 第一个参数 actionCreator
     */
    return bindActionCreators({increment: increment, decrement: decrement},dispatch)
}

// 都传给Counter的props
export default connect(stateToProps,dispatchToProps)(Counter)
