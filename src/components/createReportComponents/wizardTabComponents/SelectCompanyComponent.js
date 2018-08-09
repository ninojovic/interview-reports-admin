import React from 'react'
import { wizardTabs } from '../../../utils/constants';

import M from 'materialize-css'

const SelectCompanyComponent = ({ setActiveWizardTab, selectCompany, wizardData, companies }) => {
    setTimeout(() => {
        var elem = document.querySelector('#selectCompany');
        M.FormSelect.init(elem);
    })

    const onSelectChangeHandler = (e) => {
        const selectedCompanyId = e.target.value
        const selectedCompanyName = companies.find(company => company.id === +selectedCompanyId).name;
        if (e.target.value) {
            selectCompany(selectedCompanyName, selectedCompanyId);
        }
    }

    return (
        <div className="row">
            <div className="col s6">
                <p><b>selected candidate:</b></p>
                <h5><em>{wizardData.candidateName}</em></h5>
            </div>
            <div className="input-field col s6">
                <select id="selectCompany" defaultValue={wizardData.companyId || ""} onChange={onSelectChangeHandler}>
                    <option value="" disabled>Choose company</option>
                    {
                        companies.map(company =>
                            <option
                                value={company.id}
                                key={company.id}>
                                {company.name}
                            </option>)
                    }
                </select>
                <label>Select company</label>
            </div>
            <div className="buttonRow col s12">
                <button className="col s3 blue-grey darken-2 btn" onClick={() => setActiveWizardTab(wizardTabs.CANDIDATE_TAB)} >BACK</button>
                <button className={`col s3 offset-s6 blue-grey darken-2 btn ${wizardData.companyId ? "" : "disabled"}`} onClick={() => setActiveWizardTab(wizardTabs.FILL_DETAILS_TAB)} >NEXT</button>
            </div>
        </div>
    )
}

export default SelectCompanyComponent