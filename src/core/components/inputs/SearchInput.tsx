import React from "react";
import SearchInputIcon from "./SearchInputIcon";

type Props = {
  onChange: (value: string) => void;
  onSearch: () => void;
  value: string;
};

const SearchInput: React.FC<Props> = ({ onChange, value, onSearch }) => {
  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <div className="flex justify-center items-center h-10">
      <input
        value={value}
        onChange={onHandleChange}
        className="px-4 py-2 border-gray-300 border rounded-l-md h-10 focus:rounded-none"
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-r-md h-10"
        onClick={onSearch}
      >
        <SearchInputIcon />
      </button>
    </div>
  );
};

export default SearchInput;
