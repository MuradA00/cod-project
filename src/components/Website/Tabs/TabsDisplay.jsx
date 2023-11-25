import { tabsContent } from "../../../constants/variables";

const TabsDisplay = (props) => {

    return (
        <div>
            {
                tabsContent.map((content, index) => (
                    <div key={content.id} className={`flex flex-col gap-8 ${props.tabOrder === index ? 'block' : 'hidden'}`}>
                        <div>
                            {
                                content.info.map((data, index) => (
                                    <p key={data.id} className={`${index === content.info.length - 1 ? 'mb-0' : 'mb-6'} text-[#EFEFEF] text-lg leading-6 ss:text-base`}>
                                    {data.content}
                                    </p>
                                ))
                            }
                        </div>
                        <div>
                            <div className="mb-3 font-extrabold">
                                {content.listHeading}
                            </div>
                            <ul className="pl-[0.625rem] ss:flex ss:flex-col ss:gap-2">
                                {
                                    content.list.map((item) => (
                                        <li key={item.id} className="flex items-center gap-3">
                                            <span className="w-1 h-1 rounded-full bg-white block flex-shrink-0"></span>
                                            <p className="leading-6 ss:text-sm">
                                                {item.row}
                                            </p>
                                        </li>         
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            {
                                content.info2.map((data) => (
                                    <p key={data.id} className="text-base leading-6 ss:text-sm">
                                        {data.content}
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TabsDisplay;