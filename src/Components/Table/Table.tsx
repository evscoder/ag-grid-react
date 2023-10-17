import {FC, useCallback, useRef, useState} from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const Table: FC<any> = ({ users }) => {
    const [rowData, setRowData] = useState<any>();
    const [columnDefs] = useState<any>([
        { field: 'id' },
        { field: 'title' },
        { field: 'body' }
    ]);
    const gridRef = useRef<any>(null);

    const onLoadUsers = useCallback(() => {
        setRowData([...users]);
    }, []);

    const onRemove = useCallback(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const selectedNodes = gridRef.current?.api.getSelectedNodes();
        const selectedId = selectedNodes.map((item: any) => item.data.id);
        const newUsers = rowData.filter((user: any) => selectedId.indexOf(user.id) < 0);

        setRowData(newUsers);
    }, [rowData]);

    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: 720 }}>
            <button onClick={onLoadUsers} data-test-id={'btn-add'}>Add users</button>
            <button onClick={onRemove}>Remove item</button>
            <AgGridReact
                ref={gridRef}
                rowSelection={'multiple'}
                animateRows={true}
                rowData={rowData} columnDefs={columnDefs} editType="fullRow">
            </AgGridReact>
        </div>
    );
};

export default Table;
