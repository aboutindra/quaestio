import React,{Component} from "react";
import { Card} from "semantic-ui-react";
import Layout from "../Components/Layout";


class answers extends Component{
    renderCards(){
        const items = [
            {
                header: "Q1",
                meta:'post id',
                description:'A1',
                style:{overflowWrap:'break-word'} //overflowwrap is used to wrap address to second line within card
            },
            {
                header: "Q2",
                meta:'post id',
                description:'A2',
                style:{overflowWrap:'break-word'} //overflowwrap is used to wrap address to second line within card
            },
            {
                header: "Q3",
                meta:'post id',
                description:'A3',
                style:{overflowWrap:'break-word'} //overflowwrap is used to wrap address to second line within card
            },
        ];
        
        return <Card.Group items={items}>
                
            </Card.Group>;
    }
    render(){
        return (
            <Layout>
                <h3>List of answered questions</h3>
                {this.renderCards()}
            
            
            </Layout> 
        );
    }
}
export default answers;