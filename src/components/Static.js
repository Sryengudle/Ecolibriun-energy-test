import React from "react";
import Button from "./GenericComponents/Button";
import TextArea from "./GenericComponents/TextArea";

const Static = props => {
    return (
        <>
            <TextArea
                value={props.component.static}
                name={"static"}
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

export default Static;