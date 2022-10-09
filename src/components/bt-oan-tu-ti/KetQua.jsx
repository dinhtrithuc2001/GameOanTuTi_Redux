import React, { Component } from 'react';
import {connect} from 'react-redux'

class KetQua extends Component {
    render() {
        let {ketQua,soBanThang,soBanChoi} = this.props;
        return (
            <div>
                <div>
                    <h2 className='text-yellow-400 text-[2.7rem]'>{ketQua}</h2>
                    <h3 className='text-green-400 text-[2.3rem] mt-3'>Số bàn thắng: <span>{soBanThang}</span></h3>
                    <h3 className='text-green-400 text-[2.3rem] mt-3'>Số bàn chơi: <span>{soBanChoi}</span></h3>
                </div>
            </div>
        );
    }

}

const mapStateToProp = (state) => {
    return {
        ketQua: state.OanTuTiReducer.ketQua,
        soBanThang: state.OanTuTiReducer.soBanThang,
        soBanChoi: state.OanTuTiReducer.soBanChoi
    }
}

export default connect(mapStateToProp, null)(KetQua);