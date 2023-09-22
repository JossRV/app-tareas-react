export const Footer = ({porcentaje}) => {
  return (
    <div className="position-fixed fixed-bottom">
      <div className="progress">
        <div className="progress-bar bg-success progress-bar-animated" role="progressbar" style={{ width: porcentaje >= 0 ?`${porcentaje * 100}%` : `0%` }}>{porcentaje >= 0 ?`${porcentaje * 100}%` : `0%`}</div>
      </div> 
    </div>

    // <div className="progress">
    //   <div className="progress-bar bg-primary progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
    // </div>
  )
}
