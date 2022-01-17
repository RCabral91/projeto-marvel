import { useState } from "react";
import { MdSearch } from "react-icons/md";

interface ISearchInputProps {
  placeholder?: string;
  onSearch(searchText: string): void;
}

export const SearchInput: React.FC<ISearchInputProps> = ({placeholder='Search', onSearch}) => {
  const [searchText, setSearchText] = useState('');
    return (
      <div className="d-flex">
        <input 
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          placeholder={placeholder}
          type="text" 
          className="form-control" 
        />
        <button 
          onClick={() => onSearch(searchText)}
          type="button" 
          className="btn btn-danger">
          <MdSearch />
        </button>
      </div>
    );
};