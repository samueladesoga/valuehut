import React, { useState } from 'react'
import Image from 'next/image'
import TrainingItem from './trainingItem'
import { StreamTypes, TrainingTypes } from '../../data/training'

function WrapTraining({ training }: { training: TrainingTypes }) {
    const [_training, setTraining] = useState<TrainingTypes>(training)

    return (
        <div className="mb-8">
            <div className="grid grid-cols-12 items-center gap-6 mb-10">
                <div className="relative col-span-1 h-full hidden md:flex">
                    <Image
                        src={`/training/${_training.logo}`}
                        layout="fill"
                        objectFit="contain"
                        alt={`${_training.acronym}_logo`}
                    />
                </div>
                <div className="w-auto col-start-1 col-end-13 md:col-start-2">
                    <h3 className="mb-4 font-semibold">{_training.acronym}</h3>
                    <p className="text-sm max-w-3xl">{_training.description}</p>
                </div>
                <div className="col-start-1 col-end-13 md:col-start-2">
                    <h4 className="text-base">Upcoming classes:</h4>
                </div>
                {_training.streams &&
                    _training.streams.length > 0 &&
                    _training.streams.map((stream: StreamTypes, i: number) => (
                        <TrainingItem key={i} stream={stream} training={_training} />
                    ))}
                {((_training.streams && _training.streams?.length < 1) || !_training.streams) && (
                    <div className="w-full col-start-1 col-end-13 md:col-start-2">
                        No classes available. Please come back later!
                    </div>
                )}
            </div>
        </div>
    )
}

export default WrapTraining
