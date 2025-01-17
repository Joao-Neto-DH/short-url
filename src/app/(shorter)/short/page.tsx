import React from "react";
import FormGenerateShort from "./form-generate-short";
import { SidebarTrigger } from "@/components/ui/sidebar";

function Page() {
  return (
    <div className="w-full">
      <div className="py-3 px-6 border-b">
        <div className="flex flex-row items-center">
          <SidebarTrigger />
          <div className="ml-auto">
            <FormGenerateShort />
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto p-6">
        <div className="w-full flex flex-row overflow-x-auto pb-4 space-x-4">
          {[...new Array(5)].map((_, index) => (
            <div
              key={index}
              className="border border-l-4 border-l-blue-600 rounded-md p-4 min-w-52 shadow-md"
            >
              <p className="font-bold text-xl">URLs geradas</p>
              <p className="font-light text-2xl">12</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
