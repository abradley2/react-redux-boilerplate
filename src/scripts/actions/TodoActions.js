export const CREATE = 'TodoActions.CREATE'
export const EDIT_TITLE = 'TodoActions.EDIT_TITLE'
export const TOGGLE_COMPLETED = 'TodoActions.TOGGLE_COMPLETED'
export const REMOVE = 'TodoActions.REMOVE'

export const creators = {
	[CREATE]: function () {
		return {
			type: CREATE
		}
	},
	[EDIT_TITLE]: function (uid, title) {
		return {
			type: EDIT_TITLE,
			uid: uid,
			title: title
		}
	},
	[TOGGLE_COMPLETED]: function (uid) {
		return {
			type: TOGGLE_COMPLETED,
			uid: uid
		}
	},
	[REMOVE]: function (uid) {
		return {
			type: REMOVE,
			uid: uid
		}
	}
}
