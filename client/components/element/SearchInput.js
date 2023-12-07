import { MdSearch } from 'react-icons/md'

function SearchInput({ label, id, placeholder, setValue, value }) {
  return (
    <div className="font-dm-sans mb-4 w-full">
      <label className="font-regular mb-0.5 ml-2 block font-roboto text-sm text-black">
        {label}
      </label>
      <div className="flex items-center">
        {/* <div className="px-3 py-2 text-black">
          <MdSearch className="text-main" size={36} />
        </div> */}
        <input
          className="w-full rounded-[8px] border-[1px] border-tertiery px-3 py-4 leading-tight text-black shadow"
          id={id}
          value={value}
          type="text"
          placeholder={placeholder}
          onChange={(e) => {
            setValue(e.target.value)
          }}
        />
      </div>
    </div>
  )
}

export default SearchInput
