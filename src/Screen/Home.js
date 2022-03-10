import React from "react";
import { useState } from "react";
//import Form from 'react-bootstrap/form'

const Home = () => {
  //State for toggling among input/file
  const [toggle, settoggle] = useState(false);

  //For csv input
  const [csvInput, setcsvInput] = useState("");

  //Called whenn new csv file is uploaded
  const FileUploadHandler = async (e) => {
    //alert("changed");
    const file = e.target.files[0];
    console.log(file);
    const formdata = new FormData();
    formdata.append("file", file);
  };


  return (
    <div>
      
      <div className="container" >

        <div className="row-cols-2">

          <div className="form-group container" >

            {renderButtons(toggle, csvInput, setcsvInput, settoggle, FileUploadHandler)}

          </div>

        </div>

      </div>
    </div>
  );
};

function renderButtons(toggle, csvInput, setcsvInput, settoggle, FileUploadHandler) {
  return toggle ? (
    <>
      <label htmlFor="exampleFormControlTextarea1" className="text-uppercase mt-5">
        <pre className="text">Paste Raw Data :-</pre>
      </label>
      <textarea
        className="form-control text-muted"
        id="exampleFormControlTextarea1"
        rows="8"
        value={csvInput}
        onChange={(e) => setcsvInput(e.target.value)}>
      </textarea>
      <div className="text-center mt-5" >

        <button
          type="button"
          className="btn btn-secondary btn-sm "
          accept=".CSV"
        >
          Upload
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm m-4"
          onClick={() => settoggle(!toggle)}
        >
          {toggle ? "Select File From Device" : "Paste CSV"}
        </button>

      </div>
    </>
  ) : (
    <>
      <div className="container ">
        <div className="mb-3 ">
          <label htmlFor="formFileMultiple" className="form-label mt-5 mb-5 text" >
     Upload from device :
          </label>
          <input
            className="form-control"
            type="file"
            id="formFileMultiple"
            onChange={FileUploadHandler}
            multiple
            accept=".CSV" />
          <br />
          <div className="text-center ">
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              accept=".CSV"
            >
              Upload
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm m-4"
              onClick={() => settoggle(!toggle)}
            >
              {toggle ? "Select File From Device" : "Paste CSV"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}


export default Home;