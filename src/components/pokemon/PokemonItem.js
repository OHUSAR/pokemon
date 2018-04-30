import React, { Component } from 'react';
import './pokemon.css';
import PokemonDetail from "./PokemonDetail";


class PokemonItem extends Component {

    constructor(props) {
        super(props);

        this.state= {
            isOpened: false
        };

        this.openDetail = this.openDetail.bind(this);
        this.closeDetail = this.closeDetail.bind(this);
    }

    openDetail(e) {
        e.stopPropagation();
        this.setState({
            isOpened: true
        });
    }

    closeDetail(e) {
        e.stopPropagation();
        this.setState({
            isOpened: false
        });
    }

    render() {
        const {isOpened } = this.state;
        const { pokemon } = this.props;

        return (
            <div className={'pokemon'}>
                <div className={'pokemon__link'} onClick={this.openDetail}>
                    {pokemon.name}
                </div>

                {isOpened &&
                    <PokemonDetail {...pokemon} onClose={this.closeDetail}/>
                }
            </div>
        )
    }
}

export default PokemonItem;
