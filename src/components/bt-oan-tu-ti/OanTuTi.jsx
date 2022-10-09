import React, { Component } from 'react';
import Computer from './Computer';
import KetQua from './KetQua';
import Player from './Player';
import { connect } from 'react-redux'
import './Style.css'

class OanTuTi extends Component {
    render() {
        
        return (
            <div className="wrapper fixed bg-cover h-full w-full" style={{ backgroundImage: "url(/ImgOanTuTi/bgGame.png)" }}>
                <div className="grid grid-cols-3 gap-4 text-center mt-8">
                    <div><Player /></div>
                    <div><KetQua />
                        <button onClick={this.props.playGame} className='hover:bg-orange-500 py-[1rem] px-[2rem] bg-orange-400 rounded-[10px] text-[#fff] tracking-widest mt-4'>Play Game</button>
                    </div>
                    <div><Computer /></div>
                </div>

            </div>
        );
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        playGame: () => {
            let count = 1;
            let randomComputerItem = setInterval(() => {
                dispatch({
                    type: 'RANDOM',
                })
                count++;
                if (count > 4) {
                    clearInterval(randomComputerItem)
                    dispatch({
                        type: 'END_GAME',
                    })
                }
            }, 100)

        }
    }
}

export default connect(null, mapDispatchToProp)(OanTuTi);