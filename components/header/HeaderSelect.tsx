import React from "react";

type HeaderSelectProps = {
  selectOptions: Array<string>;
};

const HeaderSelect: React.FC<HeaderSelectProps> = ({selectOptions}) => {
  return (
    <div className="text-white">
      <select name="headerSelect" className="bg-transparent border-b-2 border-white border-solid h-[35px] py-1 px-3 text-sm rounded-sm">
        {selectOptions.map((option) => (
          <option key={option} className="text-foreground" value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default HeaderSelect;
