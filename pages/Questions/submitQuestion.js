import Layout from "../../Components/Layout"
import React, { useState, Component } from 'react'
import {Form, Input, Message, Button} from "semantic-ui-react"
import web3 from "../../Ethereum/web3"
import platform from "../../Ethereum/platform"


class submitQuestion extends Component{
    state={
        value:'',
        errorMsg:'',
        loading:false
    };

    uploadTextToIPFS = async (text) => {
        try {
            const res = await fetch('https://quaestio-ipfs.herokuapp.com/text', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({text: text})
            });
            return await res.json();
        } catch (err) {
            console.log(err);
        }
    };

    onSubmit= async event=>{
        //if(event && event.preventDefault)
        event.preventDefault();
        this.setState({loading:true, errorMsg:''});
        try{
            const text= {value:this.state.value};
            const cid= await this.uploadTextToIPFS(text);
            console.log(cid);
            const accounts = await web3.eth.getAccounts();
            await platform.methods
            .addquery(cid)
            .send({
                from: accounts[0]
            });
        }catch(err){
            this.setState({errorMsg:err.message});
        }
        this.setState({loading:false,value:''});
    };

    render(){
        return (
            <div>
                <Layout>
                <h3> Submit your Question</h3>

            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label> Enter Question</label>
                    <Input
                        value={this.state.value}
                        onChange={event=>this.setState({value: event.target.value})}
                    />
                </Form.Field>
                <Message error header="Oops!" content={this.state.errorMsg}></Message>
                <Button primary loading={this.state.loading} > Submit!</Button>
            </Form>
            </Layout>
            </div>
        );
    }
}

export default submitQuestion;
