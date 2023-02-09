import Image from "next/image";

export default function Card({ text, id }) {
  const handleClick = () => {
    console.log(id);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-slate-600 rounded-md p-3 flex flex-col gap-4"
    >
      <div className="bg-slate-600 flex justify-between">
        <div className="flex flex-col gap-4">
          <p className="text-white">{text}</p>
          <p className="text-white">{id}</p>
        </div>

        <img width={25} height={25} src="icons/lapiz.png" alt="" />
      </div>
      <div className="bg-slate-600 flex justify-between">
        <Image
          width={32}
          height={32}
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"
          alt=""
        />
        <img width={25} height={25} src="icons/cuadrados.png" alt="" />
      </div>
    </div>
  );
}
