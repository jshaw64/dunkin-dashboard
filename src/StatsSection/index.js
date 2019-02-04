import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { parseTransactions, calculateTotal } from '../services/data-parser';

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

class SimpleCard extends React.Component {
  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;

    const transactions = parseTransactions();

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            In the last 6 months
          </Typography>
          <Typography variant="h5" component="h2">
            I spent...
          </Typography>
          <Typography component="p">{calculateTotal()}</Typography>
          {transactions.map(transaction => (
            <Fragment>
              <Typography component="p">{transaction.date}</Typography>
              <Typography component="p">{transaction.amount}</Typography>
            </Fragment>
          ))}
        </CardContent>
      </Card>
    );
  }
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
