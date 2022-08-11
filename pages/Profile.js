import React,{Component} from "react";
import { Grid } from "semantic-ui-react";
import Layout from "../Components/Layout";
class profile extends Component{
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


