import Dropdown from 'react-dropdown'
import styles from './Dropdown.module.css';
import 'react-dropdown/style.css';

const DropdownComponent = (props) => {
    
  const options = [
    'one', 'two', 'three'
  ];
  const defaultOption = props.defaultOption;

  return (
    <div>
      <Dropdown
        menu
        options={options} value={defaultOption}
        menuClassName='!bg-white !top-[calc(100%+0.5rem)] !border-none !rounded-[10px]' 
        placeholder=""
        optionsClassName='!px-5'
        arrowClassName={`!-translate-y-1/2 !top-1/2 transition-all ${styles.dropdownArrow}`}
        controlClassName={`!bg-[#2C2B31] font-medium min-h-[50px] !text-white !rounded-[10px] flex items-center !px-5 outline-none  !cursor-pointer ${props.className}`}
        className={`!text-white`}
      />
    </div>
  );
};

export default DropdownComponent;