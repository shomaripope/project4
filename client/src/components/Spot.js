import React, { Component } from 'react';

class Spot extends Component {
    render() {
        return (
            <div>
                HEY IM SPOT
                {this.props.spot.map((newSpot, i)=>(
                    <div className="card" key ={i}> 
                                    {newSpot.company} <br/>
                                    {newSpot.photo_url} <br/>
                                    {newSpot.spotAvailable} <br/>
                                    {newSpot.free} <br/>
                                    {newSpot.address} <br/>
                                    {newSpot.city} <br/>
                                    {newSpot.state} <br/>
                                    {newSpot.zip} <br/>
                                    {newSpot.sizeCapacity} <br/>
                    </div>
                 ) )}
            </div>
        );
    }
}

export default Spot;