import React, { Component } from 'react';
import {connect} from 'react-redux'

class Computer extends Component {
    render() {
        let keyframe = `@keyframes randomItem${Date.now()} {
            0% {top: -50px;}
            25% {top: 100px;}
            50% {top: -50px;}
            75% {top: 100px;}
            100% {top: 0px;}
          }`
        let {computer} = this.props;
        return (
            <div className='text-center'>
                <style>
                    {keyframe}
                </style>
                <div style={{position: 'relative', overflow: 'hidden'}} className=' w-[10rem] h-[100px] m-auto border-solid border-[4px] border-[#45D994] rounded-[5px] bg-white flex justify-center items-center'>
                    <img style={{animation: `randomItem${Date.now()} 0.2s`, position: 'absolute'}} src={computer.hinhAnh} className={`w-[50px] h-[50px] ${computer.hinhAnh == "./ImgOanTuTi/bua.png" ? "" : "rotate-[180deg]" }`} alt="" />
                </div>
                <div className='speech-bubble'></div>
                <img className='w-[12rem] m-auto' src="./ImgOanTuTi/playerComputer.png" alt="./ImgOanTuTi/playerComputer.png" />
            </div> 
        );
    }
}

const mapStateToProps = (state) => {
    return {
        computer: state.OanTuTiReducer.computer
    }
}

export default connect(mapStateToProps,null)(Computer);    