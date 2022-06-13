export default function RetroButton(props: {
  children: any;
  onClick?: () => void;
}) {
  return (
    <div className="text-center flex select-none ">
      <button
        onClick={props.onClick}
        className="flex-grow px-2 py-1 relative | border-2 border-black | before:absolute  before:bg-gray-300 before:top-1 before:left-1 before:w-full before:h-full before:-z-10 before:hover:bg-emerald-300 before:active:bg-amber-300"
      >
        {props.children}
      </button>
    </div>
  );
}
