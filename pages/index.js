import React from 'react'
import ReactPlayer from 'react-player'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PrimarySearchAppBar from './bar'
import {Card, Grid} from "@material-ui/core"
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { FormControl } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import CardMedia from '@material-ui/core/CardMedia';
import SvgIcon from '@material-ui/core/SvgIcon';
import ComputerIcon from '@material-ui/icons/Computer';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import CheckIcon from '@material-ui/icons/Check';
import { Button } from '@material-ui/core';
import ReplyIcon from '@material-ui/icons/Reply';
import { ExpansionPanel } from '@material-ui/core';
import Carousel from 'react-elastic-carousel';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import SwipeableTextMobileStepper from './banner'
//import kingIcon from './../public/King.svg'

const useStyles = makeStyles({
  gridc: {
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
  },
  Videocard:{
    
    maxWidth: 900,

  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'baseline',
    width: '80%',
  },
  contenttitle:{
    fontWeight:'600',
    maxWidth: '90%',
  },
  headertitle:{
    fontWeight:'600'
  },
  froot: {
    padding:"32px 80px 48px 80px",
  },
  feature:{
    height:'120px',
    width: 'auto',
    marginBottom:'12px',
  },
  raw:{
    display:'flex',
    width: '100%',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px'
  },
  arrowimage:{
    height:"auto",
    width: "75px",
    marginLeft:"8px",
  },
  uimage:{
    maxWidth: '80%',
    height: 'auto',
    overflow: 'hidden',
  },
  contentbody:{
    maxWidth:"90%",
  },
  pricecard:{
    width: "269px",
    padding: "32px 24px 32px 24px",
    borderRadius: "10px",
    boxShadow: "0px 1px 20px 0px rgb(230, 255, 255)",
    position: "relative",
    marginLeft: "50%",
  },
  priceitemcontainer:{
    display: "flex",
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"center",
    padding:"8px 0px 0px 0px",
  },
  featureitemcontainer:{
    display: "flex",
    justifyContent:"space-between",
    padding:"10px 0px 10px 0px",
  },
  featureitemtext:{
    maxWidth: "80%",
    fontSize: "15px",
    lineHeight: "1.2",
  },
  textField:{
    marginLeft:"1px",
    marginRight:"1px",
    width: '25ch',
  },
  sendQueryButton:{
    size:"large",
    marginTop:"16px"
  },

});

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <PrimarySearchAppBar/>
      <Grid container direction="column">
        <Grid item md={12} xs={12}>
        <div className={classes.raw}>
        <SwipeableTextMobileStepper></SwipeableTextMobileStepper>
        </div>
        </Grid>
        <Grid container>
        <div className={classes.raw}>
        <Typography variant="h5" className={classes.headertitle}>Unlock all content</Typography>
        </div>
        <Grid container style={{backgroundColor:"rgb(230, 255, 255)"}} className={classes.featureitemcontainer}>
          
          <Grid item md={6} align='center' >
            <Paper square={false} className={classes.pricecard} style={{position:"relative",overflow:"visible"}}>
            <div className={classes.priceitemcontainer}>
            <Typography variant="h6" className={classes.headertitle}>Topper</Typography>
            <Typography variant="body2">As low as</Typography>
            <Typography variant="h4" className={classes.headertitle} style={{letterSpacing:"1px"}}>
              <span style={{fontFamily:"Arial"}}>
              ₹
              </span>599</Typography>
              
            </div>
            <Button variant="outlined">HELLO</Button>
            </Paper>
          </Grid>
          
          <Grid item md={6} align='center'>
          <Paper square={false} className={classes.pricecard} style={{position:"relative",overflow:"visible",marginLeft:"0%",marginRight:"50%",border:"5px solid #0678EA"}}>
            <div className={classes.priceitemcontainer} >
            <Typography variant="h6" className={classes.headertitle}>Exam Special</Typography>
            <Typography variant="body2">As low as</Typography>
            <Typography variant="h4" className={classes.headertitle} style={{letterSpacing:"1px"}}>
              <span style={{fontFamily:"Arial"}}>
              ₹
              </span>199</Typography>
              </div>
            </Paper>
            </Grid>
        </Grid>
        </Grid>

        <Grid container stlyle={{backgroundColor:"#0360BD"}}>
        <div className={classes.raw}>
        <Typography variant="h4" className={classes.headertitle} style={{marginBottom:"16px"}}>Get Unlimited access to</Typography>
        </div>
        <Grid item md={3} xs={12} sm={6} align='center'>
        <Paper square={false} className={classes.pricecard} style={{position:"relative",marginLeft:"20%",overflow:"visible",border:"5px solid #0678EA"}}>
            <div className={classes.priceitemcontainer} >
              <MenuBookOutlinedIcon style={{ fontSize: 70,marginBottom:"15%" }}/>
            <Typography variant="h5" className={classes.headertitle}>6 Million+</Typography>
            <Typography variant="body2" className={classes.headertitle}>pages of Notes</Typography>
            </div>
            </Paper>
        </Grid>
        <Grid item md={3} xs={12} sm={6} align='center'>
        <Paper square={false} className={classes.pricecard} style={{position:"relative",marginLeft:"10%",overflow:"visible",border:"5px solid #0678EA"}}>
        <div className={classes.priceitemcontainer} >
            <OndemandVideoOutlinedIcon style={{ fontSize: 70,marginBottom:"15%" }}/>
            <Typography variant="h5" className={classes.headertitle}>1 Lakh+</Typography>
            <Typography variant="body2" className={classes.headertitle}>Video Lectures</Typography>
            </div>
            </Paper>
        </Grid>
        <Grid item md={3} xs={12} sm={6} align='center'>
        <Paper square={false} className={classes.pricecard} style={{position:"relative",marginLeft:"0%",overflow:"visible",border:"5px solid #0678EA"}}>
        <div className={classes.priceitemcontainer} >
              <MenuBookOutlinedIcon style={{ fontSize: 70,marginBottom:"15%" }}/>
            <Typography variant="h5" className={classes.headertitle}>2.5 Lakh+</Typography>
            <Typography variant="body2" className={classes.headertitle}>Long Questions</Typography>
            </div>
            </Paper>
        </Grid>
        <Grid item md={3} xs={12} sm={6} align='center'>
        <Paper square={false} className={classes.pricecard} style={{position:"relative",overflow:"visible",marginRight:"20%",marginLeft:"0%",border:"5px solid #0678EA"}}>
        <div className={classes.priceitemcontainer} >
              <MenuBookOutlinedIcon style={{ fontSize: 70,marginBottom:"15%" }}/>
            <Typography variant="h5" className={classes.headertitle}>1 Lakh+</Typography>
            <Typography variant="body2" className={classes.headertitle}>MCQ and Short</Typography>
            </div>
            </Paper>
        </Grid>
        </Grid>
        
        <Grid container className={classes.froot}>
        <div className={classes.raw}>
        <Typography variant="h4" className={classes.headertitle}>
        Your Subcriptin to <span style={{color:"#FFB400"}}>Prime</span> computer science <br/> enginnerring for IndraPrastha University Includes
        </Typography>
        </div>

        </Grid>

        <Grid container className={classes.froot}>
        <div className={classes.raw}>
        <Typography variant="h4" className={classes.headertitle}>
        Understand LectureNotes <span style={{color:"#FFB400"}}>Prime</span> Better
        </Typography>
        </div>
        <div className={classes.raw}>
        <Card className={classes.Videocard}>
        <ReactPlayer url='https://www.youtube.com/watch?v=IZ4fGhJ6QhQ&t=4s' />
        </Card>
        </div>
        </Grid>
        
        <Grid container>

        </Grid>

        <Grid container className={classes.froot}>
        <div className={classes.raw}>
        <Typography variant="h4" className={classes.headertitle}>
        What More? <br/>
        </Typography>
        
        </div>
        <Grid item md={4} xs={12} sm={6} align='center'><img className={classes.feature} src="/public/reuseble.svg" />
        <Typography variant="body1" style={{fontWeight:"600",lineHeight:"1.55rem",marginBottom:"32px"}}>Download Notes <br/> Offline</Typography>
        </Grid>
        <Grid item md={4} xs={12} sm={6} align='center'><img className={classes.feature} src="/public/reuseble.svg" />
        <Typography variant="body1" style={{fontWeight:"600",lineHeight:"1.55rem",marginBottom:"32px"}}>AI powered <br/> learning Analytics</Typography>
        </Grid>
        <Grid item md={4} xs={12} sm={6} align='center'><img className={classes.feature} src="/public/reuseble.svg" />
        <Typography variant="body1" style={{fontWeight:"600",lineHeight:"1.55rem",marginBottom:"32px"}}>Ad Free <br/> Experience</Typography>
        </Grid>
        <Grid item md={4} xs={12} sm={6} align='center'><img className={classes.feature} src="/public/reuseble.svg" />
        <Typography variant="body1" style={{fontWeight:"600",lineHeight:"1.55rem",marginBottom:"32px"}}>Priority <br/> Support</Typography>
        </Grid>
        <Grid item md={4} xs={12} sm={6} align='center'><img className={classes.feature} src="/public/reuseble.svg" />
        <Typography variant="body1" style={{fontWeight:"600",lineHeight:"1.55rem",marginBottom:"32px"}}>Truly Unlimited access <br/> to every note</Typography>
        </Grid>
        <Grid item md={4} xs={12} sm={6} align='center'><img className={classes.feature} src="/public/reuseble.svg" />
        <Typography variant="body1" style={{fontWeight:"600",lineHeight:"1.55rem",marginBottom:"32px"}}>Practice 1000s of <br/> MCQ on the go</Typography>
        </Grid>
        <Grid item md={4} xs={12} sm={6} align='center'><img className={classes.feature} src="/public/reuseble.svg" />
        <Typography variant="body1" style={{fontWeight:"600",lineHeight:"1.55rem",marginBottom:"32px"}}>Access on <br/> Mobile Apps</Typography>
        </Grid>
        <Grid item md={4} xs={12} sm={6} align='center'><img className={classes.feature} src="/public/reuseble.svg" /> 
        <Typography variant="body1" style={{fontWeight:"600",lineHeight:"1.55rem",marginBottom:"32px"}}>Solution for <br/> all questions</Typography>
        </Grid>
        <Grid item md={4} xs={12} sm={6} align='center'><img className={classes.feature} src="/public/reuseble.svg" /> 
        <Typography variant="body1" style={{fontWeight:"600",lineHeight:"1.55rem",marginBottom:"32px"}}>Practive papaers <br/> for you</Typography>
        </Grid>
        </Grid>
        <Grid container>
          <Grid item md={6}>

          </Grid>
          <Grid item md={6} align='center'>
          <div className={classes.root}>
            <Typography variant="h4" className={classes.headertitle} style={{margin:"8px 0px"}} align="left">Loved by over 2.2 Million<br/>Students</Typography>
            <Typography >As a college student living on a college budget, I love how easy it is to <br></br> earn gift cards just by submitting my notes</Typography>
            </div>
            

          </Grid>
        </Grid>
        <Grid container>
        <div className={classes.raw}>
        <Typography variant="h5" className={classes.headertitle}>Unlock all content</Typography>
        </div>
        <Grid container style={{backgroundColor:"rgb(230, 255, 255)"}} className={classes.featureitemcontainer}>
          
          <Grid item md={4} align='center' >
            <Paper square={false} className={classes.pricecard} style={{position:"relative",overflow:"visible"}}>
            <div className={classes.priceitemcontainer}>
            <Typography variant="h6" className={classes.headertitle}>Topper</Typography>
            <Typography variant="body2">As low as</Typography>
            <Typography variant="h4" className={classes.headertitle} style={{letterSpacing:"1px"}}>
              <span style={{fontFamily:"Arial"}}>
              ₹
              </span>239</Typography>
              
            </div>
            </Paper>
          </Grid>

          <Grid item md={4} align='center' >
            <Paper square={false} className={classes.pricecard} style={{position:"relative",overflow:"visible",marginLeft:"0%"}}>
            <div className={classes.priceitemcontainer}>
            <Typography variant="h6" className={classes.headertitle}>Topper</Typography>
            <Typography variant="body2">As low as</Typography>
            <Typography variant="h4" className={classes.headertitle} style={{letterSpacing:"1px"}}>
              <span style={{fontFamily:"Arial"}}>
              ₹
              </span>499</Typography>
              
            </div>
            </Paper>
          </Grid>
          
          <Grid item md={4} align='center'>
          <Paper square={false} className={classes.pricecard} style={{position:"relative",overflow:"visible",marginLeft:"0%",marginRight:"50%",border:"5px solid #0678EA"}}>
            <div className={classes.priceitemcontainer} >
            <Typography variant="h6" className={classes.headertitle}>Exam Special</Typography>
            <Typography variant="body2">As low as</Typography>
            <Typography variant="h4" className={classes.headertitle} style={{letterSpacing:"1px"}}>
              <span style={{fontFamily:"Arial"}}>
              ₹
              </span>599</Typography>
              </div>
            </Paper>
            </Grid>
        </Grid>
        </Grid>

        <Grid container>
        <Grid item md={6} align='center'>
        <div className={classes.root}>
        <Typography variant="h4" className={classes.headertitle} style={{margin:"8px 0px"}} align="left">7 Reasons why you should<br/>upgrade to LectureNotes Prime <hr style={{height:"5px",marginTop:"1em",marginBottom:"1em",width:"20%",marginLeft:"0",color:"#FFB400",backgroundColor:"#FFB400"}}/></Typography>
        <div className={classes.featureitemcontainer}>
          <ReplyIcon style={{ marginRight:"5px"}}/>
            <Typography>In publishing and graphic design, Lorem ipsum is a placeholder</Typography>
        </div>
        <div className={classes.featureitemcontainer}>
          <ReplyIcon style={{ marginRight:"5px"}}/>  
            <Typography>In publishing and graphic design, Lorem ipsum is a placeholder</Typography>
        </div>
        <div className={classes.featureitemcontainer}>
          <ReplyIcon style={{ marginRight:"5px"}}/>
            <Typography>In publishing and graphic design, Lorem ipsum is a placeholder</Typography>
        </div>
        <div className={classes.featureitemcontainer}>
          <ReplyIcon style={{ marginRight:"5px"}}/>
            <Typography>In publishing and graphic design, Lorem ipsum is a placeholder</Typography>
        </div>
        <div className={classes.featureitemcontainer}>
          <ReplyIcon style={{ marginRight:"5px"}}/>
            <Typography>In publishing and graphic design, Lorem ipsum is a placeholder</Typography>
        </div>
        </div>
        
        <div className={classes.root}>

        </div>
        </Grid>
        <Grid item md={6} align='center'>

        </Grid>
        </Grid>

        <Grid cointainer>
        <div className={classes.raw}>
        <Typography variant="h4" className={classes.headertitle}>
        Frequantly asked question
        </Typography>
        </div>
        <Grid item md={6} align='center'>
        
        </Grid>
        <Grid item md={6} align='center'>
        <div className={classes.root}>
          <Paper>HELLO</Paper>
          <Paper>hi</Paper>
          <Paper>hi</Paper>
          <Paper>hi</Paper>
          <Paper>hi</Paper>
        </div>
        </Grid>

        </Grid>


        <Grid container>
          <div className={classes.raw}>
            <Typography variant="h5" className={classes.headertitle}>Contact US</Typography>
          </div>"
          <Grid item xs={12} sm={12} md={6} className={classes.gridc}>
          <Container maxWidth="sm" className={classes.root}>
        <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth={true} margin="normal"/>
        <div>
        <TextField id="outlined-basic" label="Email Id" variant="outlined" margin="normal" className={classes.textField}/>
        <TextField id="outlined-basic" label="Mobile number" variant="outlined" margin="normal" className={classes.textField}/>
        </div>
        <TextField id="outlined-basic" label="" variant="outlined" fullWidth={true}  multiline rows={6} margin="normal"/>
        <Button variant="contained" color="primary" className={classes.sendQueryButton}>
        
        <Typography align="center" className={classes.headertitle}>
        Send query now
        </Typography>
        </Button>
        
      </Container>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
