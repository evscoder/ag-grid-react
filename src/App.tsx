import './App.css'
// import Table from "./Components/Table/Table";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchUsers} from "./Redux/userSlice";
import Table from "./Components/Table/Table";
function App() {
    const user = useSelector((state: any) => state.userSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(fetchUsers());
    },[]);
    return (
        <div>
            {!user.loading && <Table users={user.users} />}
        </div>
    );

}

export default App
