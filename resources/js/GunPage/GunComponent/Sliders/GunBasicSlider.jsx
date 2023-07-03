import { useState, useEffect } from "react"
// import Slider from '@react-native-community/slider';

export default function GunBasicSlider() {

    const [sliderValue, setSliderValue] = useState('0')

    const [challengeDone, setChallengeDone] = useState(false)

    const [maxSliderValue, setMaxSliderValue] = useState('50')

    const handleSliderChange = (event) => {
        
        if (event.target.value === maxSliderValue) {
            setSliderValue(event.target.value)
            setChallengeDone(true)
            console.log('DONE');
        } else {
            setSliderValue(event.target.value)
            console.log(sliderValue);
        }
    }

return (
    <div className="gun_basic_slider_with_tracking">  
        <input type="range" min="0" max={maxSliderValue} step="1" name="slider" value={sliderValue} onChange={handleSliderChange} className="gun_basic_slider" id="gun_basic_slider" />
        {
            sliderValue < 10
            ?
            <span className="gun_slider_tracking" >&nbsp;&nbsp;{sliderValue}/{maxSliderValue}</span>
            :
            <span className="gun_slider_tracking" >{sliderValue}/{maxSliderValue}</span>
        }   
    </div>
)

}