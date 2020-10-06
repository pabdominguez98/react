import React from 'react';

class Boton extends React.Component {
    state = {
        count: 0,
    }
    detectorClicks = () =>{
        console.log(this.state.count);
        this.setState({
            count: this.state.count +1,
        });
    }
    render() {
        const { count } = this.state;
        return (
            <div>
                <h1>Manzanas: {count}</h1>
                <button type="button" onClick={this.detectorClicks}>Agregar manzanas perri</button>
            </div>
        );
    }
}

export default Boton;
