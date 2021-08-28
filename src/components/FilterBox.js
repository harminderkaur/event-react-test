
function FilterBox({placeholder, searchHandler}) {
  return (
    <header className="mb-3">
      <form>
        <input 
          className="form-control form-control-lg"
          type="search"
          placeholder={placeholder}
          onChange={searchHandler}></input>
      </form>
    </header>
  );
}

export default FilterBox;
