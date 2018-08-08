import React from 'react'
import ReportItemComponent from './ReportItemComponent'
import ModalComponent from './ModalComponent';

const ViewReportsLayoutComponent = ({ reports, deleteRequest, activeReportModal, setActiveModal, fetchReportsRequest }) => {
    return (
        <div className="container">
            <ul className="collection">
                {
                    reports.map(report => <ReportItemComponent 
                            setActiveModal={setActiveModal} 
                            deleteRequest={deleteRequest} 
                            key={report.id} 
                            report={report}
                        />)
                }
            </ul>
            { activeReportModal && <ModalComponent setActiveModal={setActiveModal} report={activeReportModal }/> }
        </div>
    )
}

export default ViewReportsLayoutComponent