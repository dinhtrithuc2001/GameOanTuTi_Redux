const stateDefault = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './ImgOanTuTi/keo.png', datCuoc: false },
        { ma: 'bua', hinhAnh: './ImgOanTuTi/bua.png', datCuoc: false },
        { ma: 'bao', hinhAnh: './ImgOanTuTi/bao.png', datCuoc: true }
    ],
    ketQua: "I'm iron man, i love you 3000 !!",
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'bao', hinhAnh: './ImgOanTuTi/bao.png' }
}

let soSanh = (op1, op2) => {
    switch (op1) {
        case 'keo': {
            if (op2 == 'bua') {
                return -1
            }
            if (op2 == 'bao') {
                return 1
            }
            return 0
        }
        case 'bua': {
            if (op2 == 'keo') {
                return 1
            }
            if (op2 == 'bao') {
                return -1
            }
            return 0
        }
        case 'bao': {
            if (op2 == 'keo') {
                return -1
            }
            if (op2 == 'bua') {
                return 1
            }
            return 0
        }
    }
}

export const OanTuTiReducer = (state = stateDefault, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'DAT_CUOC': {
            let mangDatCuocNew = [...state.mangDatCuoc];
            mangDatCuocNew = mangDatCuocNew.map(item => {
                if (item.ma == payload) {
                    return { ...item, datCuoc: true }
                }
                return { ...item, datCuoc: false }
            })
            state.mangDatCuoc = mangDatCuocNew
            return { ...state }
        }
        case 'RANDOM': {
            let index = Math.floor(Math.random() * 3)
            let computerNew = { ...state.mangDatCuoc[index] }
            state.computer = computerNew
            return { ...state }
        }
        case 'END_GAME': {
            let player = state.mangDatCuoc.find(item => item.datCuoc == true)
            let {computer} = state
            if (soSanh(player.ma, computer.ma) == 1) {
                state.ketQua = "Di Thắng !!!";
                state.soBanThang += 1;
            }
            else if (soSanh(player.ma, computer.ma) == -1) {
                state.ketQua = "Bé Di Thua rồi - ngáo :v !!";
            }
            else if (soSanh(player.ma, computer.ma) == 0) {
                state.ketQua = "Hòa nhé !!";
            }
            state.soBanChoi += 1;
            return {...state}
        }
        default: {
            return { ...state }
        }
    }
}