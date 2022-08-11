import React,{Component} from "react";
import { Button, Card, Grid, TransitionablePortal } from "semantic-ui-react";
import Layout from "../../Components/Layout";


class question extends Component{
    renderCards(){
        const items = [
            {
                header: "Q1",
                meta:'post id',
                description:'Posted by',
                style:{overflowWrap:'break-word'} //overflowwrap is used to wrap address to second line within card
            },
            {
                header: "Q2",
                meta:'post id',
                description:'Posted by',
                style:{overflowWrap:'break-word'} //overflowwrap is used to wrap address to second line within card
            },
            {
                header: "Q3",
                meta:'post id',
                description:'Posted by',
                style:{overflowWrap:'break-word'} //overflowwrap is used to wrap address to second line within card
            },
        ];

        return <Card.Group items={items}/>;
    }
    render(){
        return (
            <Layout>
                <h3 style={{textalign:"center"}}>List of Unanswered questions</h3>
                {this.renderCards()}
            </Layout> 
        );
    }
}
export default question;