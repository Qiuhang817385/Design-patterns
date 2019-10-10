import { INPUT_CHANGE, BTN_CLICK, LIST_DEL, INIT_LIST_ACTION } from './actionTypes';
import axios from 'axios';
export const handleInputChange = (value) => {
    return {
        type: INPUT_CHANGE,
        value
    }
}
export const handleBtnClick = () => {
    return {
        type: BTN_CLICK
    }
}
export const handleListDel = (index) => {
    return {
        type: LIST_DEL,
        index
    }
}

export const initListAction = (data) => {
    return {
        type: INIT_LIST_ACTION,
        data
    }
}

export const getTodoListTrunk = () => {
    return (dispatch) => {
        axios.get('/api/todolist')
            .then((res) => {
                const data = res.data;
                const action = initListAction(data);
                dispatch(action);
            })
            .catch(() => {
                console.log('err');
            })

    }
}