import { useMemo, useState } from 'react'

import { unitsMonth } from '../../app.constanse'
import { getRange } from './slider.utils'

export const useSlider = (dateRange, currentDateRange) => {
	const minYear = dateRange[0].getFullYear()

	const sliderRange = getRange(dateRange)
	let currentRange = getRange(currentDateRange, minYear)

	const [isMonthMarks, setIsMonthMarks] = useState(false)

	const handleChange = (_, newValue, activeThumb) => {
		if (!Array.isArray(newValue)) {
			return
		}
		const minDistance = 1

		if (activeThumb === 0) {
			currentRange = [
				Math.min(newValue[0], currentRange[1] - minDistance),
				currentRange[1]
			]
		} else {
			currentRange = [
				currentRange[0],
				Math.max(newValue[1], currentRange[0] + minDistance)
			]
		}
	}

	const valueLabelFormat = value => {
		const unitsYear = minYear

		let valueN = Math.floor(value % 12)

		let year = unitsYear + Math.floor(value / 12)

		return `${unitsMonth[valueN]} ${year}`
	}

	const getMarks = () => {
		const marksYear = []
		const marksMonth = []
		for (let i = sliderRange[0]; i <= sliderRange[1]; i++) {
			let years = Math.floor(i / 12)
			let monthNum = i < 12 ? i : i % 12
			if (i % 12 === 0) {
				marksYear.push({
					value: i,
					label: `${minYear + years}`
				})
			} else {
				marksMonth.push({
					value: i,
					label: `${unitsMonth[monthNum].slice(0, 3).toLocaleLowerCase()}`
				})
			}
		}
		return { marksMonth, marksYear }
	}

	return useMemo(
		() => ({
			isMonthMarks,
			setIsMonthMarks,
			handleChange,
			valueLabelFormat,
			currentRange,
			getMarks,
			sliderRange
		}),
		[isMonthMarks, sliderRange, currentRange]
	)
}
