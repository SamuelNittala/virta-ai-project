import React from 'react';
import { CardContent, Typography } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Card from '@mui/material/Card'

type personProps = {
    isActive: boolean,
    balance: number,
    name: string,
    email: string,
    phone_no: string
    showFriends: boolean,
    friends: {
        id: number,
        name: string
    }[]
}

const Person = (props: personProps): JSX.Element => {
    let friendsList = props.friends.map(friend => {
        return (
            <ListItem>
                <Typography variant="h4"> {friend.name}</Typography>
            </ListItem>
        )
    })
    return (
        <Card sx={{ margin: '50px',color: props.isActive ? 'black': 'white',backgroundColor: props.isActive ? '#9edb97': '#c97c77'}}>
            <CardContent sx={{margin:'10px'}}>
                <Typography variant="h4"> {props.name} </Typography>
                <Typography variant="h5"> {props.email} </Typography>
                <Typography variant="h6"> {props.balance} </Typography>
                {props.showFriends &&
                    <List>
                        {friendsList}
                    </List>
                }
            </CardContent>

        </Card>
    )
}

export default Person;
