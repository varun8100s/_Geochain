import React from "react";
import { useState } from "react";

const Home = () => {
  //State for toggling among input/file
  const [toggle, settoggle] = useState(false);

  //For csv input
  const [csvInput, setcsvInput] = useState("");

  //Called whenn new csv file is uploaded
  const FileUploadHandler = async (e) => {
    alert("changed");
    const file = e.target.files[0];
    console.log(file);
    const formdata = new FormData();
    formdata.append("file", file);
  };
  return (
    <>
      <div className="container">
        <div className="row-cols-2">
          <div className="form-group container">
            {toggle ? (
              <>
                <label htmlFor="exampleFormControlTextarea1" className="text">
                  <pre>Paste Raw Data :-</pre>
                </label>
                <textarea
                  className="form-control text-muted"
                  id="exampleFormControlTextarea1"
                  rows="8"
                  value={csvInput}
                  onChange={(e) => setcsvInput(e.target.value)}
                >
                  Input csv . . .
                </textarea>
              </>
            ) : (
              <>
                {" "}
                <div className="container row-cols-2">
                  <div className="mb-3 ">
                    <label htmlFor="formFileMultiple" className="form-label text">
                      Upload from device:
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="formFileMultiple"
                      onChange={FileUploadHandler}
                      multiple
                    />
                    <br />
                    <button
                      type="button"
                      className="btn btn-secondary"
                      accept=".CSV"
                    >
                      Upload
                    </button>
                  </div>
                </div>
              </>
            )}

            <div className="container row-cols-2 mt-4">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="button"
                autoComplete="off"
                onClick={() => settoggle(!toggle)}
              >
                {toggle ? "Toggle to uploader" : "Toggle to input"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
