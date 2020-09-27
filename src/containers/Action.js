import * as ActionType from '../ActionTypes';

// select dropdwon option
export const handleDropdownOption = (data) => {
    return (dispatch) => {
        switch (data.value) {
            case ActionType.STATIC:
                dispatch(staticOption(data));
                break;
            case ActionType.TEXT:
                dispatch(textOption(data));
                break;
            case ActionType.RADIO:
                dispatch(radioOption(data));
                break;
            default:
                return null;
        }
    };
};

export function radioOption(data) {
    return {
        type: ActionType.RADIO,
        payload: data
    };
}

export function textOption(data) {
    return {
        type: ActionType.TEXT,
        payload: data
    };
}

export function staticOption(data) {
    return {
        type: ActionType.STATIC,
        payload: data
    };
}

export const handleAddComponent = () => {
    return (dispatch) => {
        dispatch({ type: ActionType.ADD_COMPONENT });
    };
};

export const handleAddRadio = (idx) => {
    return (dispatch) => {
        dispatch({ type: ActionType.ADD_RADIO, idx });
    };
};

export const handleChangeRadio = (data) => {
    return (dispatch) => {
        dispatch({ type: ActionType.CHANGE_RADIO, payload: data });
    };
};

export const handleRemoveComponent = (data) => {
    return (dispatch) => {
        dispatch({ type: ActionType.REMOVE_COMPONENT, payload: data });
    };
};

export const handleChangeInput = (data) => {
    return (dispatch) => {
        dispatch({ type: ActionType.CHANGE_INPUT, payload: data });
    };
};

export const downloadJson = (data) => {
    return (dispatch) => {
        dispatch({ type: ActionType.DOWNLOAD_JSON });
    };
};

