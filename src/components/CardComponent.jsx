import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

import './card.css'
import Searchbar from './Searchbar'

  
class CardComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            filteredFoods: [],
            searchQuery: ""
        }
    }

    searchingQuery = (event) => {
        this.setState(
            () => {
                return {
                    searchQuery: event.target.value
                }
        }, () => {

            let newList = this.props.foods.filter(food => {
                return food.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())
            })
            this.setState({filteredFoods: [].concat(newList)})
        }
        )
    }

    render(){
        let foods = this.props.foods
        return (
            <div className="card-page">
                <h1 className="title">FoodGive</h1>
                <Searchbar searchingQuery={this.searchingQuery} />
                <Box m={2}>
                    <Link underline="always" onClick={() => this.props.setPage("hawker")} className="redirect-button">
                        Hawker View
                    </Link>
                </Box>
                <div className="cardlist">
                    {
                        this.state.searchQuery.length > 0 ?
                        this.state.filteredFoods.map((food,index) => {
                            return (
                                <Card sx={{ maxWidth: 345 }} key={`card-index${index}`}>
                                <CardHeader
                                    avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        R
                                    </Avatar>
                                    }
                                    action={
                                        <CardActions disableSpacing>
                                            <IconButton aria-label="share">
                                            <ShareIcon />
                                            </IconButton>
                                        </CardActions>
                                    }
                                    title={food.name}
                                    subheader="September 14, 2022"
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={require(`../images/${food.image_name}`)}
                                    alt={food.name}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {food.description}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Quantity: {food.quantity}
                                    </Typography>
                                </CardContent>
                                </Card>
                            )
                        })
                        :
                        foods.map((food,index) => {
                            return (
                                <Box display="inline-block">
                                    <Card sx={{ minWidth: 345 }} key={`card-index${index}`}>
                                    <CardHeader
                                        avatar={
                                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                            {food.location[0]}{food.location[1]}
                                        </Avatar>
                                        }
                                        action={
                                            <CardActions disableSpacing>
                                                <IconButton aria-label="share">
                                                <ShareIcon />
                                                </IconButton>
                                            </CardActions>
                                        }
                                        title={food.name}
                                        subheader="April 6, 2022"
                                    />
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={require(`../images/${food.image_name}`)}
                                        alt={food.name}
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary" align="center" style={{ wordWrap: "break-word" }}>
                                            {food.description}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Quantity: {food.quantity}
                                        </Typography>
                                        <Box mt={1}>
                                            <Typography variant="body1" color="green">
                                                {food.location}
                                            </Typography>                                        
                                        </Box>
                                    </CardContent>
                                    </Card>

                                </Box>
                            )
                        })                        
                    }
                </div>

            </div>

        );
        }
    }

export default CardComponent