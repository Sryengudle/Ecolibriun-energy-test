import React from "react";
import { connect } from 'react-redux';
import Button from "../../components/GenericComponents/Button";
import Select from "../../components/GenericComponents/Select";
import Text from '../../components/Text';
import Radio from '../../components/Radio';
import Static from '../../components/Static';

const buttonStyle = {
    margin: "10px 10px 10px 10px"
};

function formBuilderContainer(props) {
    let { formDetails, componentOptions, radioOption } = props;
    return (
        <>
            {formDetails && Array.isArray(formDetails) && formDetails.map((component, idx) => {
                return <div style={{ display: 'flex', borderStyle: 'ridge' }} key={idx}>
                    <Select
                        title={""}
                        name={"selectOption"}
                        options={componentOptions}
                        selectedOptions={component.selectOption}
                        handleChange={(e) => props.handleInput(e, idx)}
                    />
                    {
                        component.selectOption === 'Text' ? <Text
                            handleChangeInput={(e) => props.handleChangeInput(e, idx)}
                            handleRemoveComponent={() => props.handleRemoveComponent(idx)}
                            allowCharacter={component.allowCharacter}
                            question={component.question}
                            buttonStyle={buttonStyle}
                        /> : component.selectOption === 'Radio' ? <Radio
                            handleChangeInput={(e) => props.handleChangeInput(e, idx)}
                            buttonStyle={buttonStyle}
                            handleAddRadio={() => props.handleAddRadio(idx)}
                            handleChangeRadio={props.handleChangeRadio}
                            component={component}
                            radioOption={radioOption}
                            idx={idx}
                            handleRemoveComponent={() => props.handleRemoveComponent(idx)}
                        /> : component.selectOption === 'Static' ? <Static
                            handleRemoveComponent={() => props.handleRemoveComponent(idx)}
                            buttonStyle={buttonStyle}
                            component={component}
                        /> : null
                    }
                </div>
            })}
            <Button
                action={props.addComponent}
                type={"primary"}
                title={"Add Component"}
                style={buttonStyle}
            />
            {
                formDetails && Array.isArray(formDetails) && formDetails.length >= 1 && <Button
                    action={props.downloadJson}
                    type={"secondary"}
                    title={"Download JSON"}
                    style={buttonStyle}
                    id={"container"}
                />
            }
        </>
    )
}

const mapStateToProps = state => {
    console.log('mapStateToProps', state.formReducer)
    return {
        formDetails: state.formReducer.formDetails,
        componentOptions: state.formReducer.componentOptions,
        radioOption: state.formReducer.radioOption,
    }
}

export default connect(mapStateToProps)(formBuilderContainer);