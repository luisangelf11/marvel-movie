import {useState} from 'react';

export const useData =()=>{
    const [data, setData] = useState([]);

    const getData =(endPoint)=>{
        fetch(endPoint)
        .then((res)=> res.ok? res.json(): Promise.reject(res))
        .then((json)=>{
            console.log(json);
            setData(json.data.results);
        }).catch((err)=>{
            console.error(err);
        });
    }

    return{
        data,
        getData
    };
}