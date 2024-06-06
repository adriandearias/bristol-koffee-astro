import React from "react";

function InfusionsSection({ title, items }) {
  return (
    <div className="p-4 sm:p-6 bg-customGray bg-opacity-85 rounded shadow-md border-y-8 border-customYellow">
      <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center">
        {title}
      </h3>
      <div className="px-8 sm:px-32">
        <ol>
          {items.map((item) => {
            const [name, description] = item.split(": ");
            return (
              <li>
                <span className="font-bold">
                  {name}:&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                {description}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default InfusionsSection;
