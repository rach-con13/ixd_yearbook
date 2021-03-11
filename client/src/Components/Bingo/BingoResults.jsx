import React from 'react'
import { Container,Box,Grid } from 'src/Globals/Styles/main';
import { Button } from 'src/Globals/Styles/misc';
import { Typography,Paragraph,AccentText } from 'src/Globals/Styles/typography';
import BingoScore from './BingoScore';
import { LogoImg } from './style';
import Logo from '../../Assets/ixd_logo.svg';


export default function BingoResults(props) {
    

    return (
    
    <Container  size='70%' top='40px'>
        <Typography  size='24px' family='Chonburi'>You are a </Typography>
        <Container padding='24px' top='24px' border='2px solid  #7B61FF'  fill='white'  fullWidth>
            <Grid style={{alignItems:'center'}} gap='32px'  cols='minmax(80px,120px) 1fr'>
                <LogoImg  style={{background:'red',width:'100%'}} src={Logo} />
                <Box>
                    <AccentText style={{fontStyle:'italic'}} size='48px' color='#7B61FF' family='Playfair Display'>{props.categories && `${props.categories[0].name} Designer`} </AccentText>
                    <Paragraph margin='16px 0px'>Congratulations, graphic design is no longer your passion...</Paragraph>
                    
                
                </Box>
            </Grid>
            <Container fullWidth top='24px'>
                {props.categories ? props.categories.map((category,index) => {
                    let score = (category.value/5)*100;
                    return <BingoScore col={category.col} key={index} score={`${score}%`} category={category.name} />
                }) : null}
            </Container>
            <Button  fill='#7B61FF' color='white' padding='16px 0px' style={{width:'45%',margin:'24px 0px',fontStyle:'italic'}} variant='fill'>Twitter</Button>
        </Container>
    </Container>
    )
}
