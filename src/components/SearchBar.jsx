import React,{useState} from "react";
// import searchicon from "../Assets/search_FILL0_wght400_GRAD0_opsz48.png";
// import SearchIcon from "@mui/icons-material/Search";
import { MdOutlineClear } from 'react-icons/md'
import {CiSearch}from 'react-icons/ci'

const SearchBar = ({ placeholder, data }) => {
  let [filteredData, setFilteredData] = useState([])
  let [wordEntered, setWordEntered] = useState("")

  let handleChange = async (e) => {
      let searchWord = e.target.value
      setWordEntered(searchWord)
        let newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        })
      if (searchWord=== "") {
        setFilteredData("")
      }
      else {
            setFilteredData(newFilter);
      }

  }
  let cleardata = () => {
    setFilteredData([])
    setWordEntered("")
  }
  return (
    <div className="search">
      <div className="searchinput">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleChange}
        />
        <div className="searchicon">
          {filteredData.length != 0 ? (
            <MdOutlineClear />
          ) : (
            <CiSearch onClick={cleardata} />
          )}
        </div>
        {filteredData != 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 10).map((value) => {
              return (
                <a href={value.link} target="self">
                  <p>{value.title}</p>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
