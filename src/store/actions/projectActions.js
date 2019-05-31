export const createProject = project => {
  return (dispatch,getState, {getFirebase,getFirestore})=>{

    console.log(getState);
    //make async call to database
    dispatch({type : 'CREATE_PROJECT', project });

  }
};
