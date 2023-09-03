import clsx from 'clsx'
import { useMemo, useState } from 'react'

import { monthsInYear, unitsMonth } from '../../app.constanse'
import { arrToDate } from '../../utils/date.utils'
import { getRange } from '../../utils/slider.utils'

export const useSlider = (dateRange, selectedRange, setSelectedRange) => {
	const minYear = dateRange[0].getFullYear()

	const sliderRange = getRange(dateRange)

	let currentRange = getRange(selectedRange, minYear)

	const [isMonthMarks, setIsMonthMarks] = useState(false)

	const handleChange = (_, newValue, activeThumb) => {
		if (!Array.isArray(newValue)) {
			return
		}

		setSelectedRange(arrToDate(newValue, minYear))
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

		const valueN = Math.floor(value % monthsInYear)

		const year = unitsYear + Math.floor(value / monthsInYear)

		return `${unitsMonth[valueN]} ${year}`
	}

	const getMarks = () => {
		const marksYear = []
		const marksMonth = []
		const labelCount = sliderRange[1] - sliderRange[0]

		for (let i = sliderRange[0]; i <= sliderRange[1]; i++) {
			const years = Math.floor(i / monthsInYear)
			const monthNum = i < monthsInYear ? i : i % monthsInYear
			if (i % monthsInYear === 0) {
				marksYear.push({
					value: i,
					label: (
						<span
							className={clsx({
								['MarkLabelYear']: isMonthMarks
							})}
						>
							{minYear + years}
						</span>
					)
				})
			} else {
				marksMonth.push({
					value: i,
					label: (
						<span
							className={clsx({
								['MarkLabelMonth']: labelCount > 18,
								['MarkLabelMonthMax']: labelCount > 27
							})}
						>
							{unitsMonth[monthNum].slice(0, 3).toLocaleLowerCase()}
						</span>
					)
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
