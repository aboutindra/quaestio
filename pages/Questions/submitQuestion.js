import Layout from "../../Components/Layout"
import React, { useState, Component } from 'react'
import {Form, Input, Message, Button} from "semantic-ui-react"
import web3 from "../../Ethereum/web3"
class submitQuestion extends Component{
    state={
        value:'',
        errorMsg:'',
        loading:false
    };
    onSubmit= async event=>{
        event.preventDefault();
        this.setState({loading:true, errorMsg:''});
        try{
            const accounts= await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from:accounts[0],
                value:web3.utils.toWei(this.state.value,'ether')
            });
            Router.replaceRoute(`/campaigns/${this.props.address}`);
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
            
            <Form>
                <Form.Field>
                    <label> Enter Question</label>
                    <Input 
                        value={this.state.value}
                        onChange={event=>this.setState({value:event.target.value})}
                    />
                </Form.Field>
                <Message error header="Oops!" content={this.state.errorMsg}></Message>
                <Button primary loading={this.state.loading}> Submit!</Button>
            </Form>
            </Layout>
            </div>
        );
    }
}

export default submitQuestion;