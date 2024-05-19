import React, { useState, useEffect } from 'react';
import SearchWindow from './SearchWindow';
import SimulationTable from './SimulationTbale';
import SimulationText from './SimulationText';

type SimulationTemplateProps = {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    searchResults: any[];
}

const SimulationTemplate: React.FC<SimulationTemplateProps> = (props) => {
    const [query, setQuery] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);
    const [items, setItems] = useState<any[]>([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalDividend, setTotalDividend] = useState(0);

    useEffect(() => {
        const priceSum = items.reduce((acc, item) => acc + item.price, 0);
        const dividendSum = items.reduce((acc, item) => acc + item.dividend, 0);
        setTotalPrice(priceSum);
        setTotalDividend(dividendSum);
    }, [items]);

    const addItem = (item: any) => {
        setItems(prevItems => [...prevItems, item]);
    };

    return (
        <>
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold my-8 text-center">配当利回りシミュレーション</h1>
                <SearchWindow
                    query={props.query}
                    setQuery={props.setQuery}
                    searchResults={props.searchResults}
                    setSelectedItem={setSelectedItem}
                    addItem={addItem}
                />
                <br></br>
                <SimulationText totalPrice={totalPrice} totalDividend={totalDividend} />
                <SimulationTable items={items} setTotalPrice={setTotalPrice}/>
            </div>
        </>
    );
}

export default SimulationTemplate;