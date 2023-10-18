import {FC, useRef, useState} from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import styles from './Table.module.css';
import Modal from "../Modal/Modal";

const Table: FC<any> = ({ users }) => {
    const [rowData, setRowData] = useState<any>(users);
    const [isModal, setIsModal] = useState<boolean>(false);
    const [columnDefs] = useState<any>([
        { field: 'id' },
        { field: 'title' },
        { field: 'body' }
    ]);
    const gridRef = useRef<any>(null);
    const inputTitleRef = useRef<any>(null);
    const inputTextRef = useRef<any>(null);

    const onToggleModalDelete = () => {
        setIsModal(true);
    };

    const onRemove = () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const selectedNodes = gridRef.current?.api.getSelectedNodes();
        const selectedId = selectedNodes.map((item: any) => item.data.id);
        const newUsers = rowData.filter((user: any) => selectedId.indexOf(user.id) < 0);

        setRowData(newUsers);
        setIsModal(false);
    };

    const onAddRow = (event: any) => {
        event.preventDefault();

        const title = inputTitleRef.current;
        const body = inputTextRef.current;

        if (!title.value) {
            return;
        }

        setRowData([...rowData, {
            id: rowData.length + 1,
            title: title.value,
            body: body.value ? body.value : 'text ....'
        }]);

        event.currentTarget.reset();
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.tools}>
                <form className={styles.form} action="" onSubmit={onAddRow}>
                    <input ref={inputTitleRef} type="text"/>
                    <input ref={inputTextRef} type="text"/>
                    <button type={'submit'}>Add Row</button>
                </form>
                <button onClick={onToggleModalDelete}>Remove item</button>
            </div>
            <div className="ag-theme-alpine" style={{ height: 400, width: 720 }}>
                <AgGridReact
                    ref={gridRef}
                    rowSelection={'multiple'}
                    animateRows={true}
                    rowData={rowData} columnDefs={columnDefs} editType="fullRow">
                </AgGridReact>
            </div>
            {isModal &&
                <Modal title={'Remove rows?'} onRemove={onRemove} setIsModal={setIsModal}/>
            }
        </div>
    );
};

export default Table;
