export default function OrionProgressBar(props) {

    const { completed } = props;


    const fillerStyles = {
        width: `${completed}%`,
    };

    return (
        <div className="orion_progress_bar">
            <div className="orion_progress_bar_filler" style={fillerStyles}>
                <span className="orion_tracker_label">{`${completed}%`}</span>
            </div>
        </div>
    );
};
