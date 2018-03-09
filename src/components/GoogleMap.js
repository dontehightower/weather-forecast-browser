import React, { Component } from 'react';
// import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

// export default props => {
//   return (
//     <GoogleMapLoader 
//       containerElement={ <div style={{height: '100%'}} /> }
//       googleMpaElement= {
//         <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
//       }
//     />
//   )
// }
class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, { // creates an embredded google map inside of the first argument
      zoom: 12, // designate the zoom level of the map
      center: { // designate where the map will be centered
        lat: this.props.lat,
        lng: this.props.lon
      }
    }) 
  }

  render () {
    // make use of the ref system in react
    return <div ref='map' />; // can be referred to as this.ref.map
  }
}

export default GoogleMap;