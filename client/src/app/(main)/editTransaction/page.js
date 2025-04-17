import { Suspense } from "react";
import React from "react";
import EditTransactionComp from "./_components/EditTransactionComp";

function EditTransaction() {
  return (
    <Suspense fallback={<div>Loading form...</div>}>
      <EditTransactionComp />
    </Suspense>
  );
}

export default EditTransaction;
