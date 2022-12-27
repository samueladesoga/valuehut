import React from 'react';
import ReactDOM from 'react-dom/client';
import './dates-table.module.scss';

import { TrainingTypes, StreamTypes, PriceTypes } from '../../data/training';
import { sortStreams } from './dates-table.helpers';

import BookingForm from '../booking-form/booking-form.component';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface DatesTableTypes {
    training: TrainingTypes;
    streams: StreamTypes[];
}

export function getDateInWords(date: any): string {
    // let newDate = date.setDate(date.getDate());
    let newDate = date.toString().split(' ').slice(1, 4);
    return `${newDate[0]} ${newDate[1]}, ${newDate[2]}`;
}

const DatesTable: React.FC<DatesTableTypes> = ({ training, streams }) => {
    const tableStreams = sortStreams(streams);

    return (
        <div style={{ maxWidth: '90%', margin: '0 auto', marginTop: 20, marginBottom: 30 }}>
            <h2 style={{ marginBottom: 20 }}>Class Schedule</h2>
            <TableContainer component={Paper}>
                <Table
                    sx={{
                        width: '100%',
                        maxWidth: '100%',
                        fontSize: '20px',
                    }}
                    aria-label="simple table"
                >
                    <DatesTableHead />
                    <TableBody>
                        {tableStreams.map((stream: StreamTypes) => {
                            const { startDate, endDate, time, classType, price, filled } = stream;
                            return (
                                <DatesTableStream
                                    training={training}
                                    stream={stream}
                                    key={`${training.title}-${stream.startDate}`}
                                />
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

const DatesTableHead = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Dates</TableCell>
                <TableCell align="center">Time</TableCell>
                <TableCell align="center">Type</TableCell>
                <TableCell></TableCell>
            </TableRow>
        </TableHead>
    );
};

interface DatesTableStreamTypes {
    training: TrainingTypes;
    stream: StreamTypes;
}

const DatesTableStream: React.FC<DatesTableStreamTypes> = ({ training, stream }) => {
    const { startDate, endDate, time, classType, price, filled } = stream;
    const showModal =
        (stream: any): any =>
        (e: MouseEvent): any => {
            e.preventDefault();
            const Modal = React.lazy(() => import('../modal/modal.component'));
            const modalRoot = ReactDOM.createRoot(document.getElementById('modal-root') as HTMLElement);
            modalRoot.render(
                <React.Suspense fallback={<div style={{ display: 'none' }}> </div>}>
                    <Modal root={modalRoot}>
                        <BookingForm training={training} stream={stream} />
                    </Modal>
                </React.Suspense>,
            );
        };
    return (
        <TableRow key={startDate.toString()} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row" style={{ width: '40%' }}>
                {getDateInWords(new Date(startDate))}
                &#160; - &#160;
                <br className="xs-visible" />
                {getDateInWords(new Date(endDate))}
            </TableCell>
            <TableCell align="center">{time}</TableCell>
            <TableCell align="center">{classType}</TableCell>
            <TableCell align="right">
                {!filled ? (
                    <span className="link-button" onClick={showModal(stream)}>
                        Book
                    </span>
                ) : (
                    <span className="link link-disabled">Fully booked</span>
                )}
            </TableCell>
        </TableRow>
    );
};

export default DatesTable;
