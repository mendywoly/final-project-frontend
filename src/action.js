export function setCurrentUser(id){
    dispatch({ type: 'SET_CURRENT_USER',  payload: id })
}

export function addfeePreviewData(feePreviewData) {
    dispatch({ type: 'ADD_FEE_PREVIEW', payload: feePreviewData })
}