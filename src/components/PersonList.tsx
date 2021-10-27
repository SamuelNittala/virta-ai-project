import * as React from 'react';
import personData from "./people.json";
import Person from "./Person";
import Slider from "./Slider";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box'


const PersonList = (): JSX.Element => {

    const handleBalance = (balance : string) => {
        let arr = Array.from(balance).filter(el => ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].some(ch => ch === el))
        let res = "";
        arr.map(el => res += el);
        return parseFloat(res);
    }

    const [balance, setBalance] = React.useState<number | string | Array<number | string>>(1800,);


    const handleBalanceChange = (balance : any) => {
        setBalance(balance);
    }


    let filteredData = personData.filter(person => handleBalance(person.balance) >= balance);
    let listItems = filteredData.map(person => {
        let showFriends = !person.isActive && (handleBalance(person.balance) < 2000)
        return (
            <Person key={person._id}
                isActive={person.isActive}
                balance={handleBalance(person.balance)}
                name = {person.name}
                email = {person.email}
                phone_no = {person.phone}
                showFriends = {showFriends}
                friends = {person.friends}
            />
        )
    })
    return (
        <div>
            <Slider onBalanceChange={handleBalanceChange}/>
            <Box sx={{ width:'100%',flexWrap:'wrap',  bgcolor: 'Background.paper', display:'flex'}}>{listItems}</Box>
       </div>
   )
}
export default PersonList;
