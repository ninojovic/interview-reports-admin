import React from 'react'

const ReportItemComponent = ({ report, deleteRequest, setActiveModal }) => (
    <li className="collection-item">
        <div className="row">
            <div className="col s3">
                {report.companyName}
            </div>
            <div className="col s2">
                {report.candidateName}
            </div>
            <div className="col s3">
                {new Date(report.interviewDate).toDateString()}
            </div>
            <div className="col s2">
                {report.status}
            </div>
            <div className="col s1">
                <i onClick={() => setActiveModal(report)} className="material-icons">remove_red_eye</i>
            </div>
            <div className="col s1">
                <i onClick={() => deleteRequest(report.id)} className="material-icons">delete</i>
            </div>
        </div>
    </li>
)

export default ReportItemComponent