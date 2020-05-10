import React, {useEffect, useState} from 'react'
import {NativeSelect, FormControl, StylesProvider} from '@material-ui/core' 
import styles from './CountryPicker.module.css'
import { fetchCountries } from '../../api'


const CountryPicker = ({handleCountryChange}) => {
    const [fechedCountries, setFechedCountries] = useState([]);

    useEffect(() => {
        
        const fetchAPI = async () => {
            setFechedCountries(await fetchCountries())
        }

        fetchAPI()

    }, [setFechedCountries])


    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                    {fechedCountries.map((country, i) => 
                    <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
