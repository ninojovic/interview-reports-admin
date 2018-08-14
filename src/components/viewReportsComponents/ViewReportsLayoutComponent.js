import React from 'react'
import ReportItemComponent from './ReportItemComponent'
import ModalComponent from './ModalComponent';
import LoadingSpinner from '../LoadingSpinner'

const ViewReportsLayoutComponent = ({ reports, deleteRequest, activeReportModal, setActiveModal }) => {
    return (
        <div className="container">
            <ul className="collection">
                {
                    (reports.length !== 0) ?
                        reports.map(report => <ReportItemComponent
                            setActiveModal={setActiveModal}
                            deleteRequest={deleteRequest}
                            key={report.id}
                            report={report}
                        />)
                        :
                        <LoadingSpinner />
                }
            </ul>
            {activeReportModal && <ModalComponent setActiveModal={setActiveModal} report={activeReportModal} />}
        </div>
    )
}

export default ViewReportsLayoutComponent