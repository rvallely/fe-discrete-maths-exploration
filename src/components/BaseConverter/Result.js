function Result({result}) {
    const resetForm = () => {
        console.log('resetting')
        result.setResult('');
    }
    if (result === '') {
        return <p>hidden</p>
    }
    return (
        <div className='text-center'>
            <h2 className='display'>Result</h2>
            <p className='lead'>{result.result}</p>
            <button onClick={resetForm} className='btn btn-secondary'>Reset</button>
        </div>
    );
}

export default Result;