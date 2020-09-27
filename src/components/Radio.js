import React from "react";
import Button from "./GenericComponents/Button";
import Input from "./GenericComponents/Input";
import RadioButton from "./GenericComponents/RadioButton";

const Radio = props => {
    return (
        <>
            <Input
                inputtype={"text"}
                name={"question"}
                title={""}
                value={props.component.question}
                placeholder={"Enter your question"}
                handleChange={props.handleChangeInput}
            />
            <RadioButton
                title={""}
                name={"radioSelected"}
                options={props.radioOption}
                selectedOptions={props.component.radioSelected}
                handleChange={props.handleChangeInput}
                handleChangeInput={props.handleChangeRadio}
                idx={props.idx}
            />
            <Button
                action={props.handleAddRadio}
                type={"secondary"}
                title={"Add"}
                style={props.buttonStyle}
            />{" "}

            <Button
                action={props.handleRemoveComponent}
                type={"secondary"}
                title={"Remove"}
                style={props.buttonStyle}
            />{" "}
        </>
    );
};

export default Radio;