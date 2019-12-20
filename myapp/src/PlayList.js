import React from "react"
import styled from 'styled-components'
import PictureOne from './PicOne.svg'
import Profile from './me.jpg'
import IconSearch from './IconSearch.svg'

const Djoom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background: linear-gradient(180.09deg, #03707C -0.43%, rgba(189, 229, 249, 0) 80.28%, rgba(255, 255, 255, 0) 99.94%), #97372F;
`

const DjoomFont =  styled.p`
    font-family: Pacifico;
    color:#F7B731;
    font-size: 3rem;
    margin: 2rem 0 1rem 0;
`

const GroupSearch = styled.div`
    position: relative;
`


const Search = styled.input`
    display: flex;
    height: 2rem;
    width: 90vw;
    border-radius: 10px;
    font-size: 1rem;
    background: rgba(206, 214, 224, 0.05);
    color: #E5E5E5;
    border: 3px solid #20B2AA;
    box-sizing: border-box;
    padding: 0.05rem 0.5rem 0.05rem 0.5rem;
    margin: 0;
    ::placeholder {
        color: #bcc4c1;
        font-size: 0.75rem;
    }
    @media only screen and (min-width: 768px) {
        width: 35rem;
        height: 2.5rem;
    }
`

const IconSearchStyle = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    top: 0.3rem;
    right: 0.6rem;
    cursor: pointer;
    position: absolute;
    @media only screen and (min-width: 768px) {
        top: 0.5rem;
        right: 0.5rem;
    }
`

const PlayListStyled = styled.div`
    font-family: Pacifico;
    font-size: 1.25rem;
    color:#F7B731;
    margin: 2rem 0 2rem 0;
`

const List = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    max-width: 35rem;
    height: 30rem;
    border-radius: 10px;
    border: 3px solid #20B2AA;
    box-sizing: border-box;
    margin-bottom: 3rem;
    padding: 0.5rem;
    position: relative;
    @media only screen and (min-width: 768px) {
        padding: 1rem;
        height: 12rem;
    }
`

const Image = styled.img`
    width: 20vh;
    height: 10vh;
    border-radius: 5px;
    margin-right: 1rem;
    @media only screen and (min-width: 768px) {
        height: 6rem;
        width: 12rem;
        margin-right: 2rem;
    }
`

const Detail = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    width: 50%;
    height: 100%;
    padding: 0;
`

const SongName = styled.p`
    font-family: Kanit;
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    color: #E5E5E5;
    margin: 0 0 0.3rem 0 ;
    @media only screen and (min-width: 768px) {
        font-size: 2rem;
    }
`

const Artists = styled.p`
    font-family: Kanit;
    font-style: normal;
    font-weight: normal;
    font-size: 0.6rem;
    color: #E5E5E5;
    margin: 0 0 0.4rem 0;
    @media only screen and (min-width: 768px) {
        font-size: 1rem;
    }
`

const GoupOfTime = styled.div`
    display: flex;
    align-items: center;
`

const MinuteStyle = styled.p`
    font-family: Pacifico;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    color: #FFC312;
    margin: 0;
    @media only screen and (min-width: 768px) {
        font-size: 0.9rem;
    }
`

const  TimeBar = styled.div`
    border: 1px solid #872C24;
    width: 5.75rem;
    margin: 0.1rem 0.25rem 0 0.25rem;
    @media only screen and (min-width: 768px) {
        width: 12vw;
    }
`

const Me = styled.img`
    position: absolute;
    height: 1.25rem;
    width: 1.5rem;
    border-radius: 50%;
    border: 1px solid #20B2AA;
    box-sizing: border-box;
    top: 0.5rem;
    right: 0.5rem;
`


const PlayList = () => {
    return(
        <Djoom>
            <DjoomFont>Djoom</DjoomFont>
                <GroupSearch>
                    <Search placeholder="Songs, Artists, Lyrics, Albums"/>
                    <IconSearchStyle src={IconSearch}/>
                </GroupSearch>
            <PlayListStyled>PlayLists</PlayListStyled>
            <List>
                <Image src={PictureOne}/>
                <Detail>
                    <SongName>ชานชาลา</SongName>
                    <Artists>นิเทศจุฬา</Artists>
                    <GoupOfTime>
                        <MinuteStyle>00.00</MinuteStyle>
                        <TimeBar/>
                        <MinuteStyle>04.30</MinuteStyle>
                    </GoupOfTime>
                </Detail>
                <Me src={Profile}/>
            </List>
            <List>
                <Image src={PictureOne}/>
                <Detail>
                    <SongName>ชานชาลา</SongName>
                    <Artists>นิเทศจุฬา</Artists>
                    <GoupOfTime>
                        <MinuteStyle>00.00</MinuteStyle>
                        <TimeBar/>
                        <MinuteStyle>04.30</MinuteStyle>
                    </GoupOfTime>
                </Detail>
                <Me src={Profile}/>
            </List>
            <List>
                <Image src={PictureOne}/>
                <Detail>
                    <SongName>ชานชาลา</SongName>
                    <Artists>นิเทศจุฬา</Artists>
                    <GoupOfTime>
                        <MinuteStyle>00.00</MinuteStyle>
                        <TimeBar/>
                        <MinuteStyle>04.30</MinuteStyle>
                    </GoupOfTime>
                </Detail>
                <Me src={Profile}/>
            </List>
        </Djoom>
    )
}
export default PlayList