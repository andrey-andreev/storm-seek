import React, { Component } from 'react'

import webcamsAPI from '../api/webcamsAPI'

class AddWebcam extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cams: []
    }
  }

  componentDidMount() {
    const neLat = '42.788995'
    const neLng = '23.473934'
    const swLat = '42.667374'
    const swLng = '23.241364'

    webcamsAPI.get(encodeURIComponent(`/list/bbox=${neLat},${neLng},${swLat},${swLng}?lang=en&show=webcams:image,location`))
      .then((response) => {
        console.log(response.data.result.webcams)
        this.setState({
          cams: response.data.result.webcams
        })
      })
  }

  render() {
    return (
      <div>
        {
          this.state.cams.map(map => (
            <div key={map.id}>
              <h3>{map.title}</h3>
              {
                map.image &&
                <img src={map.image.current.preview} alt={map.title} />
              }
              {
                map.player &&
                map.player.day.embed &&
                <iframe
                  height="300"
                  width="800"
                  title={map.title}
                  src={map.player.day.embed}
                />
              }
            </div>
          ))
        }
      </div>
    )
  }
}

export default AddWebcam
