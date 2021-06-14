import React from 'react';
import { makeStyles ,useTheme ,withStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

import MenuItem from '@material-ui/core/MenuItem';


const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

export default function Days() {

  const classes = useStyles();
  const [age, setAge] = React.useState('Pause Campaign');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
  return (
  <>

        
            <FormControl className={classes.margin} style={{marginRight:10}}>
        
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
         
          <MenuItem value={10}>Last 2 days</MenuItem>
          <MenuItem value={20}>Last 3 days</MenuItem>
          <MenuItem value={30}>Last 7 days</MenuItem>
          <MenuItem value={30}>Last 14 days</MenuItem>
          <MenuItem value={30}>Last 30 days</MenuItem>
          <MenuItem value={30}>Last 2 days(including today)</MenuItem>
          <MenuItem value={30}>Last 3 days(including today)</MenuItem>
          <MenuItem value={30}>Last 7 days(including today)</MenuItem>
          <MenuItem value={30}>Last 14 days(including today)</MenuItem>
          <MenuItem value={30}>Last 30 days(including today)</MenuItem>
          <MenuItem value={30}>Lifetime</MenuItem>
          
        </Select>
      </FormControl>
        
</>
  );
}
