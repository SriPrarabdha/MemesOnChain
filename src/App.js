import twitterLogo from './assets/twitter-logo.svg';
import './App.css';
import { useEffect } from 'react';

// Constants
const TWITTER_HANDLE = '_buildspace';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {

  const checkIfWalletConnected = async ()=>{
    try{
      const { solana } = window
      if(solana){
        if(solana.isPhantom){
          console.log("Phantom wallet found");
        }
      }else{
          console.log("Solana object not found get a Phantom Wallet");
      }
    }
    catch(err){
      console.log("Couldn't connect to phantom due to some error check this :");
      console.log(err);
    }
  }

  useEffect(()=>{
    const onLoad = async () => {
      await checkIfWalletConnected();
    }

    window.addEventListener('load' , onLoad);
    return ()=> window.removeEventListener('load' , onLoad)
  } , [] );
  
  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">🖼 GIF Portal</p>
          <p className="sub-text">
            View your GIF collection in the metaverse ✨
          </p>
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
