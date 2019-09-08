import React from 'react';

class AddSquareForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    render() {
        return (
            <div className="bg-blue2 center pa4 cf">
                <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
                    placeholder="type a 'sound' and add it to the board"
                    type="text"
                    onChange={this.updateState} />
                <input className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
                    type="submit"
                    value="Add"
                    onClick={this.onAdd} />
            </div>);
    }

    updateState = (e) => {
        this.setState({ text: e.target.value })
    }

    onAdd = () => {
        if(this.state.text){
        if (this.props.onAddSquare)
            this.props.onAddSquare(this.state.text);
        }
    }
};

export default AddSquareForm;
