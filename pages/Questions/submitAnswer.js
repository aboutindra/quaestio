import React, { useState, Component } from 'react'
import { ProgressBar, Container } from 'react-bootstrap'
import {Form, Input, Message, Button} from "semantic-ui-react"
import { create as ipfsHttpClient } from 'ipfs-http-client'
import Layout from "../../Components/Layout"
const ipfs = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

/*const TextUpload = ({ setUrl }) => {
    const [text, setText] = useState('')
    const [loading, setLoading] = useState(false)
    const [uploaded, setUploaded] = useState(false)
    const [textUrl, setTextUrl] = useState('')

    const uploadTextToIPFS = async (text) => {
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

    const uploadText = async (e) => {
        setLoading(true)
        e.preventDefault()

        try {
            const added = await ipfs.add(text)
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            setTextUrl(url)
            setUrl(url)
            setUploaded(true)
        } catch (err) {
            console.log('Error uploading the file : ', err)
        }
        setLoading(false)
    }

    const uploadButtonLoading = () => {
        if (text === '') return

        if (uploaded) {
            return (
                <h5>
                    ✅{' '}
                    <a href={textUrl} target='_blank' rel='noopener noreferrer'>
                        Answer
                    </a>{' '}
                    Uploaded Successfully ✅
                </h5>
            )
        } else {
            if (loading) {
                return (
                    <Container>
                        <h4>Uploading Text</h4>
                        <ProgressBar animated now={100} />
                        <h4>Please Wait ...</h4>
                    </Container>
                )
            } else {
                return <Button type='submit'>Upload Text</Button>
            }
        }
    }

    const textForm = () => {
        if (loading || uploaded) {
            return (
                <Form>
                    <Form.Group className='mb-3'>
                        <Form.Label>Enter the Answer :</Form.Label>

                        <Form.Control
                            onChange={(e) => setText(e.target.value)}
                            readOnly
                            as='textarea'
                            rows={3}
                        />
                    </Form.Group>

                    {uploadButtonLoading()}
                </Form>
            )
        } else {
            return (
                <Form onSubmit={uploadText}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Enter the Answer :</Form.Label>

                        <Form.Control
                            onChange={(e) => setText(e.target.value)}
                            required
                            as='textarea'
                            rows={3}
                        />
                    </Form.Group>

                    {uploadButtonLoading()}
                </Form>
            )
        }
    }

    return <div>{textForm()}</div>
}
*/

class submitAnswer extends Component{
    state={
        value:'',
        errorMsg:'',
        loading:false
    };
    /*
    onSubmit=async event=>{
        event.preventDefault();

        this.setState({loading:true, errorMsg:''});
        try{

        }catch(err){
            this.setState({errorMsg:err.message});
        }
        this.setState({loading:false,value:''});
    };
    onSubmit={this.onSubmit}error={!!this.state.errorMsg}
    */
    render(){
        return (
            <div>
                <Layout>
                <h3> Submit your Answer</h3>

            <Form>
                <Form.Field>
                    <label> Enter Answer</label>
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

export default submitAnswer;
