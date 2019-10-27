export const AddTodoAction = (val:string) => {
    console.log('came to action------');
    return {
        type: 'ADD_TODO',
        payload: val
    }
}