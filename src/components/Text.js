import React from "react";
import Button from "./GenericComponents/Button";
import Input from "./GenericComponents/Input";

const Text = props => {
    return (
        <>
            <Input
                inputtype={"text"}
                name={"question"}
                title={""}
                maxLength={props.allowCharacter ? props.allowCharacter : null}
                value={props.question}
                placeholder={"Enter your question"}
                handleChange={props.handleChangeInput}
            />
            <Input
                inputtype={"number"}
                name={"allowCharacter"}
                title={"Allowed Characters"}
                value={props.allowCharacter}
                placeholder={""}
                handleChange={props.handleChangeInput}
            />
            <Button
                action={props.handleRemoveComponent}
                type={"secondary"}
                title={"Remove"}
                style={props.buttonStyle}
            />{" "}
        </>
    );
};

export default Text;