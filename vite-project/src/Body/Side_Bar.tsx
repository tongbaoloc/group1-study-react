import { Transaction } from "./Transaction";

export function Side_Bar() {
  return (
    <>
      <div className="w-1/4 bg-yellow-100">
        <div className="py-5 text-center">TRANSACTION</div>
        <Transaction />
        <Transaction />
      </div>
    </>
  )
}