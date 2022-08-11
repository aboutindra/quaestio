import web3 from "./web3";
import Platform from "./build/Platform.json";

export default ()=>{
    return new web3.eth.Contract(
        JSON.parse(Platform.interface),
        "0x76e4c942837befec41d45e1da54f7ace8b89f3af"
    );
};