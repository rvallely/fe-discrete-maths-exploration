function ExponentMethod({ calculations, result, inputValue, fromBase }) {    
    return (
<div style={{ marginTop: '2%', marginBottom: '2%' }} className="text-center">
      <h2 className="text-decoration-underline">Step 1</h2>
      <div className="center-item rounded-box" style={{ width: 'fit-content', padding: '2%', backgroundColor: 'white', borderWidth: '2px', borderColor: '#150e60' }}>
        <h3 style={{ marginBottom: '4%' }}><strong>Converting to a Decimal Number</strong></h3>
        <div className="text-align-left">
            <p>{calculations.firstLine}</p>
            <p>{calculations.secondLine}</p>
            <p>{calculations.thirdLine}</p>
            <p>{calculations.fouthLine}</p>
        </div>
        <p style={{ paddingTop: '2%'}}>
            <strong>
                {inputValue}
            <sub>{fromBase}</sub>
            {' '}
            =
            {' '}
            {result}
            <sub>{10}</sub>
            </strong>
        </p>
      </div>
</div>
    )
}

export default ExponentMethod;