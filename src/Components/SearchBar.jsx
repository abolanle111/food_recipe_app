import React from "react";

const SearchBar = ({ value, isLoading, handleSubmit, onChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        disabled={isLoading}
        onChange={onChange}
        className="form-input"
        placeholder="Search recipes"
      />
      <input  disabled = {isLoading   || !value}  type="submit" className="btn" value="Search" />
    </form>
  );
};

export default SearchBar;
