import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const SearchForm = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
      const text = e.target[0].value;
    e.preventDefault();
    navigate(`/results?search_query=${text}`);
      
  };

  return (
    <div className="absolute top-1 right-0">
      <form
        onSubmit={handleSubmit}
        className="flex items-center max-w-md mx-auto border border-gray-400 focus-within:border-[#0d407f] rounded-[20px] bg-black p-2"
      >
        <input
          placeholder="Ara"
          className="bg-black outline-none rounded-l-[20px] px-3 py-1 text-white flex-grow"
          type="text"
        />
        <button className="grid place-items-center border-l px-2 text-xl text-white rounded-r-[20px]">
          <AiOutlineSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
