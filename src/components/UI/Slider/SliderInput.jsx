import React, {useState} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './SliderInput.module.css';

const SliderInput = () => {

    const [range, setRange] = useState([0, 100]);

    const handleSliderChange = (newRange) => {
      setRange(newRange);
    };

    return (
        <div>
          <Slider
          className='!p-0 !h-2'
            range
            value={range}
            onChange={handleSliderChange}
            min={0}
            max={100}
            step={1}
            railStyle={{ backgroundColor: '#3A3844', height: 8 }}
            trackStyle={[{ backgroundColor: '#FFA502', height: 8 }]}
            handleStyle={[{cursor: 'pointer', boxShadow: 'none', borderColor: 'white', width: 20, opacity: 1, height: 20, backgroundColor: 'white' }, {cursor: 'pointer', boxShadow: 'none', width: 20, opacity: 1, height: 20, borderColor: 'white', backgroundColor: 'white' }]}
          />
        </div>
      );
}

export default SliderInput;