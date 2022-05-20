import { useState, useEffect } from 'react';
import './App.css';
import Table from './components/table';
import AddItems from './components/addItems';
import data from './data.js';

function App() {
    const [tableData, setTableData] = useState([]);
    const [newItem, setNewItem] = useState({
        name: '',
        phone: '',
        email: '',
    });
    useEffect(() => {
        setTableData(data);
    }, []);

    // mimicking fetch request from a server

    return (
        <div className="App">
            <div className="app-container">
                <Table data={tableData}></Table>
            </div>
        </div>
    );
}

export default App;
