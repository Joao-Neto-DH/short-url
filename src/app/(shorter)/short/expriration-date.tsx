"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

function ExpirationDate() {
  const [limitado, setLimitado] = useState(false);
  return (
    <>
      <label htmlFor="expiracao" className="block mb-3">
        <div className="flex gap-2">
          <Checkbox
            id="expiracao"
            checked={limitado}
            onCheckedChange={() => setLimitado((prev) => !prev)}
          />
          <span className="mb-1 text-sm font-bold">Data de expiração</span>
        </div>
      </label>

      {limitado && (
        <label htmlFor="validade" className="block mb-3">
          <span className="mb-1 text-sm font-bold">
            Data<span className="text-red-600">*</span>
          </span>
          <Input type="datetime-local" name="validade" id="validade" required />
        </label>
      )}
    </>
  );
}

export default ExpirationDate;
