import GoldImage from '/resources/js/MasteryTracker/mastery_camo_pics/gold-camo.jpg'
import PlatinumImage from '/resources/js/MasteryTracker/mastery_camo_pics/platinum-camo.jpg'
import PolyatomicImage from '/resources/js/MasteryTracker/mastery_camo_pics/polyatomic-camo.jpg'

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
    // if (masterycamo === "Gold") {
    // }
    // if (masterycamo === "Gold") {
    //     image = GoldImage;
    // }
    // if (masterycamo === "Gold") {
    //     image = GoldImage;
    // }

const fillerStyles = {
    width: `${completion / 51 * 100}%`,
    backgroundImage: `url(${image})`
};


return (
    <div className="mastery_progress_bar">
        <div className="mastery_progress_bar_filler" style={fillerStyles}>
            <span className="mastery_tracker_label">{`${completion}/51`}</span>
        </div>
    </div>
);
};
