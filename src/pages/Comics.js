import React, { useEffect, useState} from 'react';
import Loader from '../components/Loader';
import TableContent from '../components/TableContent';
import { useData } from '../hooks/useData';

export default function Comics(){
    let endPoint ="http://gateway.marvel.com/v1/public/comics?ts=1&apikey=ab1e76149b9228060429d4570fa8f062&hash=0d552aa59c4a7f54e9a368e76e025ccc";
    const {data, getData} = useData();
    const [loader, setLoader] = useState(false);
    useEffect(()=>{
        setLoader(true);
        getData(endPoint);
        setTimeout(()=>{
            setLoader(false);
        }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return(
        <>
            <h2 style={{marginTop: "1rem", padding:"10px"}}>COMICS</h2>
            <TableContent data={data} />
            {loader && <Loader />}
        </>
    );
}