import React,{Component} from 'react';
import Head from 'next/head';
import Layout from '../Components/Layout';
import {Menu, Button, Grid, Image} from 'semantic-ui-react';
class HomeIndex extends Component{
  render(){
  return (
    <Layout>
      
      <h1 style={{textAlign:"center"}}>Welcome to Stonks Overflow!</h1>
      <Grid style={{marginTop:'20px'}}>
          <Grid.Column width={12}>
            <Grid.Row>
              <h3>The Question and Answers Platform for all your web3 needs</h3>
            </Grid.Row>
            <Grid.Row style={{marginTop:'20px'}}>
              <div>
                Need a question Solved? Follow these simple steps on Quaestio!
                <ul>
                  <li>
                    Submit a question
                  </li>
                  <li>
                    View the answers
                  </li>
                  <li>
                    Let the community select the most appropriate answer for you
                  </li>
                </ul>
              </div>
            </Grid.Row>
            <Grid.Row style={{marginTop:'20px'}}>
              <div> Answer Questions, Improve your reputation and Buidl the network together</div>
            </Grid.Row>
          </Grid.Column>
          
          <Image src="https://media.istockphoto.com/photos/the-gray-and-silver-are-light-black-with-white-the-gradient-is-the-picture-id1202736228?k=20&m=1202736228&s=612x612&w=0&h=ikBRhLNZh4VAUprPT1Br4cVBEA8DOg7-xdQwA1XJtgU=" fluid/>
      </Grid>
      <h1 style={{textAlign:"center"}}> WAGMI!!</h1>
      
    </Layout>
    );
  } 
};

export default HomeIndex;
