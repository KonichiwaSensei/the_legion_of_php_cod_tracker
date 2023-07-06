import { useState, useEffect } from "react"

// This component returns a Mastery Slider
export default function GunMasterySlider() {

    // Slider value being set by API (default state '25' for now)
    const [maxSliderValue, setMaxSliderValue] = useState('25')

    // Slider value being set by event.target.value
    const [sliderValue, setSliderValue] = useState('0')

    // Sets the state of the challenge completion
    // and used to change the input to a checkbox
    const [challengeDone, setChallengeDone] = useState(false)

    // On input value change sets the sliderValue
    // and returns a true challengeDone if vlaue is maxSliderValue
    const handleSliderChange = (event) => {
        if (event.target.value === maxSliderValue) {
            setSliderValue(event.target.value)
            setChallengeDone(true)
            // console.log('DONE');
        } else {
            setSliderValue(event.target.value)
            setChallengeDone(false)
            // console.log(sliderValue);
        }
    }

    // On checkbox 'uncheck' set the sliderValue to be the maxSliderValue-1
    // and challengeDone to false 
    const handleCheckboxChange = (event) => {
        if (event.target.checked) {
            setChallengeDone(true)
            setSliderValue(maxSliderValue)
        } else {
            setChallengeDone(false)
            setSliderValue(String(parseInt(maxSliderValue) - 1))
        }
    }

    return (
        <div className="gun_mastery_slider_with_tracking">
            {challengeDone ? (
                <>
                    <input
                        type="checkbox"
                        checked={challengeDone}
                        onChange={handleCheckboxChange}
                        className="gun_mastery_checkbox"
                    />
                    <span className="gun_slider_tracking">Challenge Complete!</span>
                </>
            ) : (
                <>
                    <input
                        type="range"
                        min="0"
                        max={maxSliderValue}
                        step="1"
                        name="slider"
                        value={sliderValue}
                        onChange={handleSliderChange}
                        className="gun_mastery_slider"
                        id="gun_mastery_slider"
                    />
                    <span className="gun_slider_tracking">{sliderValue}/{maxSliderValue}</span>
                </>
            )}
        </div>
    )
}

// Original Mastery Slider
{/* 
<input
    type="range"
    min="0"
    max={maxSliderValue}
    step="1" name="slider"
    value={sliderValue}
    onChange={handleSliderChange}
    className="gun_mastery_slider"
    id="gun_mastery_slider" />
<span className={`gun_mastery_slider ${challengeDone ? "completed" : ""}`} >{sliderValue}/{maxSliderValue}</span> 
*/}

