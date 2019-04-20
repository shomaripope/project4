import React, { Component } from 'react';
import Spot from './Spot';

class SpotList extends Component {
    render() {
        return (
            <div>
                <h1> Spot List </h1> 
                <section>
                {
                    this.props.spot.map((spot,i) => {
                        return (
                            <div>HEY IM SPOT LIST MAP 
                            <Spot key={i} spot={spot.locationInfo} />
                            </div>
                            );
                    })
                } 
                </section>
            </div>
        );
    }
}

export default SpotList;