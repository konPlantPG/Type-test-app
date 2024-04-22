import React from 'react'
import { DataGrid, GridColDef, GridRowModel, GridRowParams } from '@mui/x-data-grid';

type TableProps = {
    columns: GridColDef[];
    rows: Array<object>;
    height?: number;
}

const Table = (props: TableProps) => {  
    const tableStyle = {
        height: props.height ? `${props.height}px` : '500px', // heightプロパティがあればその値を使用し、なければデフォルトの400pxを使用
        width: '100%'
    };

    return (
        <div className="flex justify-center">
            <div style={tableStyle}>
                <DataGrid
                    columns={props.columns || []}
                    rows={props.rows || []}
                />
            </div>
        </div>  
    )
}
export default Table