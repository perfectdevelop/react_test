const initialState = {
  show_modal: false
};

function reducer(state = initialState, action){
  console.log('reducer', state.action);
  switch(action.type){
    case 'SHOW_MODAL':
      return{
        show_modal: true
      };
    case 'HIDE_MODAL':
      return {
        show_modal: false
      };
    default:
      return state;
  }
}


export default reducer