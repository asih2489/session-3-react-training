import React from 'react';
import { Theme } from '../state'
import { useDispatch } from 'react-redux';
import {addCategory} from '../../../redux/action/home';

const List = ({ data }) => {
    const theme = React.useContext(Theme);
    const [field, setField] = React.useState('');
    const [generateId, setId] = React.useState(99);
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addCategory({
            id: generateId + 1,
            name: field
        }))
        setId(generateId + 1);
        setField('');
    }

    return (
        <div>
            <ul>
               {
                   data && data.length > 0 && data.map((item) => {
                       if (item.id === 17) {
                        return (
                            <p key={item.id}>{item.name}</p>
                          )
                       }
                       return null;
                   })
               } 
            </ul>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <input value={field} onChange={(e) => setField(e.target.value)} />
                <button onClick={handleAdd} >add</button>

            </div>

        </div>
    );
}

export default List;
