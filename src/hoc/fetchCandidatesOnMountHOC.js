import React from 'react'
import { wizardTabs } from '../utils/constants'

function clearActiveTabState(WrappedComponent) {
    return class extends React.Component {
        componentDidMount() {
            this.props.fetchCandidatesRequest()
        }
        componentWillUnmount() {
            this.props.setActiveWizardTab(wizardTabs.CANDIDATE_TAB)
            this.props.resetWizardData()
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }
}

export default clearActiveTabState