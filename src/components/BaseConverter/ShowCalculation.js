import { useSearchParams, useLocation } from "react-router-dom"


function ShowCalculation() {
    const [searchParams, setSearchParams] = useSearchParams();
    const startVal = searchParams.get('startVal')
    const fromBase = searchParams.get('fromBase')
    const toBase = searchParams.get('toBase')
    const result = searchParams.get('result')
    let decimal = 0;
    console.log(startVal, fromBase, toBase, result);
    const location = useLocation();
    console.log('location >>', location.state.calcs)
    const calcs = location.state.calcs;


    return ( 
        <div>
            <h1 className='text-center'>Converting between bases</h1>
            <div className='container py-2 border'>
                <h1 className='text-center'>Converting to Decimal</h1>
                <div className='row'>
                    <div className='col text-center p'>(n-1)</div>
                </div>
                <div className='row'>
                    <div className='col '></div>
                    <div className='col'></div>
                    <div className='col-1 text-center p-0'><h1><strong>∑</strong></h1></div>
                    <div className='col m-1 p-0'>d<sub> i</sub> * b &#8305;</div>
                    <div className='col'></div>
                </div>
                <div className='row'>
                    <div className='col text-center'>i=0</div>
                </div>
            </div>
            <div className='calc border border-danger'>
                <p className='border border-primary'>{startVal}<sub>{fromBase}</sub> = {result}<sub>{toBase}</sub></p>
            
                <div id='to-dec-calc' className='border border-success'>
                    <div style={{
                        display: 'flex', 
                        flexDirection: 'row',
                        overflow: 'auto', 
                        maxWidth: '100%',
                        'white-space': 'nowrap',
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
           
                    <div>map = decimal / toBase = quotient | remainder</div>
                    <p>{decimal}</p>
                    <h1>Converting from a decimal</h1>
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
                </div>
            </div>
        </div>
    );
}

export default ShowCalculation;