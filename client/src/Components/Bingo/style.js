import { Box, Container } from '../../Globals/Styles/main';
import styled from 'styled-components';
import { Title, Typography } from 'src/Globals/Styles/typography';

export const GradientBG = styled.div`
    width:100%;
    height:100%;
    position:fixed;
    z-index:-2;
    background:conic-gradient(from 225.44deg at 49.37% 49.85%, #FFD149 -58.27deg, #BBD5FE 49.77deg, #F4F1E0 146.18deg, #FFD6D6 208.91deg, #FEBBBB 256.3deg, #FFD149 301.73deg, #BBD5FE 409.77deg);
   



`
export const RightGradient = styled.div`
width:100%;
height:100%;


`

export const BingoTitle = styled(Title)`
    line-height:1.9em;

    font-family:"Chonburi";
`
export const LogoImg = styled.img`

    margin-right:80px;
  
`
export const BingoHeader = styled(Container)`
    margin-top:24px;

`
export const BingoItem = styled(Box)`
    background:${props => props.selected ? '#7B61FF' : 'none'};
    color:${props => props.selected ? "white" : '#7B61FF'};
    border-left:${props => !props.selected ? '2px solid #7B61FF;' : 'none'}; 
    border-top:${props => !props.selected ? '2px solid #7B61FF;' : 'none'}; 
    position:relative;
    &:nth-child(5n + 0) {
        border-right:2px solid #7B61FF;
    }
    &:nth-child(1n + 21) {
        border-bottom:2px solid #7B61FF;
    }
`
export const BingoItemText = styled(Typography)`
    position:absolute;
    top:50%;
    left:50%;
    font-size:10px;
    width:80%;
    font-family:ABeeZee;
    text-align:center;
    transform:translate(-50%,-50%);

`
export const CategoryScoreBar = styled(Box)`
    width:60%;
    background:#F1F1F1;
    height:40px;

    margin-top:8px;
    &:before{
        content:"";
        display:block;
        width:${props => props.score};
        height:100%;
        background:${props => props.col};

    }
`