import React from 'react'
import { Grid ,Container} from 'src/Globals/Styles/main'
import { AccentText, Paragraph, Typography } from 'src/Globals/Styles/typography'
import { BingoHeader ,LogoImg,BingoTitle} from './style'
import Logo from '../../Assets/ixd_logo.svg';
export default function BingoHeaderContent(props) {
    

    return (

        
    <BingoHeader size='lg' >
        
    
        <Grid style={{alignItems:'center'}} cols='auto 1fr'>  
            <BingoTitle >What type of <AccentText family='Playfair Display' size='48px' color='#FFD149'>IXD</AccentText> <AccentText family='Playfair Display' size='48px' color='#7B61FF'>Designer</AccentText>are you?</BingoTitle>
            <LogoImg src={Logo} />
        </Grid>
        <Container >
         <Typography family='ABeeZee' size='18px'>Rules</Typography>
         <Paragraph family='ABeeZee' style={{width:'80%'}}>
         Choose as many squares you identify with! Once you’re done click the bingo button
         </Paragraph>
        </Container>
    </BingoHeader>
    )
}
