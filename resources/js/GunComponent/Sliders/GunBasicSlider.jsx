import { useState, useEffect } from "react";

// This component returns a Basic Slider
export default function GunBasicSlider() {

    // Slider value being set by API (default state '50' for now)
    const [maxSliderValue, setMaxSliderValue] = useState('50');

    // Slider value being set by event.target.value
    const [sliderValue, setSliderValue] = useState('0');

    // Sets the state of the challenge completion
    // and used to change the input to a checkbox
    const [challengeDone, setChallengeDone] = useState(false);

    // On input value change sets the sliderValue
    // and returns a true challengeDone if value is maxSliderValue
    const handleSliderChange = (event) => {
        if (event.target.value === maxSliderValue) {
            setSliderValue(event.target.value);
            setChallengeDone(true);
            // console.log('DONE');
        } else {
            setSliderValue(event.target.value);
            setChallengeDone(false);
            // console.log(sliderValue);
        }
    };

    // On checkbox 'uncheck' set the sliderValue to be the maxSliderValue-1
    // and challengeDone to false
    const handleCheckboxChange = (event) => {
        if (event.target.checked) {
            setChallengeDone(true);
        } else {
            setChallengeDone(false);
            setSliderValue(String(parseInt(maxSliderValue) - 1));
        }
    };

    return (
        <div className="gun_basic_slider_with_tracking">
            {challengeDone ? (
                <>
                    <input
                        type="checkbox"
                        checked={challengeDone}
                        onChange={handleCheckboxChange}
                        className="gun_basic_checkbox"
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
                        className="gun_basic_slider"
                        id="gun_basic_slider"
                    />
                    <span className="gun_slider_tracking">{sliderValue}/{maxSliderValue}</span>
                </>
            )}
        </div>
    );
}