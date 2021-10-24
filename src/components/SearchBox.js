import React from 'react';

const SearchBox = (props) => {
	return (
		<div>
			<div className="input-group my-3">
	  			<input type="text" className="form-control" value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type to search...' />
	  			<input type="submit" value="Submit" className="input-group-text btn btn-primary" />
			</div>
		</div>
	);
};

export default SearchBox;