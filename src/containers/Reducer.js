import * as ActionType from '../ActionTypes';

const initialState = {
    formDetails: [],
    componentOptions: ["Select Dropdwon", "Text", "Radio", "Static"],
    radioOption: []
}
const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ADD_COMPONENT:
            return {
                ...state,
                formDetails: state.formDetails.concat([{}])
            }
        case ActionType.REMOVE_COMPONENT:
            return {
                ...state,
                formDetails: state.formDetails.filter(sidx => action.payload !== sidx)
            }
        case ActionType.ADD_RADIO:
            return {
                ...state,
                radioOption: state.radioOption.concat([{ value: '' }])
                // formDetails: [{
                //     ...state.formDetails[action.idx],
                //     radioOption: state.formDetails[action.idx].radioOption.concat([{ value: '' }])
                // }]
            }
        case ActionType.CHANGE_RADIO:
            // const nestedState = state.formDetails[action.payload.idx].radioOption[action.payload.index];
            // nestedState.value = action.payload.value;
            // // const change_radio = state.formDetails.map((form, sidx) => {
            // //     if (action.payload.idx !== sidx) return form;
            // //     return form.radioOption.map((option, index) => {
            // //         if (action.payload.index == index) {
            // //             let updatedOption = option.value;
            // //             updatedOption = action.payload.value;
            // //             return { ...form, radioOption: [{ value: updatedOption }] }
            // //         }
            // //     })
            // // });
            const change_radio = state.radioOption.map((option, sidx) => {
                if (action.payload.index !== sidx) return option;
                return { ...option, value : action.payload.value };
            });
            return {
                ...state,
                radioOption: change_radio
                // formDetails: [{
                //     ...state.formDetails[action.payload.idx],
                //     radioOption: [{
                //         ...state.formDetails[action.payload.idx].radioOption[action.payload.index],
                //         value: action.payload.value
                //     }]
                // }]
            }
        case ActionType.TEXT:
            let text = action.payload.name;
            let text_value = action.payload.value;
            let text_form_details = state.formDetails.map((form, sidx) => {
                if (action.payload.idx !== sidx) return form;
                return { ...form, [text]: text_value, question: '', allowCharacter: '' };
            });
            return {
                ...state,
                formDetails: text_form_details
            }
        case ActionType.RADIO:
            let radio = action.payload.name;
            let radio_value = action.payload.value;
            let radio_form_details = state.formDetails.map((form, sidx) => {
                if (action.payload.idx !== sidx) return form;
                return { ...form, [radio]: radio_value, question: '', radioOption: [{ value: '' }] };
            });
            return {
                ...state,
                formDetails: radio_form_details
            }
        case ActionType.STATIC:
            let charset = "abcd suryaefg hijkl kantmnlo qrst uvwx yz".match(/./g);
            let static_text = "";
            for (var i = 0; i < charset.length; i++) static_text += charset[Math.floor(Math.random() * charset.length)];
            let static_name = action.payload.name;
            let static_value = action.payload.value;
            let static_form_details = state.formDetails.map((form, sidx) => {
                if (action.payload.idx !== sidx) return form;
                return { ...form, [static_name]: static_value, static: static_text };
            });
            return {
                ...state,
                formDetails: static_form_details
            }
        case ActionType.CHANGE_INPUT:
            let change_name = action.payload.name;
            const change_form_details = state.formDetails.map((form, sidx) => {
                if (action.payload.idx !== sidx) return form;
                return { ...form, [change_name]: action.payload.value };
            });
            return {
                ...state,
                formDetails: change_form_details
            }
        case ActionType.DOWNLOAD_JSON:
            var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.formDetails));
            var a = document.createElement('a');
            a.href = 'data:' + data;
            a.download = 'data.json';
            a.click();
            return {
                ...state
            }
            break;
        default:
            return state;
    }
}
export default formReducer;