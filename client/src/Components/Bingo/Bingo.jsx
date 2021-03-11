import React, { useState } from 'react'
import { Container, Grid} from "../../Globals/Styles/main";
import {BingoItem, BingoItemText, GradientBG} from './style';
import {bingoListObj} from './BingoList';
import { Button } from 'src/Globals/Styles/misc';
import BingoHeaderContent from './BingoHeader';
import BingoResults from './BingoResults';

export default function Bingo(props) {
    let [bingoList,setBingoList] = useState(bingoListObj);
    let [selectedBingos,setSelected] = useState([]);
    let [categories,setCategories] = useState(null);

    const selectBingoItem = (e) => {
        let bingoItem = e.target.closest('#bingoItem');
        setSelected([...selectedBingos,bingoItem.dataset.id]);
        
    }
    const calculateBingoResults = () => {
        
      let categories = createCategories();
      selectedBingos.forEach(selected => {
           let categoryID = selected.split('_')[0];
            let currentCategory = categories.filter(category => category.id == categoryID)[0];
            currentCategory.value += 1;
          
       })
       
       categories.sort((a,b) => b.value - a.value);
       setCategories(categories);
       setSelected([]);

    }
    const createCategories = () => {
        let categoryNames = [{name:'Over Achiever',col:'#7B61FF'},{name:'Perfectionist',col:'#3BB5CE'},{name:'Chaotic',col:' #FFD149'},{name:'Burnout',col:'#F99FE0'},{name:'Procrastinator',col:'#BBD5FE'}];
        let categories = [];

        categoryNames.forEach((category,index) => {
            categories.push({
                name:category.name,
                col:category.col,
                value:0,
                id:index
            })
        })
        return categories;
    }

    return (
        <Grid cols='1fr 1fr'  style={{height:'100%'}}>
            <GradientBG/>
            <Grid fullWidth rows='auto 1fr'>
                <BingoHeaderContent />

                <Container style={{textAlign:'center'}} padding='16px 0px' size='lg' >
                    <Grid style={{height:'100%'}} fill='white' cols='repeat(5,1fr)'>
                        {bingoList.map((bingo,index) => {
                            let isSelected;
                            let bingoID = `${bingo.id}_bingo_item_${index}`;
                            selectedBingos.includes(bingoID) ? isSelected = true : isSelected = false;

                            return (
                                <BingoItem selected={isSelected} data-id={bingoID} data-category={bingo.id} id='bingoItem' onClick={selectBingoItem} key={index}>
                                    <BingoItemText>{bingo.text}</BingoItemText>
                                </BingoItem>
                            )
                        })}       
                    </Grid>
                    <Button onClick={calculateBingoResults} fill='#7B61FF' color='white' padding='16px 0px' style={{width:'45%',margin:'24px 0px',fontStyle:'italic'}} variant='fill'>BINGO!</Button>
                </Container>
               
            </Grid>
            <Container fullWidth height='100%'>
                 <BingoResults categories={categories} />
            </Container>

       
        </Grid>
    )
}
