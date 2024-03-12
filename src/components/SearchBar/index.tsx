import './styles.css';

export default function SearchBar(){
    
    return(
      <form>
        <button type='submit'>🔎︎</button>
        <input type="text" placeholder='Nome do produto' />
        <button type='reset'>x</button>
      </form>
    );
}