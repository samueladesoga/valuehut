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
                    Scrum and Agile Leadership Training Schedule
                </h1>
            </div>

            <div className="max-w-5xl m-auto p-5">
                <div className="flex justify-between mb-4">
                    <h2 className="text-3xl text-gray-dark">Upcoming classes</h2>
                </div>
                <div className="mb-8">
                    <p className="text-base mb-2">Filter:</p>
                    <div>
                        <ul className="flex flex-wrap gap-2 text-sm">
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
                                    'border-primary-default bg-primary-light': filters.includes('PAL-E'),
                                })}
                                onClick={() => handleFilter('PAL-E')}
                            >
                                PAL - Essentials
                            </li>
                            <li
                                className={classNames('border-2 rounded-md px-2 py-1 cursor-pointer', {
                                    'border-primary-default bg-primary-light': filters.includes('PAL-EBM'),
                                })}
                                onClick={() => handleFilter('PAL-EBM')}
                            >
                                PAL - Evidence Based Management
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
                                    'border-primary-default bg-primary-light': filters.includes('PSM-A'),
                                })}
                                onClick={() => handleFilter('PSM-A')}
                            >
                                PSM - Advanced
                            </li>
                            <li
                                className={classNames('border-2 rounded-md px-2 py-1 cursor-pointer', {
                                    'border-primary-default bg-primary-light': filters.includes('PSPO'),
                                })}
                                onClick={() => handleFilter('PSPO')}
                            >
                                PSPO
                            </li>
                            <li
                                className={classNames('border-2 rounded-md px-2 py-1 cursor-pointer', {
                                    'border-primary-default bg-primary-light': filters.includes('PSF Skills'),
                                })}
                                onClick={() => handleFilter('PSF Skills')}
                            >
                                PSF Skills
                            </li>
                            <li
                                className={classNames('border-2 rounded-md px-2 py-1 cursor-pointer', {
                                    'border-primary-default bg-primary-light': filters.includes('PSPBM Skills'),
                                })}
                                onClick={() => handleFilter('PSPBM Skills')}
                            >
                                PSPBM Skills
                            </li>
                            <li
                                className={classNames('border-2 rounded-md px-2 py-1 cursor-pointer', {
                                    'border-primary-default bg-primary-light': filters.includes('APS'),
                                })}
                                onClick={() => handleFilter('APS')}
                            >
                                APS
                            </li>
                            <li
                                className={classNames('border-2 rounded-md px-2 py-1 cursor-pointer', {
                                    'border-primary-default bg-primary-light': filters.includes('APS-SD'),
                                })}
                                onClick={() => handleFilter('APS-SD')}
                            >
                                APS-SD
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
