import { BsSearch } from "react-icons/bs";

export default function Search(props: any) {
  return (
    <div className="pt-2 relative mx-auto">
      <form onSubmit={props.HandleSearch}>
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="text"
          placeholder="Procurar..."
          value={props.search}
          onChange={(e) => props.setSearch(e.target.value)}
        />
        <button className="absolute right-0 top-0 mt-5 mr-4">
          <BsSearch />
        </button>
      </form>
    </div>
  );
}
