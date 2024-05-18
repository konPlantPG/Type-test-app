import React, { useState } from 'react';

type SimulationTableProps = {
    item: any;  // 選択されたアイテムのデータ
}

const SimulationTable: React.FC<SimulationTableProps> = ({ item }) => {
    if (!item) return <div></div>;

    return (
        <table className="min-w-full leading-normal">
            <thead>
                <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Code
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Price
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {item.code}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {item.name}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {item.price}
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default SimulationTable;