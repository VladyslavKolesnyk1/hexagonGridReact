import React, {Component} from 'react';
import './user-list.css'

export default class UserList extends Component {

    state = {
        users: []
    };


    // getUserTiles = async (id) => {
    //     let tiles = await fetch(`http://localhost:4000/api/tiles/${id}/`);
    //     tiles = await tiles.json();
    //     console.log(tiles)
    // };

    async componentDidMount() {
        let users = await fetch('http://localhost:4000/api/users/');
        users = await users.json();
        this.setState({users});
    }

    render() {
        return (
            <ul className={'user-list'}>
                {this.state.users.map((user) => {
                    return (
                        <li><button className={'list-group-item'} onClick={()=> this.props.onClick(user.id)}>{user.name}</button></li>
                    )
                })}
            </ul>
        )
    }
}