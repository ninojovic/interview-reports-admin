import React from 'react'
import { wizardTabs } from '../../../utils/constants'

import M from 'materialize-css'

const FillDetailsComponent = ({ setActiveWizardTab, wizardData, detailsFilledIn, reportPostRequested, resetWizardData }) => {
    let datePickerInstance, selectPhaseInstance, selectStatusInstance, modalInstance;

    setTimeout(() => {
        const datePickerOptions = {
            defaultDate: new Date(),
            autoClose: true,
            setDefaultDate: true,
            maxDate: new Date()
        }

        const datePicker = document.querySelector('.datepicker');
        datePickerInstance = M.Datepicker.init(datePicker, datePickerOptions);

        const selectPhaseElem = document.querySelector('#selectPhase');
        selectPhaseInstance = M.FormSelect.init(selectPhaseElem);

        const selectStatusElem = document.querySelector('#selectStatus');
        selectStatusInstance = M.FormSelect.init(selectStatusElem);

        const modal = document.querySelector('#reportModal');
        modalInstance = M.Modal.init(modal);

        if (wizardData.status) {
            modalInstance.open()
        }
    })


    const getDataAndDispatch = (e) => {
        const date = new Date(datePickerInstance.toString());
        const phase = selectPhaseInstance.getSelectedValues()[0];
        const status = selectStatusInstance.getSelectedValues()[0];
        const notes = document.querySelector('#notes').value

        detailsFilledIn(date, phase, status, notes);
    }

    const onCreateReportHandler = () => {
        reportPostRequested(wizardData)
        resetWizardData()
        setActiveWizardTab("CANDIDATE_TAB")
    }

    return (
        <div className="row">
            <div className="col s6">
                <p><b>selected candidate:</b></p>
                <h5><em>{wizardData.candidateName}</em></h5>
                <p><b>selected company: </b></p>
                <h5><em>{wizardData.companyName}</em></h5>
            </div>
            <div className="col s6">
                <div className="col s12" >
                    <label>select date</label>
                    <input type="text" className="datepicker" />
                </div>
                <div className="input-field col s12">
                    <select id="selectPhase" >
                        <option defaultValue="cv">CV</option>
                        <option value="hr">HR</option>
                        <option value="tech">TECH</option>
                        <option value="final">FINAL</option>
                    </select>
                    <label>select phase</label>
                </div>
                <div className="input-field col s12">
                    <select defaultValue="" id="selectStatus" >
                        <option value="passed">PASSED</option>
                        <option value="declined">DECLINED</option>
                    </select>
                    <label>select status</label>
                </div>
                <div className="input-field col s12">
                    <textarea id="notes" className="materialize-textarea"></textarea>
                    <label>notes</label>
                </div>
            </div>
            <div className="col s12 buttonRow">
                <button className="col s3 blue-grey darken-2 btn" onClick={() => setActiveWizardTab(wizardTabs.COMPANY_TAB)}>BACK</button>
                <button className={`col s3 offset-s6 blue-grey darken-2 btn ${wizardData ? "" : "disabled"}`} onClick={getDataAndDispatch} >CREATE REPORT</button>
            </div>
            <div id="reportModal" className="modal">
                <div className="modal-content center">
                    <div className="col s12">
                        <p><b>selected candidate:</b></p>
                        <h5><em>{wizardData.candidateName}</em></h5>
                        <p><b>selected company: </b></p>
                        <h5><em>{wizardData.companyName}</em></h5>
                        <p><b>interview date:</b></p>
                        <h5><em>{(new Date(wizardData.interviewDate)).toDateString()}</em></h5>
                        <p><b>interview phase: </b></p>
                        <h5><em>{wizardData.phase}</em></h5>
                        <p><b>interview status: </b></p>
                        <h5><em>{wizardData.status}</em></h5>
                        <p><b>notes: </b></p>
                        <h5><em>{wizardData.notes}</em></h5>
                    </div>
                    <div className="buttonRow col s12">
                        <button className="col s4 offset-s4 blue-grey darken-2 btn" onClick={onCreateReportHandler}>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FillDetailsComponent