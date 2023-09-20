import GoogleMapReact from 'google-map-react'

const Map = ({center, zoom}) => {
  return (
    <div className='map'>
        <GoogleMapReact
        bootstrapURLKeys={{key:'AIzaSyBu5ZczUH-LNoz47XkM8x4CEe3cZUY5cIk'}}
        >

        </GoogleMapReact>
    </div>
  )
}

export default Map