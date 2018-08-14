import React from 'react'

const ReportModal = ({ wizardData, onCreateReportHandler }) => (
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
)

export default ReportModal