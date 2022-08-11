import React,{Component} from "react";
import { Grid } from "semantic-ui-react";
import Layout from "../Components/Layout";
import web3 from "../Ethereum/web3"
import platform from '../Ethereum/platform'
class profile extends Component{
    state={
        loading: false,
        errormsg:''
    };
    static async getInitialProps(props){
        const {address} = props.query;
        const plat = platform(this.props.address);
        const accounts= await web3.eth.getAccounts();
        const rep = await platform.methods.getPosterReputation(accounts[0]).call();
        return {address, rep};
    }
    
    render(){
        return (
            <Layout>

                        <h1 style={{textAlign:"center"}}>My Profile</h1>
                        <h4>Questions Raised:</h4>
                        <h4>Answers Provided:</h4>
            </Layout> 
        );
    }
}
export default profile;


