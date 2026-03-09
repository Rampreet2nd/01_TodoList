import { useState } from 'react'

const ToDo = () => {
    const [data, setData] = useState([
        { id: 1, name: "Rampreet", address: "Lehra" },
        { id: 2, name: "Sonali", address: "Mohabbat" }
    ]);

    const [data2, setData2] = useState("");

    const setValue = (e) => {
        setData2({ ...data2, [e.target.name]: e.target.value });
    }

    function AddData(e) {
        e.preventDefault();
       let obj = {
            id: data.length + 1,
            name: data2.name,
            address: data2.address
        }
        setData([
            ...data,
            obj
        ])
    }

    const Delete = (e) => {
        data.splice(e.target.id, 1);
        setData([...data]);
    }

    const Edit = (e) => {
        let id = e.target.id ;
        setData2({ id: id, name: data[id].name, address: data[id].address });
        console.log(Number(id) + 1 + " Selected");
    }

    const Update = () => {
        let id = data2.id;
        data[id].name = data2.name;
        console.log(data[id].name);
        data[id].address = data2.address;
        setData([...data]);
        console.log(Number(id) + 1 + " Updated");
    }

    console.log(data);

    return (
        <div className='container con'>
            <h2 className='text-center'>STUDENT INFO</h2>
            <form onSubmit={AddData}>
                <div className="mb-3">
                    {/* <input id='id'  onChange={setValue} type="text" className="form-control" value={data2.id}/> */}
                    <label htmlFor="" className="form-label">Name</label>
                    <input id='name' name='name' onChange={setValue} type="text" className="form-control" value={data2.name} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Address</label>
                    <input id='address' name='address' onChange={setValue} type="text" className="form-control" value={data2.address} required />
                </div>
                <button type="submit" className="btn btn-success">Add Detail</button>
                <button onClick={Update} type="button" className="btn btn-primary mx-3">Update</button>
            </form>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Sr No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.address}</td>
                            <td style={{ minWidth: "180px" }}><button id={index} onClick={Delete} className="btn btn-danger mx-2">Delete</button>
                                <button id={index} onClick={Edit} className="btn btn-primary mx-2">Edit</button></td>
                        </tr>

                    ))}
                </tbody>
            </table>


        </div>
    )
}

export default ToDo