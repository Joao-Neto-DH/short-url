import React from "react";
import FormGenerateShort from "./form-generate-short";

function Page() {
  return (
    <div className="w-full">
      <div className="py-3 px-6 border-b">
        <div className="flex flex-row items-center">
          <div className="ml-auto">
            <FormGenerateShort />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
