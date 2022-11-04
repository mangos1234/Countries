import './Filter.css';

const Filter = (props) => {

  return(
    <div>
      <form>
        <select  className={props.mode? "dark":""} name="cars" id="cars" onChange={({target}) => props.onFilterChange(target)}>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
      </form>
    </div>
  );
}

export default Filter;