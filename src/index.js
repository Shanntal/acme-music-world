import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';


// do work here
const Artists = (props) => {
    const {state} = props;
    return (
        <div>
            <ul>
            {props.map(artist => {
                
                <li>{artist}</li>
                
            })}
            </ul>
        </div>
    )
}

const Albums = (props) => {
    const {state} = props;
    return (
        <div>
            <ul>
            {props.map(album => {
                
                <li>{album}</li>
                
            })}
            </ul>
        </div>
    )
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            artists: [],
            albums: [],
            artistSelected: {},
            albumSelected: {}
        }
    }

    getArtists = () => {
        this.setState({artistSelected: artist.id})
    }

    getAlbums = () => {
        this.setState({albumSelected = album.id})
    }

    async componentDidMount() {
        try {
          const artists = (await axios.get('/api/artist')).data;
          const albums = (await axios.get('/api/album')).data;
          this.setState({ artists, albums });
        } catch (err) {
          console.log(err);
        }
      }

    render() {
        return (
            <div>
               <Album />
               <Artist />
            </div>
        )
    }
}

render(<App/>, document.querySelector('#root'));
