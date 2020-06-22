import { Component } from "react";
import { View, Text, TextInput, Button } from 'react-native';
import React from 'react';

class VerifyPage extends Component {

    componentDidMount() {
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            var code = this.props.route.params.verifyCode;
            if (this.state.verifyCode != code) {
                this.setState({ verifyCode: code });
            }
        });
    }

    componentWillUnmount() {
        this._unsubscribe();
    }

    constructor(props) {
        super(props);
        var code = this.props.route.params.verifyCode;
        this.state = {
            codeActivationFromClient: '',
            verifyCode: code
        }
    }

    render() {
        return (
            <View>
                <Text style={{ alignSelf: "center" }} >Code Activation</Text>
                <TextInput style={{ margin: 5, alignSelf: "center", borderWidth: 1, width: 200 }} onChangeText={(text) => this.setState({ codeActivationFromClient: text })} />
                <Button title="Verify" onPress={() => this.verify()} />
            </View>
        )
    }
    verify() {
        if (this.state.verifyCode == this.state.codeActivationFromClient) {
            const { navigate } = this.props.navigation;
            navigate("MainPage");
        }
        else {
            alert("Verify code is not correct!");
        }
    }
}
export default VerifyPage;