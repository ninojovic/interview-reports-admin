import React from 'react'
import { wizardTabs } from '../../../utils/constants'

const FillDetailsComponent = ({ setActiveWizardTab }) => (
    <div className="row">
        <button className="col s3 blue-grey darken-2 btn" onClick={() => setActiveWizardTab(wizardTabs.COMPANY_TAB)}>BACK</button>
        <button className="col s3 offset-s6 blue-grey darken-2 btn" >CREATE_REPORT</button>
    </div>
)

export default FillDetailsComponent