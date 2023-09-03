import { monthsInYear } from '../app.constanse'

const formattMonth = month => {
	return month < 10 ? `0${month}` : month.toString()
}

export const getDate = date => {
	return new Date(date)
}

export const formatDate = date => {
	const year = date.getFullYear()
	const month = date.getMonth() + 1

	const formattedMonth = formattMonth(month)

	const formattedDate = `${year}-${formattedMonth}`

	return formattedDate
}

export const arrToDate = (arrValue, minYear) => {
	const res = []
	for (let i = 0; i < arrValue.length; i++) {
		if (arrValue[i] < monthsInYear) {
			res.push(`${minYear}-${formattMonth(arrValue[i] + 1)}`)
		} else {
			res.push(
				`${minYear + Math.floor(arrValue[i] / monthsInYear)}-${formattMonth(
					(arrValue[i] % monthsInYear) + 1
				)}`
			)
		}
	}
	return [getDate(res[0]), getDate(res[1])]
}
