import { useEffect, useState } from "react";

export const useFetch = (url, method= "GET") => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [options, setOptions] = useState(null);

    const postData = (recipe) => {
        setOptions({
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipe)
        });
    }

    useEffect(() => {
        const fetchData = async (fetchOptions) =>{
            setIsLoading(true);
            try{
                const res = await fetch(url, {...fetchOptions});
                if(!res.ok){
                    throw new Error(res.statusText);
                }
                const json = await res.json();
                setIsLoading(false);   
                setData(json);
            }catch(error){
                setIsLoading(false)
                setError('Could Not fetch Error :(');
                console.log(error.message);
            }
        }
        if(method === "GET"){
            fetchData();
        }
        if(method === "POST" && options){
            fetchData(options)
        }
    }, [url, options, method])

    return { data, isLoading, error, postData}
    
}