import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { getCards } from '../services/api-helper'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  header: {
    fontFamily: "'Red Hat Text', sans-serif",
    padding: '0.4em 0 0 0',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      fontSize: '3rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.9rem'
    },
  },
  body: {
    fontFamily: "'Montserrat', sans-serif",
    padding: '2em 0 0 0',
    display: 'flex',
    flexFlow: 'column wrap',
    alignContent: 'space-around',
    marginBottom: '4em'
  },
  card: {
    margin: '1em auto',
    width: '80%',
  },
  media: {
    height: 140,
  },
}));



export default function Projects() {
  const [cards, setCards] = useState(null);
  const classes = useStyles();

  const setCardsData = async () => {
    const cards = await getCards();
    console.log(cards)
    setCards(cards);
  }

  const builtCards = cards && cards.map((card, index) => {
    return <Card key={index} className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={card.gsx$image.$t}
          title={card.gsx$title.$t}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {card.gsx$title.$t}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {card.gsx$description.$t}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  });

  useEffect(() => {
    setCardsData();
  }, [])
  return (
    <div>
      <Typography className={classes.header} variant='h3'>
        My Work
      </Typography>
      {/* CARDS */}
      <div className={classes.body}>
        {builtCards}
      </div>
    </div>
  )
}
