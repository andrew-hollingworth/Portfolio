import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { getCards } from '../services/api-helper'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';

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
    flexFlow: 'row wrap',
    alignContent: 'space-around',
  },
  card: {
    margin: '1em auto',
    maxWidth: '80%',
    width: 320,
  },
  cardAction: {
    height: '100%',
  },
  cardTitle: {
    fontFamily: "'Red Hat Text', sans-serif",
  },
  cardDescription: {
    fontFamily: "'Montserrat', sans-serif",
  },
  cardContent: {
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  media: {
    height: 140,
    backgroundPosition: 'initial',
  },
  chips: {
    margin: '0.4em',
    fontFamily: "'Montserrat', sans-serif",
  }
}));



export default function Projects() {
  const [cards, setCards] = useState(null);
  const classes = useStyles();

  const setCardsData = async () => {
    const cards = await getCards();
    setCards(cards);
  }

  const builtCards = cards && cards.map((card, index) => {
    const technologies = card.gsx$technologies.$t.split(',')
    return <Card key={index} className={classes.card}>
      <CardActionArea className={classes.cardAction} href={card.gsx$url.$t} target='_blank'>
        <CardMedia
          className={classes.media}
          image={card.gsx$image.$t}
          title={card.gsx$title.$t}
        />
        <CardContent className={classes.cardContent}>
          <Typography className={classes.cardTitle} gutterBottom variant="h5" component="h2">
            {card.gsx$title.$t}
          </Typography>
          <Typography className={classes.cardDescription} variant="body2" color="textSecondary" component="p">
            {card.gsx$description.$t}
          </Typography>
          <div>
            {technologies.map((tech, index) => {
              return <Chip
                className={classes.chips}
                key={index}
                size="small"
                label={tech} />
            })}
          </div>
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
