import React, { useState } from 'react';

type SearchComponentProps =  {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchComponent: React.FC<SearchComponentProps> = (props) =>  {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setQuery(event.target.value);
  };


  const handleClear = () => {
    props.setQuery('');
  };

  return (
    <div className="flex justify-between items-center bg-gray-200 rounded-full pl-4 pr-2 py-2 w-1/2 mx-auto">
      <span className="text-gray-500">🔍</span>
      <input
        className="flex-grow bg-transparent outline-none pl-2" // 幅をflex-growに設定
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
  );
}

export default SearchComponent;