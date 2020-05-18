import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/mapsStyle.js";
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiemF1cnRpZ2lldiIsImEiOiJjazl0eGR1aWcxaWczM2xxY3Rrcm41MWJ3In0.MKrr7BDIFbEsi9jFKWn49w';


const useStyles = makeStyles(styles);


class CustomSkinMap extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            lng: 37.6319,
            lat: 55.7504,
            zoom: 11.95,
        };
    }

    componentDidMount() {

        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/zaurtigiev/cjpimttmh00vr2smsqxrtsj3k',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom,
            attributionControl: false
        });



        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });

        map.addControl(new mapboxgl.NavigationControl());
    }

    render() {
        return ( 
            <div>
              <div ref = {el => this.mapContainer = el} className = 'mapContainer' />
            </div>
        )
    }
}

export default function Maps() {
  const classes = useStyles();
  return (
    <div className={classes.mapContainer}>
        <CustomSkinMap></CustomSkinMap>
    </div>
  );
}
