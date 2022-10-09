import React, { Component } from 'react';
import { connect } from "react-redux";

class Player extends Component {
    
    render() {
        let { mangDatCuoc } = this.props;

        return (
            <div className='text-center'>
                <div className='w-[10rem] h-[100px] m-auto border-solid border-[4px] border-[#45D994] rounded-[5px] bg-white flex justify-center items-center'>
                    <img src={
                        mangDatCuoc.find(item => item.datCuoc == true).hinhAnh
                    } className={`w-[50px] h-[50px] ${mangDatCuoc.find(item => item.datCuoc == true).hinhAnh == './ImgOanTuTi/bua.png' ? "rotate-180" : ""}`} alt={mangDatCuoc.find(item => item.datCuoc == true).hinhAnh} />
                </div>
                <div className="speech-bubble"></div>
                <img className='w-[12rem] m-auto' src="./ImgOanTuTi/player.png" alt="./ImgOanTuTi/player.png" />
                <div className="grid grid-cols-3 px-[4rem]">
                    {
                        mangDatCuoc.map((item, index) =>
                            <div key={index} className={`${item.datCuoc ? "rounded-[5px] border-orange-400 border-solid border-[4px]" : ""} w-6/12 mx-auto bg-white cursor-pointer p-2`}>
                                <img onClick={() => this.props.dispatch({
                                    type: "DAT_CUOC",
                                    payload: item.ma
                                })} className='w-full mx-auto' src={item.hinhAnh} />
                            </div>)
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        mangDatCuoc: state.OanTuTiReducer.mangDatCuoc
    }
}

export default connect(mapStateToProps, null)(Player);