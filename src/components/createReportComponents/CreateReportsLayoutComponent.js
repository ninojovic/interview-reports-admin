import React from 'react'
import { wizardTabs } from '../../utils/constants'

import SelectCandidateComponent from './wizardTabComponents/SelectCandidateComponent'
import SelectCompanyComponent from './wizardTabComponents/SelectCompanyComponent'
import FillDetailsComponent from './wizardTabComponents/FillDetailsComponent'

const CreateReportsLayoutComponent = ({
    activeTab,
    setActiveWizardTab,
    candidates,
    selectCandidate,
    wizardData,
    selectCompany,
    companies,
    reports,
    selectInterviewDate,
    selectPhase,
    selectStatus,
    fillInNotes,
    reportPostRequested,
    resetWizardData
}) => {
    const isDisabled = (tabToCheck) => (activeTab === tabToCheck) ? "" : "disabled";
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <ul className="tabs">
                        <li className={`tab col s4 ${isDisabled(wizardTabs.CANDIDATE_TAB)}`}>select candidate</li>
                        <li className={`tab col s4 ${isDisabled(wizardTabs.COMPANY_TAB)}`}>select company</li>
                        <li className={`tab col s4 ${isDisabled(wizardTabs.FILL_DETAILS_TAB)}`}>fill report detail</li>
                    </ul>
                    <div className="wizardTab">
                        {(activeTab === wizardTabs.CANDIDATE_TAB) ?
                            <SelectCandidateComponent
                                selectCandidate={selectCandidate}
                                setActiveWizardTab={setActiveWizardTab}
                                candidates={candidates}
                                wizardData={wizardData}
                            /> :
                            (activeTab === wizardTabs.COMPANY_TAB)
                                ? <SelectCompanyComponent
                                    setActiveWizardTab={setActiveWizardTab}
                                    selectCompany={selectCompany}
                                    companies={companies}
                                    wizardData={wizardData}
                                    reports={reports}
                                /> :
                                <FillDetailsComponent
                                    setActiveWizardTab={setActiveWizardTab}
                                    wizardData={wizardData}
                                    selectInterviewDate={selectInterviewDate}
                                    selectPhase={selectPhase}
                                    selectStatus={selectStatus}
                                    fillInNotes={fillInNotes}
                                    reportPostRequested={reportPostRequested}
                                    resetWizardData={resetWizardData}
                                    reports={reports}
                                />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateReportsLayoutComponent