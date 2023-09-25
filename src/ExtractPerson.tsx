import React, { useState } from 'react';
import data from './data';
import { Person } from './types';

const ExtractPerson = () => {

    const [findIndex, setFindIndex] = useState("")


    return (
        <div className='w-screen max-w-4xl m-auto' >
            {/* Filter */}
            <select className='cursor-pointer outline-none rounded-sm px-2 bg-slate-400 w-full' name="" id="" onChange={(e) => setFindIndex(e.target.value)} >
                {((data as Person[]).map((person: Person) => (
                    <option key={person.email} value={person.email} >
                        {person.jmeno} {person.prijmeni}
                    </option>
                )))}



            </select>

            {/* Vybraná osoba */}
            <div>
                {
                    ((data as Person[]).map((person: Person) => (
                        person.email === findIndex && (
                            <section className='bg-slate-200 flex w-full rounded-sm '>

                                <div className='flex flex-col md:flex-row  justify-center gap-4 p-4 w-full '>
                                    {/* Základní údaje */}
                                    <div className='w-full'>
                                        <p className='italic text-xs'>Adresa:</p>
                                        <p className='font-semibold'> {person.jmeno} <span className='uppercase'>{person.prijmeni}</span></p>
                                        <p>{person.ulice} {person.cisloPopisne}</p>
                                        <p>{person.psc} {person.mesto}</p>
                                    </div>
                                    {/* Ostatní údaje */}
                                    <div className='w-full'>
                                        <p className='italic text-xs'>Ostatní údaje</p>
                                        <p className='sm:w-[350px] flex justify-between '>Zkušenosti:<span className=''> {person.zkusenosti}</span></p>
                                        <p className='sm:w-[350px] flex justify-between '>Email:<span className=''> {person.email}</span></p>
                                        <p className='sm:w-[350px] flex justify-between '>Vztah:<span className=''> {person.vztah ? "Ženatý/Vdaná" : "Svobodný/á"}</span></p>
                                        <p className='sm:w-[350px] flex justify-between '>Počet dětí:<span> {person.deti}</span></p>
                                        <p className='sm:w-[350px] flex justify-between '>Věk:<span> {person.vek}</span></p>
                                        <p className='sm:w-[350px] flex justify-between '>Telefon:<span> {person.telefon}</span></p>
                                        <p className='sm:w-[350px] flex justify-between '>Plat:<span> {person.plat} Kč</span></p>
                                        <p className='sm:w-[350px] flex justify-between '>Datum Narození:<span>{person.datumNarozeni}</span></p>
                                        <p className='sm:w-[350px] flex justify-between '>Vedlejší Příjmy:<span>{person.vedlejsiPrijmy}</span></p>
                                    </div>
                                </div>
                            </section>
                        )
                    )

                    ))
                }


            </div>
        </div>
    );
};

export default ExtractPerson;


