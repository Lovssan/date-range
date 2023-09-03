import { monthsInYear } from '../app.constanse'

export const getRange = (rangeDate, minYear = 0) => {
	const dates = rangeDate.map(el => [el.getFullYear()])

	const minValue = minYear > 0 ? (dates[0] - minYear) * monthsInYear : 0

	const min = rangeDate[0].getMonth() + minValue

	const max =
		(dates[1] - dates[0]) * monthsInYear + rangeDate[1].getMonth() + minValue

	return [min, max]
}
