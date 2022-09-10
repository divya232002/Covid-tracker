import React,{useEffect} from 'react'
import "./Statewise.css"

const Statewise = () => {
  const getCovidData=async()=>{
    const res=await fetch('https://api.covid19india.org/data.json');
    const actualData=await res.json();
    console.log(actualData);
  }

  useEffect(() => {
    getCovidData();  
  }, [])
  
  return (
    <div>
        <div className='container-fluid mt-5'>
            <div className='main-heading'>
                <h1 className='mb-5 text-center'><span className='font-weight-bold'>INDIA </span> COVID-19 Dashboard</h1>
            </div>
            <div className='table-responsive'>
                <table className='table table-hover'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                            <th>Active</th>
                            <th>Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td>State</td>
                            <td>Confirmed</td>
                            <td>Recovered</td>
                            <td>Deaths</td>
                            <td>Active</td>
                            <td>Updated</td>
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>Confirmed</td>
                            <td>Recovered</td>
                            <td>Deaths</td>
                            <td>Active</td>
                            <td>Updated</td>
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>Confirmed</td>
                            <td>Recovered</td>
                            <td>Deaths</td>
                            <td>Active</td>
                            <td>Updated</td>
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>Confirmed</td>
                            <td>Recovered</td>
                            <td>Deaths</td>
                            <td>Active</td>
                            <td>Updated</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Statewise