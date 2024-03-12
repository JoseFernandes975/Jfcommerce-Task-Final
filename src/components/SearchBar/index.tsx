/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import './styles.css';

type Props = {
    // eslint-disable-next-line @typescript-eslint/ban-types
    onSubmitSearch: Function
}

export default function SearchBar({ onSubmitSearch }: Props){
    
    const [searchName, setSearchName] = useState<string>();

    function handleChange(event: any){
      setSearchName(event.target.value);
    }

    function handleSubmitInput(event: any){
        event?.preventDefault();
       onSubmitSearch(searchName);
    }

    function handleClearInput(){
      setSearchName('');
    }

    return(
      <form onSubmit={handleSubmitInput}>
        <button type='submit'>🔎︎</button>
        <input  onChange={handleChange} type="text" placeholder='Nome do produto' />
        <button onClick={handleClearInput} type='reset'>x</button>
      </form>
    );
}