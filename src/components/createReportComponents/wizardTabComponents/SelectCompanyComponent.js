import React from 'react'
import { wizardTabs } from '../../../utils/constants';

const SelectCompanyComponent = ({ setActiveWizardTab }) => (
    <div className="row">
        <button className="col s3 blue-grey darken-2 btn" onClick={() => setActiveWizardTab(wizardTabs.CANDIDATE_TAB)} >BACK</button>
        <button className="col s3 offset-s6 blue-grey darken-2 btn" onClick={() => setActiveWizardTab(wizardTabs.FILL_DETAILS_TAB)} >NEXT</button>
    </div>
)

export default SelectCompanyComponent