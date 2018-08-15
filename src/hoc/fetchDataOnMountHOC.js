import React from 'react'
import { wizardTabs } from '../utils/constants'

function fetchDataOnMountHOC(WrappedComponent) {
    return class extends React.Component {
        componentDidMount() {
            this.props.fetchDataRequest()
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

export default fetchDataOnMountHOC