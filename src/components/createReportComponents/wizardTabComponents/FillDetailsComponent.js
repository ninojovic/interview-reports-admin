import React from 'react'
import { wizardTabs } from '../../../utils/constants'
import { withRouter } from 'react-router-dom'

import ReportModal from './ReportModal'

import M from 'materialize-css'

const FillDetailsComponent = ({ history, setActiveWizardTab, wizardData, selectInterviewDate, selectPhase, selectStatus, fillInNotes, reportPostRequested, resetWizardData, reports }) => {

    const selectedCandidateReports = reports.filter(report => report.candidateId === wizardData.candidateId)
    const candidateReportsInSelectedCompany = selectedCandidateReports.filter(report => report.companyId === wizardData.companyId);

    setTimeout(() => {
        const datePickerOptions = {
            autoClose: true,
            setDefaultDate: true,
            maxDate: new Date(),
            minDate: (() => {
                const lastReport = getLastReport()
                if(lastReport){
                    return new Date(lastReport.interviewDate)
                }
            })(),
            onSelect: (date) => {
                selectInterviewDate(date)
            }
        }

        const datePicker = document.querySelector('.datepicker');
        M.Datepicker.init(datePicker, datePickerOptions);

        const selectPhaseElem = document.querySelector('#selectPhase');
        M.FormSelect.init(selectPhaseElem);

        const selectStatusElem = document.querySelector('#selectStatus');
        M.FormSelect.init(selectStatusElem);

        const modal = document.querySelector('#reportModal');
        M.Modal.init(modal);
    })

    const onCreateReportHandler = () => {
        reportPostRequested(wizardData, history)
    }

    const getLastReport = () => {
        const cvPhaseReport = candidateReportsInSelectedCompany.find(report => report.phase === "cv")
        const hrPhaseReport = candidateReportsInSelectedCompany.find(report => report.phase === "hr")
        const techPhaseReport = candidateReportsInSelectedCompany.find(report => report.phase === "tech")
        const finalPhaseReport = candidateReportsInSelectedCompany.find(report => report.phase === "final")
        if(cvPhaseReport){
            if(hrPhaseReport){
                if(techPhaseReport){
                    if(finalPhaseReport){
                        return finalPhaseReport
                    } else {
                        return techPhaseReport
                    }
                } else {
                    return hrPhaseReport
                }
            } else {
                return cvPhaseReport
            }
        }
    }

    const checkCandidatePhase = (phaseToCheck) => {
        const lastReport = getLastReport();
        if(!lastReport){
            if(phaseToCheck === "cv"){
                return ""
            }
            return "disabled"
        }

        switch(true){
            case phaseToCheck === "hr" && lastReport.phase === "cv":
                return ""
            case phaseToCheck === "tech" && lastReport.phase === "hr":
                return ""
            case phaseToCheck === "final" && lastReport.phase === "tech":
                return ""
            default:
                return "disabled"
        }
    }

    const { candidateName, companyName, interviewDate, phase, status, notes, isReadyForPost } = wizardData

    return (
        <div className="row">
            <div className="col s6">
                <p><b>selected candidate:</b></p>
                <h5><em>{candidateName}</em></h5>
                <p><b>selected company: </b></p>
                <h5><em>{companyName}</em></h5>
            </div>
            <div className="col s6">
                <div className="col s12" >
                    <label>select date</label>
                    <input defaultValue={interviewDate || "select date"} type="text" className="datepicker" />
                </div>
                <div className="input-field col s12">
                    <select defaultValue={phase || ""} id="selectPhase" onChange={(e) => selectPhase(e.target.value)}>
                        <option value="" disabled>select phase</option>
                        <option value="cv" disabled={checkCandidatePhase("cv")}>CV</option>
                        <option value="hr" disabled={checkCandidatePhase("hr")}>HR</option>
                        <option value="tech" disabled={checkCandidatePhase("tech")}>TECH</option>
                        <option value="final" disabled={checkCandidatePhase("final")}>FINAL</option>
                    </select>
                    <label>select phase</label>
                </div>
                <div className="input-field col s12">
                    <select defaultValue={status || ""} id="selectStatus" onChange={(e) => selectStatus(e.target.value)} >
                        <option value="" disabled>select status</option>
                        <option value="passed">PASSED</option>
                        <option value="declined">DECLINED</option>
                    </select>
                    <label>select status</label>
                </div>
                <div className="input-field col s12">
                    <textarea defaultValue={notes || ""} id="notes" className="materialize-textarea" onBlur={(e) => fillInNotes(e.target.value)}></textarea>
                    <label>notes</label>
                </div>
            </div>
            <div className="col s12 buttonRow">
                <button className="col s3 blue-grey darken-2 btn" onClick={() => setActiveWizardTab(wizardTabs.COMPANY_TAB)}>BACK</button>
                <button
                    data-target="reportModal"
                    className={`col s3 offset-s6 modal-trigger blue-grey darken-2 btn ${isReadyForPost ? "" : "disabled"}`}
                >
                    CREATE REPORT
                </button>
            </div>
            <ReportModal wizardData={wizardData} onCreateReportHandler={onCreateReportHandler} />
        </div>
    )
}

export default withRouter(FillDetailsComponent)