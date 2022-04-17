import GoogleMapReact from 'google-map-react'
import { MdLocationOn } from 'react-icons/md'

const GoogleMap = ({ location }) => {
    const LocationPin = () => (
        <div className="pin">
            <MdLocationOn
                style={{
                    textAlign: 'center',
                    transform: 'translate(-50%, -50%)',
                    position: 'absolute',
                    color: 'red',
                    fontSize: '2rem',
                }}
            />
            <p className="pin-text">1460 S Beretania St, Honolulu, HI 96814</p>
        </div>
    )
    return (

        <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBCPniAsKI-bw3npcQE6XQN4zKCS1OnLmA' }}
                defaultCenter={location}
                defaultZoom={17}

            >
                <LocationPin
                    draggable={true}

                    lat={location.lat}
                    lng={location.lng}
                />

            </GoogleMapReact>
        </div>

    )
}

export default GoogleMap