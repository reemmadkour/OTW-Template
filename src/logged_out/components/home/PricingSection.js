import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  isWidthUp,
  withWidth,
  withStyles
} from "@material-ui/core";
import PriceCard from "./PriceCard";
import MethodCard from "./MethodCard";
import calculateSpacing from "./calculateSpacing";
import logo from '../../logo_blue_green.PNG'; 
import ZoomImage from "../../../shared/components/ZoomImage";
const styles = theme => ({
  containerFix: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6)
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  cardWrapper: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 340,
      
    }
  },
  cardWrapperHighlighted: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 360
    }
  },
  img: {
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(10),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(100),
      marginRight: theme.spacing(10)
    }
  }
});

function PricingSection(props) {
  const { width, classes } = props;
  return (
    <div className="lg-p-top" style={{ backgroundColor: "#CADEDF" }}>

      
      
      <div className={classNames("container-fluid", classes.containerFix)}>
      <Typography variant="h3" align="center" className="lg-mg-bottom">
      <br />
        How On The Wash Works
      </Typography>
        <Grid
          container
          spacing={calculateSpacing(width)}
          className={classes.gridContainer}
        >
                    <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp("md", width) ? "600" : "200"}
          >
            <MethodCard
              title="Make a Laundry Order"
              pricing={
                <span>
                 You make an Order through your account
                  <Typography display="inline"> -</Typography>
                </span>
              }
              features={["Customizable Wash and Dry settings", "Scheduled or Asap pick up time", "Cancel up to 24 hr before pickup"]}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            className={classes.cardWrapper}
            data-aos="zoom-in-up"
          >
            <MethodCard
              title="Pick up"
              pricing={
                <span>
                  We pick your clothes up
                  <Typography display="inline"> -</Typography>
                </span>
              }
              features={["Scheduled pick up", "Driver picks up your clothes and transports to our warehouses"]}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            
          >
            <MethodCard
              
              title="Wash and Dry"
              pricing={
                <span>
                  We Wash, Dry, and Fold your clothes
                  <Typography display="inline"> -</Typography>
                </span>
              }
              features={["Live tracking", "Your choice of wash, dry, and/or dry cleaning"]}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp("md", width) ? "400" : "0"}
          >
            <MethodCard
              title="We deliver"
              pricing={
                <span>
                  We deliver your fresh and folded laundry
                  <Typography display="inline"> -</Typography>
                </span>
              }
              features={["Scheduled dropoff time", "Guaranteed a max of 36 hours", "Guaranted Satisfaction"]}
            />
          </Grid>

        </Grid>
      </div>
    </div>
  );
}

PricingSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(
  withWidth()(PricingSection)
);
