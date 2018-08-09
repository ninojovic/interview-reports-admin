import React from 'react'
import { wizardTabs, placeholder } from '../../../utils/constants';

import M from 'materialize-css'

const SelectCandidateComponent = ({ setActiveWizardTab, candidates, selectCandidate, wizardData }) => {
    setTimeout(() => {
        var elem = document.querySelector('#selectCandidate');
        M.FormSelect.init(elem);
    })

    const onSelectChangeHandler = (e) => {
        const selectedCandidateId = e.target.value
        const selectedCandidateName = candidates.find(candidate => candidate.id === +selectedCandidateId).name;
        if (e.target.value) {
            selectCandidate(selectedCandidateName, selectedCandidateId);
        }
    }

    return (
        <div className="row">
            <div className="input-field col s12">
                <select id="selectCandidate" defaultValue={wizardData.candidateId || ""} onChange={onSelectChangeHandler} className="icons">
                    <option value="" disabled >Choose candidate</option>
                    {
                        candidates.map(candidate =>
                            <option
                                value={candidate.id}
                                data-icon={candidate.avatar || placeholder.avatar}
                                key={candidate.id}>{candidate.name}
                            </option>)
                    }
                </select>
                <label>Select candidate</label>
            </div>
            <div className="buttonRow col s12">
                <button className={`col s3 offset-s9 blue-grey darken-2 btn ${wizardData.candidateId ? "" : "disabled"}`} onClick={() => setActiveWizardTab(wizardTabs.COMPANY_TAB)} >NEXT</button>
            </div>
        </div>
    )
}

export default SelectCandidateComponent