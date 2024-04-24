import React from 'react'

const FormTwo = () => {
  return (
   <>
   <>
  <title>Top Tier Referral Form</title>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <meta
    name="description"
    content="A survey form used by a hotel to get the satisfaction level of visitors"
  />
  <meta name="author" content="Edward Mc Evoy 2019" />
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    crossOrigin="anonymous"
  />
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
    crossOrigin="anonymous"
  />
  <div style={{ textAlign: "center" }}>
    <img
      alt=""
      src="data:image/png;base64,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"
    />
  </div>
  <div className="container">
    {/* open container */}
    <div className="row">
      {/*  open row */}
      <div id="form-header" className="col-12">
        <h1 id="title">Top Tier Public Adjusters</h1>
      </div>
    </div>{" "}
    {/*  close row */}
    <div className="row">
      {/*  open row */}
      <div id="form-tagline" className="col-md-4">
        <div className="form-tagline">
          <i className="fa fa-envelope fa-5x" />
          <h2>Referral Form</h2>
          <p id="description" className="lead">
            Please complete the form with the customer information.
          </p>
        </div>
      </div>
      <div
        id="form-content"
        className="col-md-8"
        style={{ border: "1.5px #ddd solid" }}
      >
        <form id="survey-form" onsubmit="return false;">
          {/* open form */}
          <h3> Policyholder/s Information </h3>
          <div className="row form-group">
            <div className="col-sm-3">
              <label id="name-label" className="control-label" htmlFor="name">
                *First Name:
              </label>
            </div>
            <div className="input-group col-sm-9">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon-name">
                  <i className="fa fa-user" />
                </span>
              </div>
              <input
                id="first-name"
                type="text"
                className="form-control"
                placeholder="Please Enter Your Name"
                name="name"
                required=""
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-sm-3">
              <label id="name-label" className="control-label" htmlFor="name">
                *Last Name:
              </label>
            </div>
            <div className="input-group col-sm-9">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon-name">
                  <i className="fa fa-user" />
                </span>
              </div>
              <input
                id="first-name"
                type="text"
                className="form-control"
                placeholder="Please Enter Your Name"
                name="name"
                required=""
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-sm-3">
              <label id="name-label" className="control-label" htmlFor="name">
                *Phone Name:
              </label>
            </div>
            <div className="input-group col-sm-9">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon-name">
                  <i className="fa fa-phone" />
                </span>
              </div>
              <input
                id="ph-phone"
                type="text"
                className="form-control"
                placeholder="Phone"
                name="ph-phone"
                required=""
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-3">
              <label id="email-label" className="control-label" htmlFor="email">
                *Email:
              </label>
            </div>
            <div className="input-group col-sm-9">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon-mail">
                  <i className="fa fa-envelope" />
                </span>
              </div>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Your Email"
                name="email"
                pattern="^[-+.\w]{1,64}@[-.\w]{1,64}\.[-.\w]{2,6}$"
                required=""
              />
            </div>
          </div>
          <label id="pol2toggle" htmlFor="item-3" className="toggle">
            Click To Add A Second Policyholder
          </label>
          <input
            type="checkbox"
            name="one"
            id="item-3"
            className="hide-input"
          />
          <div className="toggle-el">
            <div>
              <h3> Policyholder 2 Information </h3>
              <div className="row form-group">
                <div className="col-sm-3">
                  <label
                    id="name-label"
                    className="control-label"
                    htmlFor="name"
                  >
                    *First Name:
                  </label>
                </div>
                <div className="input-group col-sm-9">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon-name">
                      <i className="fa fa-user" />
                    </span>
                  </div>
                  <input
                    id="first-name"
                    type="text"
                    className="form-control"
                    placeholder="Please Enter Your Name"
                    name="name"
                    required=""
                  />
                </div>
              </div>
              <div className="row form-group">
                <div className="col-sm-3">
                  <label
                    id="name-label"
                    className="control-label"
                    htmlFor="name"
                  >
                    *Last Name:
                  </label>
                </div>
                <div className="input-group col-sm-9">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon-name">
                      <i className="fa fa-user" />
                    </span>
                  </div>
                  <input
                    id="first-name"
                    type="text"
                    className="form-control"
                    placeholder="Please Enter Your Name"
                    name="name"
                    required=""
                  />
                </div>
              </div>
              <div className="row form-group">
                <div className="col-sm-3">
                  <label
                    id="name-label"
                    className="control-label"
                    htmlFor="name"
                  >
                    *Phone Name:
                  </label>
                </div>
                <div className="input-group col-sm-9">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon-name">
                      <i className="fa fa-phone" />
                    </span>
                  </div>
                  <input
                    id="ph-phone"
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                    name="ph-phone"
                    required=""
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-3">
                  <label
                    id="email-label"
                    className="control-label"
                    htmlFor="email"
                  >
                    *Email:
                  </label>
                </div>
                <div className="input-group col-sm-9">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon-mail">
                      <i className="fa fa-envelope" />
                    </span>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Your Email"
                    name="email"
                    pattern="^[-+.\w]{1,64}@[-.\w]{1,64}\.[-.\w]{2,6}$"
                    required=""
                  />
                </div>
              </div>
            </div>
          </div>
          <hr style={{ height: "3.5px" }} />
          <h3> Referrer Information </h3>
          <div className="row form-group">
            <div className="col-sm-3">
              <label id="name-label" className="control-label" htmlFor="name">
                *First Name:
              </label>
            </div>
            <div className="input-group col-sm-9">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon-name">
                  <i className="fa fa-user" />
                </span>
              </div>
              <input
                id="first-name"
                type="text"
                className="form-control"
                placeholder="Please Enter Your Name"
                name="name"
                required=""
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-sm-3">
              <label id="name-label" className="control-label" htmlFor="name">
                *Last Name:
              </label>
            </div>
            <div className="input-group col-sm-9">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon-name">
                  <i className="fa fa-user" />
                </span>
              </div>
              <input
                id="first-name"
                type="text"
                className="form-control"
                placeholder="Please Enter Your Name"
                name="name"
                required=""
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-3">
              <label id="email-label" className="control-label" htmlFor="email">
                *Email:
              </label>
            </div>
            <div className="input-group col-sm-9">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon-mail">
                  <i className="fa fa-envelope" />
                </span>
              </div>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Your Email"
                name="email"
                pattern="^[-+.\w]{1,64}@[-.\w]{1,64}\.[-.\w]{2,6}$"
                required=""
              />
            </div>
          </div>
          <hr style={{ padding: "3.5px", color: "red" }} />
          <div className="form-group row">
            <div className="col-sm-3">
              <label
                id="number-label"
                className="control-label"
                htmlFor="email"
              >
                *Room Number:
              </label>
            </div>
            <div className="input-group col-sm-9">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon-room">
                  <i className="fa fa-door-open" />
                </span>
              </div>
              <input
                type="number"
                className="form-control"
                id="number"
                placeholder="Enter Your Room Number"
                name="number"
                min={1}
                max={125}
                required=""
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-3">
              <label className="control-label" htmlFor="visit-purpose">
                Type of Trip:
              </label>
            </div>
            <div className="input-group col-sm-9">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon-purpose">
                  <i className="fa fa-hotel" />
                </span>
              </div>
              <select className="form-control" id="dropdown">
                <option>Business</option>
                <option>Couple</option>
                <option>Family</option>
                <option>Friends</option>
                <option>Solo</option>
                <option>Event</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-3">
              <label className="control-label" htmlFor="visit-purpose">
                Rate Your Stay:
              </label>
            </div>
            <div className="col-sm-9">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="star-rating"
                  id="five-star"
                  defaultValue="five-star"
                />
                <label className="form-check-label" htmlFor="five-star">
                  Excellent
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="star-rating"
                  id="four-star"
                  defaultValue="four-star"
                />
                <label className="form-check-label" htmlFor="four-star">
                  Very Good
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="three-star"
                  name="star-rating"
                  defaultValue="three-star"
                />
                <label className="form-check-label" htmlFor="three-star">
                  Average
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="two-star"
                  name="star-rating"
                  defaultValue="two-star"
                />
                <label className="form-check-label" htmlFor="two-star">
                  Poor
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="one-star"
                  name="star-rating"
                  defaultValue="one-star"
                />
                <label className="form-check-label" htmlFor="one-star">
                  Terrible
                </label>
              </div>
            </div>
          </div>
          <hr />
          <div className="form-group row">
            <div className="col-sm-3">
              <label className="control-label" htmlFor="visit-purpose">
                Things You Liked:
              </label>
            </div>
            <div className="col-sm-9">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="service"
                  defaultValue="service"
                />
                <label className="form-check-label" htmlFor="service">
                  Service
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="value"
                  defaultValue="value"
                />
                <label className="form-check-label" htmlFor="value">
                  Value
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="sleep-quality"
                  defaultValue="sleep-quality"
                />
                <label className="form-check-label" htmlFor="sleep-quality">
                  Sleep Quality
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="cleanliness"
                  defaultValue="cleanliness"
                />
                <label className="form-check-label" htmlFor="cleanliness">
                  Cleanliness
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="facilities"
                  defaultValue="facilities"
                />
                <label className="form-check-label" htmlFor="facilities">
                  Facilities
                </label>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-3">
              <label className="control-label" htmlFor="comment">
                Comments:
              </label>
            </div>
            <div className="input-group col-sm-9">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon-mail">
                  <i className="fa fa-comment" />
                </span>
              </div>
              <textarea
                className="form-control"
                rows={5}
                id="comment"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-12 submit-button">
              <button
                type="submit"
                id="submit"
                className="btn btn-default"
                aria-pressed="true"
              >
                Submit Form
              </button>
            </div>
          </div>
        </form>{" "}
        {/* close form */}
      </div>{" "}
      {/* close form content div */}
    </div>{" "}
    {/* close row */}
  </div>
  {/*  close container */}
  <footer></footer>
</>

   </>
  )
}

export default FormTwo