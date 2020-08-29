import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "../../redux/actions/home";

const ReduxExample = () => {
  const data = useSelector((state) => state.home);
  const dispatch = useDispatch();
  console.log(data);
  const deleteProduct = (id) => {
    dispatch(deleteItem(id));
  };
  return (
    <div>
      ini halaman redux
      <ul>
        {data.map((val, idx) => {
          return (
            <li key={idx}>
              {val.name}
              <button onClick={() => deleteProduct(val.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default connect()(ReduxExample);
