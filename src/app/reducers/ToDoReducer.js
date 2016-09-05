export default function todos(state = [], action){
	switch (action.type) {
		case "ADD_TO_DO":
			return {
				...state,
				id,
				text: action.text
			}
		default:
			return state;
	}
}