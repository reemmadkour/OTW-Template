import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  Card,
  Button,
  Hidden,
  Box,
  withStyles,
  withWidth,
  isWidthUp
} from "@material-ui/core";
import headerImage from '../../logo_blue_green.PNG';
import WaveBorder from "../../../shared/components/WaveBorder";
import videosrc from "../bcg_video.mp4"

const styles = theme => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize
    }
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    }
  },
  card: {
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5)
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6)
    },
    [theme.breakpoints.down("lg")]: {
      width: "auto"
    }
  },
  wrapper: {
    position: "relative",
    backgroundColor: theme.palette.common.white,
    paddingBottom: theme.spacing(2)
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4]
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(30),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(9)
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(6)
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3)
    }
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important"
    }
  },
  waveBorder: {
    paddingTop: theme.spacing(4)
  }
});

function HeadSection(props) {
  const { classes, theme, width } = props;
  return (
    <Fragment>
      <div className={classNames("lg-p-top", classes.wrapper)}>
        <div className={classNames("container-fluid", classes.container)}>
          <video autoPlay="autoplay" loop="loop" muted className={classes.Video}   style={{
            filter:"contrast(0.5)",
            
          width: "100%",
          position:"absolute",
          left: 0,
          top: 0,
        // height:"100%",
       //   objectFit: "cover",
       //   transform:"translate(-50%,-50%)",
       //   zIndex:"-1"

        }}>
            <source src= {videosrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      
          <Box display="flex" justifyContent="center" className="row" >
         
              <div className={classNames(classes.containerFix, "container")}> 
                <Box justifyContent="space-between" className="row">
                  <Grid item xs={12} md={5}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                      height="100%"
                    >
                      <Box mb={4}  style={{zIndex: "100"}}>
                        <Typography
                         
                          variant={isWidthUp("lg", width) ? "h3" : "h4"}
                        >
                          On Your Mark,<br /> 
                           Get Set, <br />
                           WASH!
                        </Typography>
                      </Box>
                        <Box mb={2}  style={{zIndex: "100"}}>
                          <Typography
                            variant={isWidthUp("lg", width) ? "h6" : "body1"}
                            color="textSecondary"
                          >
                            We make your life simple by doing the tasks no one likes to do. With our pickup, cleaning and delivery services don’t let the cleanliness of your clothing ever be a headache again so you can focus on what’s really important.
                          </Typography>
                        </Box>
                        <Button
                          variant="contained"
                          color="primary"
                          fullWidth
                          className={classes.extraLargeButton}
                          classes={{ label: classes.extraLargeButtonLabel }}
                          href="https://github.com/dunky11/react-saas-template"
                        >
                          Make an Order
                        </Button>
                    </Box>
                  </Grid>
                  <Hidden smDown>
                    <Grid item md={6}>
                    {/*  <img
                        src={headerImage}
                        className={classes.image}
                        alt="header example"
                      />
                    */}
                    </Grid>
                  </Hidden>
                </Box>
              </div> 
           
          </Box>
        </div>
      </div>
    {/*  <WaveBorder
        upperColor={theme.palette.secondary.main}
        lowerColor="#FFFFFF"
        className={classes.waveBorder}
        animationNegativeDelay={2}
    /> */}
    </Fragment>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(HeadSection)
);
