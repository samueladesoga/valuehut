import React, { useCallback, useState } from 'react'

import { training } from '../../data/training'
import WrapTraining from './training'
import classNames from 'classnames'
import TrustBox from '../../components/trustbox/trustbox.component'

function SchedulePage() {
    const [trainings, setTrainings] = useState(training.training)
    const [filters, setFilters] = useState<string[]>([])

    const handleFilter = useCallback((filter: string) => {
        setTrainings(training.training)
        setFilters((prev) => {
            return prev.includes(filter) ? prev.filter((v) => v !== filter) : [...prev, filter]
        })
    }, [])

    return (
        <div className="min-h-screen bg-[#F9F6F3]">
            <div className="w-full h-80 mb-10 bg-gradient-to-r from-primary-dark to to-primary-default flex items-center justify-center">
                <h1 className="text-5xl text-white text-center">
                    Our up and coming <br></br>Training courses
                </h1>
            </div>

            <div className="max-w-[1440px] m-auto p-5">
                <div className="flex justify-between mb-4">
                    <h3 className="text-3xl text-gray-dark">Our next classes</h3>
                </div>
                <div className="mb-8">
                    <p className="text-base mb-2">Select classes:</p>
                    <div>
                        <ul className="flex gap-2 text-sm">
                            <li
                                className={classNames('border-2 rounded-md px-2 py-1 cursor-pointer', {
                                    'border-primary-default bg-primary-light': filters.length < 1 || filters.length > 4,
                                })}
                                onClick={() => setFilters([])}
                            >
                                All
                            </li>
                            <li
                                className={classNames('border-2 rounded-md px-2 py-1 cursor-pointer', {
                                    'border-primary-default bg-primary-light': filters.includes('PSM'),
                                })}
                                onClick={() => handleFilter('PSM')}
                            >
                                PSM
                            </li>
                            <li
                                className={classNames('border-2 rounded-md px-2 py-1 cursor-pointer', {
                                    'border-primary-default bg-primary-light': filters.includes('PSM II'),
                                })}
                                onClick={() => handleFilter('PSM II')}
                            >
                                PSM II
                            </li>
                            <li
                                className={classNames('border-2 rounded-md px-2 py-1 cursor-pointer', {
                                    'border-primary-default bg-primary-light': filters.includes('PSFS'),
                                })}
                                onClick={() => handleFilter('PSFS')}
                            >
                                PSFS
                            </li>
                            <li
                                className={classNames('border-2 rounded-md px-2 py-1 cursor-pointer', {
                                    'border-primary-default bg-primary-light': filters.includes('PAL-E'),
                                })}
                                onClick={() => handleFilter('PAL-E')}
                            >
                                PAL-E
                            </li>
                            <li
                                className={classNames('border-2 rounded-md px-2 py-1 cursor-pointer', {
                                    'border-primary-default bg-primary-light': filters.includes('APS'),
                                })}
                                onClick={() => handleFilter('APS')}
                            >
                                APS
                            </li>
                        </ul>
                    </div>
                </div>
                {trainings &&
                    trainings.map((item, i) => {
                        if (filters.indexOf(item.acronym as string) !== -1 || filters.length < 1)
                            return <WrapTraining key={i} training={item} />

                        return undefined
                    })}
                <div className="mt-8">
                    <TrustBox />
                </div>
            </div>
        </div>
    )
}

export default SchedulePage
