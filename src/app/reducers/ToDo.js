const initialState = {
	id: 0,
	text: "EXAMPLE"
}

export default function todos(state=initialState, action){
	switch (action.type) {
		case "ADD_TO_DO":
			return {
				...state,
				id,
				text: action.text
			}
			break;
		default:
			return state;
			break;
	}
}