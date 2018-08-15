import React from 'react'
import ReportItemComponent from './ReportItemComponent'
import ModalComponent from './ModalComponent';
import LoadingSpinner from '../LoadingSpinner'

const ViewReportsLayoutComponent = ({ reports, deleteRequest, activeReportModal, setActiveModal }) => {
    return (
        <div className="container">
            <ul className="collection center">
                <li className="collection-item tableHeader">
                    <div className="row">
                        <div className="col s3">
                            company name
                        </div>
                        <div className="col s2">
                            candidate name
                        </div>
                        <div className="col s3">
                            interview date
                        </div>
                        <div className="col s2">
                            status
                        </div>
                        <div className="col s1">
                            info
                        </div>
                        <div className="col s1">
                            del
                        </div>
                    </div>
                </li>
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