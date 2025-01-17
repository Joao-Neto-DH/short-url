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
    </div>
  );
}

export default Page;
