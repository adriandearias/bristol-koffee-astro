import React from "react";

function MenuSection({ title, items }) {
  return (
    <div className="p-4 sm:p-6 bg-customGray bg-opacity-85 rounded shadow-md border-y-8 border-customYellow">
      <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center">
        {title}
      </h3>
      <ol className="mb-2">
        {items.map((item) =>
          typeof item === "string" ? (
            <li>{item}</li>
          ) : (
            <li className={item.className}>{item.text}</li>
          )
        )}
      </ol>
    </div>
  );
}

export default MenuSection;
