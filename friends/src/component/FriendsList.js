import React from 'react';
import { axiosWithAuth } from '../auth/auth';

class FriendList extends React.Component{
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData()
    }
      
    
    getData = () => {
    console.log('this gets called');
    axiosWithAuth()
        .get('/data')
        .then(res => {
        this.setState({
            gasPrices: res.data.data
        })
        })
        .catch(err => console.log(err.response.data.error))
    }

    render(){
        const friends = this.state.friends;
        return (
            <div>
                <div>
                    {
                        friends.map(friend => (
                            <div key={friend.id}>
                                <p>{friend.name}</p>
                                <p>{friend.age}</p>
                                <p>{friend.email}</p>
                            </div>
                        ))
                    }
                </div>

            </div>
        )
    }
}
export default FriendList;