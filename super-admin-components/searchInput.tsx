import React from 'react';

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder = "Search pages", value, onChange }) => {
  return (
    <div className="relative w-[350px]">
      <div className="group flex items-center space-x-2">
        <svg className="absolute left-4 w-4 h-4 fill-[#9e9ea7]" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
          </g>
        </svg>
        <input
          placeholder={placeholder}
          type="search"
          value={value}
          onChange={onChange}
          className="input w-full h-[40px] py-0 px-4 pl-10 border rounded-[8px] outline-none bg-[#F1F4F9] text-[#0d0c22] placeholder-[#9e9ea7] transition-all duration-300 ease-in-out focus:border-[#4d4c4c] focus:bg-white focus:shadow-[0_0_0_4px_rgba(234,76,137,0.1)] hover:border-[#222222] border-[#13132761]"
        />
      </div>
    </div>
  );
};

export default SearchInput;
