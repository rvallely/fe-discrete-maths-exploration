import { useSearchParams, useLocation } from "react-router-dom"

function ShowCalculation() {
    const [searchParams, setSearchParams] = useSearchParams();
    const startVal = searchParams.get('startVal')
    const fromBase = searchParams.get('fromBase')
    const toBase = searchParams.get('toBase')
    const result = searchParams.get('result')
    let decimal = 0;
    const location = useLocation();

    return ( 
        <div className='text-center'>
            <h1 className='text-center text-decoration-underline'>Step 1</h1>
            <div className='container border border-dark p-1 m-1'>
                <h3 className='text-center'>Converting to a Decimal Number</h3>
                <div className='row'>
                    <div className='col text-center p'>({startVal.length}-1)</div>
                </div>
                <div className='row'>
                    <div className='col '></div>
                    <div className='col'></div>
                    <div className='col-1 text-center p-0'><h1><strong>∑</strong></h1></div>
                    <div className='col m-1 p-0'>d<sub> i</sub> * {fromBase} &#8305;</div>
                    <div className='col'></div>
                </div>
                <div className='row'>
                    <div className='col text-center'>i=0</div>
                </div>
                <div id='to-dec-calc' className='text-start ms-2 mt-2 mb-2'>
                    <div style={{
                        display: 'flex', 
                        flexDirection: 'row',
                        overflow: 'auto', 
                        maxWidth: '100%',
                        whiteSpace: 'nowrap',
                        }}>
                        {startVal.split('').reverse().map((d, i) => {
                            if (d.charCodeAt(0) > 64 && d.charCodeAt(0) <= 90) {
                                d = 10 + (d.charCodeAt(0) - 65);
                            }
                            else if (d.charCodeAt(0) > 96 && d.charCodeAt(0) <= 122) {
                                d = 36 + (d.charCodeAt(0) - 97);
                            }
                            decimal += d * fromBase ** i;
                            if (i === 0) {
                                return (
                                    <div>
                                        <p>= ({d} * {fromBase}<sup>{i})</sup></p>
                                        <p>= {d * fromBase ** i}</p>
                                    </div>
                                )
                            }
                            return (
                                <div> 
                                    <p>+ ({d} * {fromBase}<sup>{i})</sup></p>
                                    <p>+ {d * fromBase ** i}</p>
                                </div>
                            )
                        })}
                    </div>
                    <p>= {decimal}</p>
                </div>    
                <p>{startVal}<sub>{fromBase}</sub> = {decimal}<sub>{10}</sub></p>
            </div>

            <h1 className='text-decoration-underline'>Step 2</h1>
            <div className='border border-dark p-1 m-1'>
                <h3>Converting from a Decimal Number</h3>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Quotient</th>
                            <th>Remainder</th>
                        </tr>
                    </thead>
                    <tbody>
                        {location.state.calcs.map((calc) => (
                            <tr key={calc._id}>
                                <td>{calc.val} / {calc.toBase} = {calc.newVal}</td>
                                <td>{calc.remainder}</td> 
                            </tr>
                        ))}
                    </tbody>
                 </table>
                <p>{decimal}<sub>{10}</sub> = {result}<sub>{toBase}</sub></p>
            </div>
        </div>
    );
}

export default ShowCalculation;