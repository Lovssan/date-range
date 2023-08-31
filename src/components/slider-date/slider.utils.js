export const getRange = (rangeDate, minYear = 0) => {
	const dates = rangeDate.map(el => [el.getFullYear()])

	const min =
		rangeDate[0].getMonth() + (minYear > 0 ? (dates[0] - minYear) * 12 : 0)

	const max =
		(dates[1] - dates[0]) * 12 +
		rangeDate[1].getMonth() +
		(minYear > 0 ? (dates[0] - minYear) * 12 : 0)

	return [min, max]
}
