import React from 'react'
import { wizardTabs } from '../../../utils/constants';

import M from 'materialize-css'

const SelectCompanyComponent = ({ setActiveWizardTab, selectCompany, wizardData, companies, reports }) => {
    setTimeout(() => {
        var elem = document.querySelector('#selectCompany');
        M.FormSelect.init(elem);
    })

    const onSelectChangeHandler = (e) => {
        const selectedCompanyId = e.target.value
        const selectedCompanyName = companies.find(company => company.id === parseInt(selectedCompanyId, 10)).name;
        if (e.target.value) {
            selectCompany(selectedCompanyName, selectedCompanyId);
        }
    }

    const { candidateName, candidateId, companyId,  } = wizardData;
    const { CANDIDATE_TAB, FILL_DETAILS_TAB } = wizardTabs

    const selectedCandidateReports = reports.filter(report => report.candidateId === candidateId)

    return (
        <div className="row">
            <div className="col s6">
                <p><b>selected candidate:</b></p>
                <h5><em>{candidateName}</em></h5>
            </div>
            <div className="input-field col s6">
                <select id="selectCompany" defaultValue={companyId || ""} onChange={onSelectChangeHandler}>
                    <option value="" disabled>Choose company</option>
                    {
                        companies.filter(company => {
                            let candidateNotRejectedInCurrentCompany = true;
                            if(selectedCandidateReports.find(report => report.status === "declined" && parseInt(report.companyId, 10) === company.id)){
                                candidateNotRejectedInCurrentCompany = false;
                            } else if (selectedCandidateReports.find(report => report.phase === "final" && parseInt(report.companyId, 10) === company.id)){
                                candidateNotRejectedInCurrentCompany = false;
                            }
                            return candidateNotRejectedInCurrentCompany
                        })
                        .map(company =>
                            <option value={company.id} key={company.id} >
                                {company.name}
                            </option>)
                    }
                </select>
                <label>Select company</label>
            </div>
            <div className="buttonRow col s12">
                <button className="col s3 blue-grey darken-2 btn" onClick={() => setActiveWizardTab(CANDIDATE_TAB)} >BACK</button>
                <button 
                    className={`col s3 offset-s6 blue-grey darken-2 btn ${companyId ? "" : "disabled"}`} 
                    onClick={() => setActiveWizardTab(FILL_DETAILS_TAB)} 
                >
                NEXT
                </button>
            </div>
        </div>
    )
}

export default SelectCompanyComponent