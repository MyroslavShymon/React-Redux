const defaultState = {
  customers: [],
};

export const ADD_CUSTOMER = "ADD_CUSTOMER";
export const FETCH_CUSTOMERS = "FETCH_CUSTOMERS";
export const ADD_CUSTOMERS = "ADD_CUSTOMERS";
export const DELETE_CUSTOMER = "DELETE_CUSTOMER";

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] };
    case ADD_CUSTOMERS:
      return {
        ...state,
        customers: action.payload,
      };

    case DELETE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload });
export const addCustomersAction = (payload) => ({
  type: ADD_CUSTOMERS,
  payload,
});
export const fetchCustomerAction = () => ({
  type: FETCH_CUSTOMERS,
});
export const deleteCustomerAction = (payload) => ({
  type: DELETE_CUSTOMER,
  payload,
});
