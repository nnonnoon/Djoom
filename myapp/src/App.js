import React from 'react'
import styled ,{ createGlobalStyle } from 'styled-components'
import Key from './key.svg'


const GlobalStyles = createGlobalStyle`
   body {
     margin: 0 auto;
     width: 100%;
   }
`

const Djoom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  /* background: linear-gradient(180deg, rgba(49, 9, 59, 0.9) 99.96%, rgba(87, 75, 144, 0) 99.97%, rgba(80, 18, 98, 0.867188) 99.98%, rgba(52, 14, 65, 0.834375) 99.99%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  background-image: linear-gradient(45deg, #874da2 0%, #c43a30 100%);
`

const ContentLeft = styled.div`
  margin-left: 3rem;
`

const ContentRight = styled.div`
  margin-top: 7.5rem;
`


const TextApp = styled.p`
  font-size: 3rem;
  font-weight: normal;
  font-family: Pacifico;
  color: #FFC312;
  margin: 0;
  position :relative;
  animation: mymovetext 2s;
  @keyframes mymovetext {
    from {left: -200px;}
    to {left: 0px;}
  }
  @media only screen and (min-width: 1280px) {
      font-size: 5rem;
      font-weight: normal;
      font-family: Pacifico;
      color: #FFC312;
      margin: 0;
  }
`

const Underline = styled.div`
  height: 0.5rem;
  width: 8rem;
  :last-child{
    width: 4rem;
    margin: 2rem 0 0 0;
  }
  background-color: rgba(206, 214, 224, 0.75);
  border-radius: 5rem;
  margin: 0.25rem 0 0 0;
  position :relative;
  animation: mymovetext 2s;
  @keyframes mymovetext {
    from {left: -200px;}
    to {left: 0px;}
  }

  @media only screen and (min-width: 1280px) {
    height: 0.5rem;
    width: 13.5rem;
    :last-child{
      width: 8rem;
      margin-top: 2rem;
    }
  }
`

const Click = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #F7D794;
  border: 0.4rem solid #F7B731;
  border-radius: 0.5rem;
  height: 2rem;
  width: 6rem;
  margin: 2rem 0 0 0;
  font-family: Pacifico;
  position :relative;
  animation: mymovetext 2s;
  color: #31093B;
  text-decoration:none;
  @keyframes mymovetext {
    from {left: -200px;}
    to {left: 0px;}
  }
  cursor: pointer;
  :hover{
    background: #FFC312;
  }
  @media only screen and (min-width: 1280px) {
    height: 2rem;
    width: 10rem;
  }
`

const KeyStyle = styled.img`
  width: 12rem;
  height: 17rem;
  margin-left: -4rem;
  position :relative;
  animation: mymove 2s;
  @keyframes mymove {
    from {top: -200px;}
    to {top: 0px;}
  }
  @media only screen and (min-width: 1280px) {
    width: 15rem;
    height: 17rem;
    margin-left: -5rem;
  }
`


const  App = () =>{
  return (
   <Djoom>
     <GlobalStyles/>
     <ContentLeft>
       <TextApp>Djoom</TextApp>
       <Underline/>
       <Click href="https://accounts.spotify.com/en/login?continue=https:%2F%2Faccounts.spotify.com%2Fauthorize%3Fscope%3Dplaylist-modify-public%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fgithub.com%252Faslupin%252FOnQoon%26client_id%3D58661c1cb472432ea8949f217665ccc5">Click</Click>
       <Underline/>
     </ContentLeft>
     <ContentRight>
       <KeyStyle src={Key}/>
     </ContentRight>
   </Djoom>
  )
}

export default App;
