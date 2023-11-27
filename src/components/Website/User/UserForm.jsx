import Input from "../../Input/Input";
import DropdownComponent from "../../UI/Dropdown/DropdownComponent";

const UserForm = () => {

    const blockStyle = 'grid grid-cols-2 gap-5 ss:flex ss:flex-col' 
    const borderStyle = 'pb-[1.875rem] border-b-[2px] border-gray-600 border-solid'
  
    return (
      <div>
        <div>
          <h1 className="text-[30px] font-bold mb-6">My Information</h1>
          <div className={`flex flex-col gap-[1.875rem]`}>
            <div className={`flex flex-col gap-6 ${borderStyle}`}>
              <div className={`${blockStyle}`}>
                <div>
                  <Input label={'First name'} placeholder={''}/>
                </div>
                <div>
                <Input label={'Last name'} placeholder={''}/>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-sm font-medium">
                  About
                </span>
                <textarea name="" id="" className="rounded-[10px] outline-none p-5 resize-none bg-[#2C2B31] min-h-[112px]"></textarea>
              </div>
              <div>
                <Input placeholder={''} label={'Phone number'} />
              </div>
            </div>
            <div className={`${borderStyle}`}>
              <div className="text-xl font-bold text-white mb-5">
                Email
              </div>
              <div>
                <Input placeholder={''} label={'Email address'} />
              </div>
            </div>
            <div>
              <div className="text-xl font-bold text-white mb-5">
                Password
              </div>
              <div className={`${blockStyle}`}>
                <div>
                <span className="text-sm font-medium mb-3 block">Current password</span>
                <DropdownComponent />
                </div>
                <div>
                  <Input placeholder={''} label={'New password'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default UserForm;
  