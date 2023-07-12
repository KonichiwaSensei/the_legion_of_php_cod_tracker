import GoldImage from '/resources/img/gold-camo.jpg'
import PlatinumImage from '/resources/img/platinum-camo.jpg'
import PolyatomicImage from '/resources/img/polyatomic-camo.jpg'

export default function MasteryProgressBar(props) {

    const { completion, masterycamo } = props;

    let image = null
    switch (masterycamo) {
        case "Gold":
            image = GoldImage;
            break;
        case "Platinum":
            image = PlatinumImage;
            break;
        case "Polyatomic":
            image = PolyatomicImage;
            break;
    }

    const adjustedCompletion = Math.min(completion, 51); // Limit completion to a maximum of 51

    const fillerStyles = {
        width: `${adjustedCompletion / 51 * 100}%`,
        backgroundImage: `url(${image})`
    };


    return (
        <div className="mastery_progress_bar">
            <div className="mastery_progress_bar_filler" style={fillerStyles}></div>
            <div className="mastery_tracker_label">{`${adjustedCompletion}/51`}</div>
        </div>
    );
};


// Written by: Matt