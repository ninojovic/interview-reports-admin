import React from 'react'

function fetchReportsOnMount(WrappedComponent) {
    return class extends React.Component {
        componentDidMount() {
            this.props.fetchReportsRequest()
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }
}

export default fetchReportsOnMount