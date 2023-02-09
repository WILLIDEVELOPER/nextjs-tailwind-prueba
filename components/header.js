import Image from "next/image"

export default function Header() {
  return (
    <div className="flex text-center p-4 justify-center items-center gap-2 bg-slate-600">
      <Image width={32} height={32} src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80" alt="" />
      <h1 className="text-white font-bold p-2 text-xl"> William Soto Dev</h1>
    </div>
  )
}
