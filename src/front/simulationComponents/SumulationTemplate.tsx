import React, { useState } from 'react';
import SearchWindow from './SearchWindow';
import SimulationTable from './SimulationTbale';

type SimulationTemplateProps = {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    searchResults: any[]; // ここに searchResults プロパティを追加
}


const SimulationTemplate: React.FC<SimulationTemplateProps> = (props) => {

    const [query, setQuery] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <>
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold my-8 text-center">配当利回りシミュレーション</h1>
                <SearchWindow
                    query = {props.query}
                    setQuery = { props.setQuery}
                    searchResults = {props.searchResults}
                    setSelectedItem={setSelectedItem}
                />
                <SimulationTable item = {selectedItem}/>
            </div>
        </>
    )
}

export default SimulationTemplate