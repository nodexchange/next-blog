import React from 'react'

const LaunchItem = (props) => {
  console.log(props);
  let missionNameClass = props.launch_success ? 'text-success' : 'text-danger'
  console.log('missionNameClass' + missionNameClass);

  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>Mission: <span className={missionNameClass}>{ props.mission_name }</span></h4>
          <p>Date: { props.launch_date_local }</p>
        </div>
        <div className="col-md-3">
          <button className="btn btn-secondary">Launch Details</button>
        </div>
      </div>
    </div>
  )
}

export default LaunchItem
