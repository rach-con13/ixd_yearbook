import React from 'react'
import { Flex,Box } from 'src/Globals/Styles/main'
import { AccentText,Typography } from 'src/Globals/Styles/typography'
import { CategoryScoreBar } from './style'

export default function BingoScore(props) {
    

    return (
    <Flex align='center'>
        <CategoryScoreBar score={props.score} col={props.col}></CategoryScoreBar>
        <Box padding='0px 8px'>
            <Typography style={{fontStyle:'italic'}} size='18px' family='Playfair Display'>
                <AccentText size='18px'  margin='0px 8px'>{props.score}</AccentText>
                {props.category}
            </Typography>
        </Box>
    </Flex>  
    )
}
