import React from 'react'
import { StreamTypes, TrainingTypes } from '../../data/training'
import { BsFillCalendarCheckFill, BsFillPersonFill, BsLaptop, BsClockFill } from 'react-icons/bs'
import ReactDOM from 'react-dom/client'
import BookingForm from '../../components/booking-form/booking-form.component'

function TrainingItem({ stream, training }: { stream: StreamTypes; training: TrainingTypes }) {
    const showModal =
        (stream: any): any =>
        (e: MouseEvent): any => {
            e.preventDefault()
            const Modal = React.lazy(() => import('../../components/modal/modal.component'))
            const modalRoot = ReactDOM.createRoot(document.getElementById('modal-root') as HTMLElement)
            modalRoot.render(
                <React.Suspense fallback={<div style={{ display: 'none' }}> </div>}>
                    <Modal root={modalRoot}>
                        <BookingForm training={training} stream={stream} />
                    </Modal>
                </React.Suspense>,
            )
        }

    const today = new Date()

    if (new Date(stream.endDate) < today) return <></>

    return (
        <div className="col-start-1 col-end-13 md:col-start-2 bg-white max-w-3xl p-5 rounded-md shadow-sm">
            <div className="flex justify-between mb-2">
                <span className="flex items-center font-medium text-base text-gray-dark">
                    <BsFillCalendarCheckFill color="#528ecc" className="mr-2" />
                    {new Date(stream.startDate).toLocaleDateString()} - {new Date(stream.endDate).toLocaleDateString()}
                </span>
            </div>
            <div className="mb-2">
                <span className="flex items-center font-medium text-base text-gray-dark">
                    <BsClockFill color="#528ecc" className="mr-2" />
                    {stream.time}
                </span>
            </div>
            <div className="mb-2">
                <span className="flex items-center font-medium text-base text-gray-dark">
                    {stream.classType.toLowerCase().includes('face') ? (
                        <>
                            <BsFillPersonFill color="#528ecc" className="mr-2" />
                            In Person
                        </>
                    ) : (
                        <>
                            <BsLaptop color="#528ecc" className="mr-2" />
                            Live Virtual Training
                        </>
                    )}
                </span>
            </div>
            <div className="flex justify-end">
                <button
                    className="bg-primary-default text-white rounded-md text-sm px-4 py-2"
                    onClick={showModal(stream)}
                    disabled={stream.filled}
                >
                    {stream.filled ? 'Fully booked' : 'Book Now'}
                </button>
            </div>
            <div></div>
        </div>
    )
}

export default TrainingItem
