import React, { useState } from 'react'
import data from "./data"
import { Person } from './types'
import { log } from 'console'

const ExtractExperience = () => {
    const [choseExperinece, setChoseExperience] = useState("")


    const experience: { [key: string]: string } = {
        junior: "junior",
        senior: "senior",
        medior: "medior",
    };




    return (
        <div className='w-screen max-w-4xl m-auto'>
            {/* Výběr */}
            <select className='cursor-pointer outline-none rounded-sm px-2 bg-slate-400 w-full' onChange={(e) => setChoseExperience(e.target.value)} name="" id="">
                <option value={experience.junior}>{experience.junior}</option>
                <option value={experience.medior}>{experience.medior}</option>
                <option value={experience.senior}>{experience.senior}</option>
            </select>

            {/* Výpis */}
            {((data as Person[]).map((persons) => (
                persons.zkusenosti === choseExperinece && (
                    <div className="bg-slate-200 flex w-full rounded-sm px-4">
                        <div className='w-[350px] flex justify-between'>
                            <p>{persons.jmeno} {persons.prijmeni} </p>
                            <p>tel.: {persons.telefon}</p>
                        </div>

                    </div>
                )
            )))}
        </div>
    )
}

export default ExtractExperience
