import { Slider, styled } from '@mui/material'

const boxShadow =
	'0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)'

export const SladerDate = styled(Slider)({
	color: '#5CADEA',
	height: '10px',
	padding: '15px 0',
	margin: '15px 20px',
	width: '90%',
	'& .MuiSlider-thumb': {
		height: 18,
		width: 18,
		border: '5px solid #5CADEA',
		backgroundColor: '#fff',
		boxShadow: boxShadow,
		'&:focus, &:hover, &.Mui-active': {
			boxShadow:
				'0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
			'@media (hover: none)': {
				boxShadow: boxShadow
			}
		}
	},
	'& .MuiSlider-valueLabel': {
		fontSize: '18px',
		textAlign: 'center',
		fontWeight: 'normal',
		lineHeight: 1.2,
		top: '-13px',
		whiteSpace: 'normal',
		backgroundColor: 'white',
		borderRadius: '10px',
		padding: '6px 12px',
		'&:before': {
			position: 'absolute',
			content: '""',
			width: '8px',
			height: '8px',
			webkitTransform: 'translate(-50%, 50%) rotate(45deg)',
			mozTransform: 'translate(-50%, 50%) rotate(45deg)',
			msTransform: 'translate(-50%, 50%) rotate(45deg)',
			transform: 'translate(-50%, 50%) rotate(45deg)',
			bottom: '1px',
			left: '50%'
		},
		'& *': {
			color: '#0167B3'
		}
	},

	'& .MuiSlider-thumb[data-index="1"] ': {
		'& .MuiSlider-valueLabel': {
			top: '77px',
			'&:before': {
				top: '-7px'
			}
		}
	},
	'& .MuiSlider-track': {
		border: 'none',
		height: '6px'
	},
	'& .MuiSlider-rail': {
		opacity: 1,
		backgroundColor: '#EDF1F8'
	},
	'& .MuiSlider-mark': {
		opacity: 0
	},
	'& .MuiSlider-markLabel': {
		fontVariantNumeric: 'lining-nums proportional-nums',
		fontSize: '12px',
		color: '#333333',
		'@media (max-width: 700px)': {
			rotate: '60deg',
			top: '54px'
		}
	},
	'& .MuiSlider-markLabelActive': {
		color: '#999999'
	}
})
