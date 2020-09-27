import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FormBuilderContainer from "./FormBuilderContainer/FormBuilderContainer";
import Button from "../components/GenericComponents/Button";
import { handleDropdownOption, handleAddComponent, handleChangeRadio, handleAddRadio, handleRemoveComponent, handleChangeInput, downloadJson } from './Action';

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

class App extends Component {

  // componentDidMount = () => this.props.downloadJson();
  handleRemoveComponent = idx => this.props.handleRemoveComponent(idx);


  handleChangeInput = (evt, idx) => {
    let name = evt.target.name;
    let value = evt.target.value;
    this.props.handleChangeInput({ name, idx, value });
  }

  handleInput = (e, idx) => {
    let value = e.target.value;
    let name = e.target.name;
    this.props.handleDropdownOption({ e, idx, value, name });
  }

  handleChangeRadio = (e, index, idx) => {
    let value = e.target.value;
    console.log('handleChangeRadio',  index, idx)
    this.props.handleChangeRadio({ value, index, idx });
  }


  render() {

    return (
      <div className="col-md-6">
        <h3>Form Builder</h3>
        <FormBuilderContainer
          addComponent={this.props.handleAddComponent}
          handleInput={this.handleInput}
          handleRemoveComponent={this.handleRemoveComponent}
          handleChangeInput={this.handleChangeInput}
          handleChangeRadio={this.handleChangeRadio}
          handleAddRadio={this.props.handleAddRadio}
        />
      </div>
    );
  }
}


// const mapStateToProps = state => {
//   return {
//     formDetails: state.formReducer.formDetails,
//     componentOptions: state.formReducer.componentOptions,
//     radioOption: state.formReducer.radioOption,
//   }
// }

const mapDispatchToProps = (dispatch, ownProps) => {
  //Bind all the Actions which you want to dispatch in the container. 
  return bindActionCreators({
    handleDropdownOption,
    handleAddComponent,
    handleChangeRadio,
    handleAddRadio,
    handleRemoveComponent,
    handleChangeInput,
    downloadJson
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
