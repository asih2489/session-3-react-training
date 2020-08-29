export const DELETE_ITEM = 'DELETE_ITEM';

export const deleteItem = (id) => ({
    type: DELETE_ITEM,
    payload: id,
});