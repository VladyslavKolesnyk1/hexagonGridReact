import React, {Component} from 'react';
import UserList from "./UserList";
import Hex from "./HexGrid";

export default class Main extends Component {

    state = {
        activeTiles: []
    };

    getActiveTiles = async (id) => {
        let tiles = await fetch(`http://localhost:4000/api/tiles/${id}/`);
        tiles = await tiles.json();
        this.setState({activeTiles:tiles});
        console.log(this.state)
    };


    render() {
        return (
            <>
                <UserList onClick={this.getActiveTiles}/>
                <div className="hexagon">
                    <div className={'hex-wrapper'}>
                        <Hex activeTiles={this.state.activeTiles}/>
                    </div>
                </div>
            </>
        )
    }
}