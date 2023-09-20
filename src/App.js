import Map from './components/Map'
import { useState, useEffect } from 'react';

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async() =>{
      setLoading(true)
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
      const {events} = await res.json

      setEventData(events)
      setLoading(false)

    }
    fetchEvents()

    console.log(eventData)
  }, [])


  return (
    <div>
      <Map/>
    </div>
  );
}

export default App;
