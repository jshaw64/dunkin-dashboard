import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import {
  parseTransactions,
  calculateTotal,
  getTransactionsLastNDays,
  getTotalLastNDays
} from '../services/data-parser';

import './styles.css';

const styles = theme => ({
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
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
});

class SimpleCard extends React.Component {
  state = {
    'expanded-30': false,
    'expanded-90': false,
    'expanded-lifetime': false
  };

  handleExpandClick = section => {
    this.setState(state => ({
      [section]: !state[section]
    }));
  };

  renderStatCard(transactions, classes, bull, section) {
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
          <Typography component="p">{getTotalLastNDays(30)}</Typography>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state[section]
              })}
              onClick={() => this.handleExpandClick(section)}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state[section]} timeout="auto" unmountOnExit>
            <CardContent>
              <List>
                {transactions.map(transaction => (
                  <ListItem>
                    <ListItemText
                      primary={`$${transaction.amount}`}
                      secondary={`$${transaction.date}`}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Collapse>
        </CardContent>
      </Card>
    );
  }

  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
      <section className="flex-grid">
        <div className="col">
          {this.renderStatCard(
            getTransactionsLastNDays(30),
            classes,
            bull,
            'expanded-30'
          )}
        </div>
        <div className="col">
          {this.renderStatCard(
            getTransactionsLastNDays(90),
            classes,
            bull,
            'expanded-90'
          )}
        </div>
        <div className="col">
          {this.renderStatCard(
            getTransactionsLastNDays(),
            classes,
            bull,
            'expanded-lifetime'
          )}
        </div>
      </section>
    );
  }
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
