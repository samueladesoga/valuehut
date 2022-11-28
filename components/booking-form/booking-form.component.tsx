import React, { useState } from 'react';
import bfStyles from './booking-form.module.scss';
import Image from 'next/image';
import { TrainingTypes, StreamTypes, PriceTypes } from '../../data/training';
import { getDateInWords } from '../dates-table/dates-table.component';
import { countries, primaryMarket, tertiaryMarket } from '../../data/countries';

// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import { nextTick } from 'process';
// import { captureRejectionSymbol } from 'events';

interface BookingFormTypes {
    training: TrainingTypes,
    stream: StreamTypes
}

const BookingForm: React.FC<BookingFormTypes> = ({ training, stream }) => {
    const [country, setCountry] = useState("United Kingdom");
    const [bookPrice, setBookPrice] = useState(stream.price[0]);
    const handleChange = (event: any) => {
        setCountry(event.target.value);
        let priceNumber = 0;
        for(priceNumber; priceNumber < stream.price.length - 1; priceNumber++) {
            if (stream.price[priceNumber].regionDescription.includes(event.target.value)) {
                break;
            }
        }
        // if (primaryMarket.includes(event.target.value)) {
        //     setBookPrice(stream.price[0].toString())
        // } else if (tertiaryMarket.includes(event.target.value)) {
        //     setBookPrice(stream.price[1].toString())
        // } else {
        //     setBookPrice(stream.price[2].toString())
        // }
        setBookPrice(stream.price[priceNumber])
    };
    return (
        <div className={`${bfStyles.bookingForm}`}>
            <div className={`${bfStyles.bookingForm__description}`}>
                <div className={`${bfStyles.bookingForm__logoContainer}`}>
                    <Image width='80' height='80' alt="logo" className={`${bfStyles.bookingForm__logo}`} src={`/training/${training.logo}`} />
                </div>
                <div>
                    <h3>{training.title}</h3>
                    { getDateInWords(new Date(stream.startDate)) } 
                    <span> </span>
                    -
                    <span> </span>
                    <br className="xs-visible" />
                    { getDateInWords(new Date(stream.endDate)) }
                </div>
            </div>
            <br />
            <label>Where do you live?</label>
            <br />
            
            <select onChange={handleChange} defaultValue={country}>
                {
                    countries.map(c => {
                        return (
                            <option value={c} key={c} >{c}</option>
                        )
                    })
                }
            </select>
            <a 
                id="addToCart"
                className="button button-primary button-primary-small"
                href={
                    encodeURI(`https://valuehut.foxycart.com/cart?name=${training.title}
                    &Start Date=${getDateInWords(new Date(stream.startDate))}
                    &Time=${stream.time}
                    &price=${bookPrice.amount}${bookPrice.currency ? `${bookPrice.currency.name}` : ""}
                    ${bookPrice.currency ? `&locale=${bookPrice.currency.locale}` : ""}
                    ${bookPrice.currency ? `&template_set=${bookPrice.currency.template}` : `&template_set=DEFAULT`}
                    `)
                } 
            >
                BOOK FOR { bookPrice.currency ? bookPrice.currency.symbol : "$" } {bookPrice.amount.toString()}
            </a>
        </div>
    )
}

export default BookingForm;