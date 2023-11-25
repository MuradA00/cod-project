import { useState } from "react";
import { tableDataHeaders, tableDataRows } from "../../../constants/variables";

const AdminTable = () => {

    const [width, setWidth] = useState([]);

    const rowStyle = 'text-sm lg:text-xs lg-small:whitespace-nowrap';

    return (
        <div className="lg-small:overflow-x-scroll">
            <table className="w-full">
                <thead className="h-[54px] bg-[#2B2A31]">
                    {tableDataHeaders.map((head, index) => (
                        <th key={head.id} className={`pt-0 whitespace-nowrap px-3 pb-0 text-left ${index === 0 ? 'pl-[44px]' : 'pl-0'}`}>
                            <span className="text-[13px]' font-hubot text-zinc-200 lg:text-xs">{head.text}</span>
                        </th>
                    ))}
                </thead>
                <tbody>
                    {Array(7).fill(null).map((_, index) => (
                        <tr key={index} className="border-b-[1px] border-solid border-[#2B2A31]">
                                {tableDataRows.map((row, index) => (
                                    <td key={row.id} className={`h-[60px] lg-small:pr-3 ${index === 0 ? 'pl-4' : 'pl-0'}`}>
                                        {
                                            index === 0 ? (
                                                <div className="flex items-center gap-4">
                                                    <span className="w-3 h-3 bg-[#35353A] rounded-[4px] block"></span>
                                                    <span className={rowStyle}>{row.text}</span>
                                                </div>
                                            ) : (
                                                <span className={rowStyle}>{row.text}</span>
                                            ) 
                                        }
                                    </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AdminTable;