import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addCashCreator,
  asyncDecCountCreator,
  asyncDecrementCreator,
  asyncIcrementCreator,
  asyncIncCountCreator,
  getCashCreator,
} from "./store/cashReducer";
import {
  addCustomerAction,
  deleteCustomerAction,
  fetchCustomerAction,
} from "./store/customerReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash?.cash);
  const customers = useSelector((state) => state.customers?.customers);

  console.log(cash);

  const addCash = (cash) => {
    dispatch(addCashCreator(cash));
  };
  const getCash = (cash) => {
    dispatch(getCashCreator(cash));
  };

  const addCustomer = (name) => {
    const customer = { name, id: Date.now() };
    dispatch(addCustomerAction(customer));
  };
  const deleteCustomer = (id) => {
    console.log(id);
    dispatch(deleteCustomerAction(id));
  };

  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <div>{cash}</div>
        <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
        <button onClick={() => dispatch(asyncIncCountCreator())}>
          Async add cash
        </button>
        <button onClick={() => dispatch(asyncDecCountCreator())}>
          Async decrement cash
        </button>
        <button onClick={() => getCash(Number(prompt()))}>Take cash</button>
        <button onClick={() => addCustomer(prompt())}>Add customer</button>
        <button onClick={() => dispatch(fetchCustomerAction())}>Get aLL</button>
      </div>
      <div>
        {customers?.length > 0 ? (
          <div>
            {customers.map((customer, customerIndex) => (
              <div
                key={customer.id}
                onClick={() => deleteCustomer(customer.id)}
              >
                {customerIndex + 1} | {customer.name}
              </div>
            ))}
          </div>
        ) : (
          <div>There is no customer</div>
        )}
      </div>
    </div>
  );
}

export default App;
