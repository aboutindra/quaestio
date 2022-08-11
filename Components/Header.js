import React from "react";
import {Menu, Segment} from "semantic-ui-react";
const header=(props)=> {
    return (
        <div>
        <Segment inverted style={{marginTop:'20px'}}>
        <Menu inverted fluid widths={4}>
            
                <a className="item">
                    Homepage
                </a>
            
                <a className="item">
                    Unsolved Questions
                </a>

                <a className="item">
                    Answers
                </a>

                <a className="item">
                    Profile
                </a>

        </Menu>
        </Segment>
        </div>
    );
};
export default header;