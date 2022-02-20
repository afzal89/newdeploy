import React, { useEffect, useRef, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import InputBase from "@material-ui/core/InputBase";
import SearchWrapper from "./style.search";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
// import { debounce } from "lodash";

export default function ComboBox({ token }) {
  const [search, setsearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [searchOptions, setSearchOptions] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    if (searchInput?.length > 2 && token) {
      // debounce(() => simpleSearch(), 2000);
      simpleSearch();
    }
  }, [searchInput]);
  async function simpleSearch() {
    const response = await axios.get(
      `https://truetn.live/v1/insta/searchkeyword/${searchInput}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setSearchOptions(response.data.data.data.users || []);
  }

  function debounce(fn, delay) {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }

  function handleChange(val) {
    setSearchInput(val);
    // debounce(() => {
    //   simpleSearch();
    // }, 2000);
  }

  return (
    <SearchWrapper>
      <form>
        {/* <Autocomplete
          ref={inputRef}
          id="combo-box-demo"
          options={searchOptions}
          getOptionLabel={(option) => option?.user?.full_name}
          style={{ width: 300 }}
          inputValue={search?.user?.username}
          onChange={(e, v) => setsearch(v)}
          renderInput={(params) => {
            const { InputLabelProps, InputProps, ...rest } = params;
            return (
              <InputBase
                {...params.InputProps}
                {...rest}
                onChange={(e, v) => handleChange(e.target.value)}
                inputValue={searchInput}
              />
            );
          }}
        /> */}
        <input
          type="text"
          name="search"
          value={search}
          onChange={handleChange}
          placeholder="username..."
        />
        <button className="form-search-icon">
          <FontAwesomeIcon icon={faSearch} />{" "}
        </button>
      </form>
    </SearchWrapper>
  );
}
