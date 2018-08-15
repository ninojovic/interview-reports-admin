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
        const { candidateName, companyName, interviewDate, phase, status, notes } = this.props.report;
        return (
            <div id="modal1" className="modal center">
                <div className="modal-content row card blue-grey darken-2">
                    <div className="col s12">
                        <h3>{candidateName}</h3>
                    </div>
                    <div className="col s12">
                        <label className="modalLabel">company</label>
                        <h5>{companyName}</h5>
                        <label className="modalLabel">interview date</label>
                        <h5>{new Date(interviewDate).toDateString()}</h5>
                        <label className="modalLabel">phase</label>
                        <h5>{phase}</h5>
                        <label className="modalLabel">status</label>
                        <h5>{status}</h5>
                        <label className="modalLabel">notes</label>
                        <h5>{notes}</h5>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalComponent