import { searchIcon } from "../../../assets/images";

const Search = () => {
    return (
        <div className="relative hidden">
            <input type="search" className="min-h-[46px] flex items-center pr-10 pl-3 rounded-3xl border-gradient outline-none text-sm tracking-[-.28px] text-white placeholder:text-neutral-300" style={{'--bg': '#383838', '--cl-border': 'rgba(255,255,255,.5)'}} placeholder="Search here" />
            <button className="w-[22px] h-[22px] block top-1/2 -translate-y-1/2 right-3 absolute">
                <img src={searchIcon} className="block" alt="searchIcon" />
            </button>
        </div>
    )
}

export default Search;