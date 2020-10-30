import React, {Component} from 'react';
import HexagonGrid from "react-hexagon-grid/lib/HexagonGrid";
import times from 'lodash/times';

class Hex extends Component {

    state = {
        hexagons: times(102, id => id)
    };

    async componentDidMount() {
        let tiles = await fetch('http://localhost:4000/api/tiles/');
        tiles = await tiles.json();
        let hexagons = this.state.hexagons.map((hex) => {
            let hex2 = tiles.find((element, index) => element.coordinate === hex);
            return hex2 ? hex2 : hex
        });
        this.setState({hexagons});
    }

    getHexProps = (hexagon) => {
        return {
            style: {
                fill: hexagon.color ? hexagon.color : '#14063d',
                stroke: this.props.activeTiles.find((active) => active.id === hexagon.id) ? '#006400': 'white'
            },
            onClick: () => {
                hexagon.coordinate ? alert(hexagon.coordinate): alert(hexagon)
            }
        };
    };

    renderHexagonContent = (hexagon) => {
        return (
            <text
                x="50%"
                y="50%"
                fontSize={100}
                fontWeight="lighter"
                style={{fill: 'white'}}
                textAnchor="middle"
            >
            </text>
        );
    };

    render() {
        return (
            <HexagonGrid
                gridWidth={850}
                gridHeight={750}
                hexagons={this.state.hexagons}
                hexProps={this.getHexProps}
                renderHexagonContent={this.renderHexagonContent}
            />
        );
    }
}


export default Hex