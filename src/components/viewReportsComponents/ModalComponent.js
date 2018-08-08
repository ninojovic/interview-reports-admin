import React, { Component } from 'react';

import M from 'materialize-css'

class ModalComponent extends Component {
    componentDidMount() {
        const elem = document.querySelector('.modal');
        const instance = M.Modal.init(elem, {
            onCloseEnd: () => {
                instance.destroy();
                this.props.setActiveModal(null);
            }
        });
        instance.open();
    }

    render() {
        const { candidateName, companyName, interviewDate, phase, status, note } = this.props.report;
        return (
            <div id="modal1" className="modal">
                <div className="modal-content">
                    <h3>{candidateName}</h3>
                    <h5>company: {companyName}</h5>
                    <h5>interview date: {new Date(interviewDate).toDateString()}</h5>
                    <h5>phase: {phase}</h5>
                    <h5>status: {status}</h5>
                    <p>note: {note}</p>
                </div>
            </div>
        )
    }
}

export default ModalComponent