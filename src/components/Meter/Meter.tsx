import './Meter.css';

interface MeterProps {
	fill: number;
}

const Meter = ({ fill = 2}: MeterProps): JSX.Element => {
	return (
		<div className="meter">
              <span style={{ width: fill * 20 + '%'}}></span>
        </div>
	);
};

export default Meter;