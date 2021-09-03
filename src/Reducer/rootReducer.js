let initaialState = {
    creams: [
        {
          name: "Anti-Wrinkle Cream",
          price: 35.50,
          description: "lorem Ipsum",
          item_type: "creams",
          quantity: 1,
          id: "CREAM001"
        },
        {
            name: "All Natural Avoevera Cream",
            price: 74.70,
            description: "lorem Ipsum",
            item_type: "creams",
            quantity: 1,
            id: "CREAM002"
        },
        {
            name: "Oraganic Hand Lotion",
            price: 44.00,
            description: "lorem Ipsum",
            item_type: "creams",
            quantity: 1,
            id: "CREAM003"
        },
        {
            name: "Scented Body Lotion",
            price: 56.25,
            description: "lorem Ipsum",
            item_type: "creams",
            quantity: 1,
            id: "CREAM004"
        },
        {
            name: "Shea Butter Cream",
            price: 14.99,
            description: "lorem Ipsum",
            item_type: "creams",
            quantity: 1,
            id: "CREAM005"
        },
        {
            name: "Cocoa Butter Facial Cream",
            price: 32.00,
            description: "lorem Ipsum",
            item_type: "creams",
            quantity: 1,
            id: "CREAM006"
        }
    ],
    oils: [
        {
            name: "Natural Coconut Oil",
            price: 47.00,
            description: "lorem Ipsum",
            item_type: "oils",
            quantity: 1,
            id: "OIL001"
          },
          {
              name: "Virgin Oil",
              price: 104.99,
              description: "lorem Ipsum",
              item_type: "oils",
              quantity: 1,
              id: "OIL002"
          },
          {
              name: "Body Splash",
              price: 62.20,
              description: "lorem Ipsum",
              item_type: "oils",
              quantity: 1,
              id: "OIL003"
          },
          {
              name: "Massage Oil",
              price: 70.25,
              description: "lorem Ipsum",
              item_type: "oils",
              quantity: 1,
              id: "OIL004"
          },
          {
              name: "Aloevera Oil",
              price: 144.99,
              description: "lorem Ipsum",
              item_type: "oils",
              quantity: 1,
              id: "OIL005"
          },
          {
              name: "Scented Body Oil",
              price: 32.00,
              description: "lorem Ipsum",
              item_type: "oils",
              quantity: 1,
              id: "OIL006"
          }
    ],
    soaps: [
        {
            name: "Honey Soap",
            price: 87.65,
            description: "lorem Ipsum",
            item_type: "soaps",
            quantity: 1,
            id: "SOAP001"
          },
          {
              name: "Organic Aloevera Soap",
              price: 84.99,
              description: "lorem Ipsum",
              item_type: "soaps",
              quantity: 1,
              id: "SOAP002"
          },
          {
              name: "Herbal Soap",
              price: 32.40,
              description: "lorem Ipsum",
              item_type: "soaps",
              quantity: 1,
              id: "SOAP003"
          },
          {
              name: "Anti-Acne Facial Soap",
              price: 51.25,
              description: "lorem Ipsum",
              item_type: "soaps",
              quantity: 1,
              id: "SOAP004"
          },
          {
              name: "Natural Body Soap",
              price: 14.99,
              description: "lorem Ipsum",
              item_type: "soaps",
              quantity: 1,
              id: "SOAP005"
          },
          {
              name: "Scented Body Soap",
              price: 22.00,
              description: "lorem Ipsum",
              item_type: "soaps",
              quantity: 1,
              id: "SOAP006"
          }
    ],
    cart_items: []
}

export const rootReducer = (state = initaialState, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return {...state, ...state.creams, ...state.oils, ...state.soaps ,cart_items: [ ...state.cart_items, action.payload]}
        default:
            return state;    
    }
}