const defaultState = {
    color: 'blue',
    category: [
        {
          "id": 14,
          "name": "Jackets",
          "image": null,
          "url_path": "men/tops-men/jackets-men",
          "__typename": "CategoryTree"
        },
        {
          "id": 15,
          "name": "Hoodies & Sweatshirts",
          "image": null,
          "url_path": "men/tops-men/hoodies-and-sweatshirts-men",
          "__typename": "CategoryTree"
        },
        {
          "id": 16,
          "name": "Tees",
          "image": null,
          "url_path": "men/tops-men/tees-men",
          "__typename": "CategoryTree"
        },
        {
          "id": 17,
          "name": "Tanks",
          "image": null,
          "url_path": "men/tops-men/tanks-men",
          "__typename": "CategoryTree"
        }
      ],
    label: '',
};

const homeReducer = (state = defaultState, action) => {
    const { type, payload } = action
    switch (type) {
        case 'GET_COLOR':
            return state.color;
        case 'ADD_CATEGORY': 
          return {
            ...state,
            category: [
              ...state.category,
              payload,
            ]
          }
        case  'UPDATE_LABEL': 
          return {
            ...state,
            label: 'HELLO WORLD'
          }
        default:
            return state;
    }
};

export default homeReducer;
