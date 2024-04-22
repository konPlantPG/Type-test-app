import React, { useState } from 'react';
import SearchComponent from './SearchComponent'


type SimulationTemplateProps =  {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SimulationTemplate: React.FC<SimulationTemplateProps> = (props) => {

    const [query, setQuery] = useState('');

    return (
        <>
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold my-8 text-center">配当利回りシミュレーション</h1>
                <SearchComponent
                    query = {props.query}
                    setQuery = { props.setQuery}
                />
            </div>
        </>
    )
}

export default SimulationTemplate