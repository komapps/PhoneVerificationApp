import { Component } from "react";
import { View, Text, TextInput, Button } from 'react-native';
import React from 'react';

class PhonePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: ''
        }
    }

    render() {
        return (
            <View>
                <Text style={{ alignSelf: "center" }} >Your phone number</Text>
                <TextInput style={{ margin: 5, alignSelf: "center", borderWidth: 1, width: 200 }} onChangeText={(text) => this.setState({ phoneNumber: text })} />
                <Button title="Send" onPress={() => this.sendMessage()} />
            </View>
        )
    }

    renderRandom() {
        const min = 1000;
        const max = 9999;
        const random = (Math.floor(Math.random() * (max - min + 1)) + min);
        return random;
    }

    sendMessage() {
        var verifyCode = this.renderRandom();
        var phoneNumber = this.state.phoneNumber;
        var request = "https://http-api.d7networks.com/send?username=rjky4496&password=2MwV4reB&dlr-method=POST&dlr-url=https://4ba60af1.ngrok.io/receive&dlr=yes&dlr-level=3&from=smsinfo&content=You verify code is " + verifyCode + " &to=+" + phoneNumber;
        fetch(request).then(res => {
            if (res.ok) {
                const { navigate } = this.props.navigation;
                navigate("VerifyPage", { verifyCode: verifyCode });
            }
            else {
                alert("Error on seding messages. Please try again!");
            }
        }).catch(err => {
            alert("Error on sending message" + err);
        });

    }
}
export default PhonePage;