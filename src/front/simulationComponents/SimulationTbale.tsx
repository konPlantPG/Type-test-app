import React, { useState, useEffect } from 'react';

type SimulationTableProps = {
    items: any[];
    setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}

const SimulationTable: React.FC<SimulationTableProps> = ({ items = [], setTotalPrice }) => {  // デフォルト値を空の配列に設定
    const [shares, setShares] = useState<number[]>(new Array(items.length).fill(100));

    useEffect(() => {
        setShares(new Array(items.length).fill(100));
    }, [items]);

    useEffect(() => {
        const totalPrice = items.reduce((acc, item, index) => acc + (item.price * shares[index]), 0);
        setTotalPrice(Math.round(totalPrice));  // totalPrice を設定
    }, [items, shares]);

    const handleSharesChange = (index: number, value: string) => {
        const newShares = [...shares];
        newShares[index] = Number(value);
        setShares(newShares);
    };

    return (
        <div className="w-1/2 mx-auto">
            <table className="min-w-full leading-normal">
                <thead style={{ backgroundColor: '#49CDBD' }}>
                    <tr>
                        <th className="py-2 px-4 text-left" style={{ width: '150px' }}>Code</th>
                        <th className="py-2 px-4 text-left" style={{ width: '150px' }}>企業名</th>
                        <th className="py-2 px-4 text-left" style={{ width: '150px' }}>株価（円）</th>
                        <th className="py-2 px-4 text-left" style={{ width: '150px' }}>配当金（円）</th>
                        <th className="py-2 px-4 text-left" style={{ width: '150px' }}>株数</th>
                        <th className="py-2 px-4 text-left" style={{ width: '150px' }}>金額（円）</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td className="py-2 px-4 text-left">{item.code}</td>
                            <td className="py-2 px-4 text-left">{item.name}</td>
                            <td className="py-2 px-4 text-left">{item.price}</td>
                            <td className="py-2 px-4 text-left">{item.dividend}</td>
                            <td className="py-2 px-4 text-left">
                                <input
                                    type="number"
                                    value={shares[index]}
                                    onChange={(e) => handleSharesChange(index, e.target.value)}
                                    className="w-full"
                                    style={{ width: '150px' }}  // input要素にも同じ幅を設定
                                />
                            </td>
                            <td className="py-2 px-4 text-left">{Math.round(shares[index] * item.price)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SimulationTable;

