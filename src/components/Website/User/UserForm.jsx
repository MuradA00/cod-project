import Input from "../../Input/Input";

const UserForm = () => {
    const userForm = [
      {
        id: 0,
        items: [
          {
            id: 0,
            cols: [
              {
                id: 0,
                input: { header: 'First name', placeholder: '' },
              },
              {
                id: 1,
                input: { header: 'Last name', placeholder: '' },
              },
            ],
          },
          {
            id: 1,
            textarea: { header: 'About', placeholder: '' },
          },
          {
            id: 2,
            cols: [
              {
                id: 0,
                input: { header: 'Phone number', placeholder: '' },
              },
            ],
          },
        ],
      },
      {
        id: 1,
        heading: 'Email',
        items: [
          {
            id: 0,
            cols: [
              {
                id: 0,
                input: { header: 'Email address', placeholder: '' },
              },
            ],
          },
        ],
      },
      {
        id: 2,
        heading: 'Password',
        items: [
          {
            id: 0,
            cols: [
              {
                id: 0,
                input: { header: 'Current password', placeholder: '' },
              },
              {
                id: 1,
                input: { header: 'New password', placeholder: '' },
              },
            ],
          },
        ],
      },
    ];
  
    return (
      <div>
        <div>
          <h1 className="text-[30px] font-bold mb-6">My Information</h1>
          <div>
            {userForm.map((block, index) => (
              <div key={block.id} className={`pb-[1.875rem] mb-[1.875rem] ${index !== userForm.length - 1 ? 'border-b-[1px] border-solid border-gray-600' : ''}`}>
                {block.heading && (
                  <div className="text-lg font-bold mb-6">
                    {block.heading}
                  </div>
                )}
                <div className="flex flex-col gap-6">
                  {block.items && block.items.map((item) => (
                    <div key={item.id}>
                      {item.cols && item.cols.length > 0 ? (
                        <div className="grid grid-cols-2 gap-5">
                          {item.cols.map((col) => (
                            <div key={col.id}>
                              <div className="flex flex-col gap-3">
                                {col.input && col.input.header}
                                <Input />
                              </div>
                              <div>
                                {col.textarea && col.textarea.header}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="block">
                          {item.input && item.input.header}
                          {item.textarea && item.textarea.header}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default UserForm;
  