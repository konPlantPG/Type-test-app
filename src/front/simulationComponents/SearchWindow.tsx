import React, { useState } from 'react';

type SearchWindowProps =  {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    searchResults: any[];
    setSelectedItem: (item: any) => void;
}

const SearchWindow: React.FC<SearchWindowProps> = (props) =>  {

  const [showDropdown, setShowDropdown] = useState(false);
 
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setQuery(event.target.value);
    if (event.target.value) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleClear = () => {
    props.setQuery('');
    setShowDropdown(false);
  };

  const handleSelectItem = (item: any) => {
    props.setSelectedItem(item);  // 選択されたアイテムを設定
    setShowDropdown(false);  // ドロップダウンを閉じる
  };

  return (
    <div className="items-center mx-auto w-1/2">
      <div className="flex justify-between items-center bg-gray-200 rounded-full pl-4 pr-2 py-2">
        <span className="text-gray-500">🔍</span>
        <input
          className="flex-grow bg-transparent outline-none pl-2"
          type="text"
          placeholder="企業コードもしくは企業名を入力"
          value={props.query}
          onChange={handleChange}
        />
        {props.query && (
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={handleClear}
          >
            ✕
          </button>
        )}
      </div>
      {showDropdown && (
        <div className="bg-white shadow-md rounded-md mt-2">
          {props.searchResults.map((result, index) => (
            <div key={index} className="p-2 hover:bg-gray-100" onClick={() => handleSelectItem(result)}>
              {`${result.code}: ${result.name}`}
            </div>
          ))}
        </div>
      )}
    </div>
  )}

export default SearchWindow;