import tealBakeryOpenOrClosed from '../../../../../assets/tealBakeryOpenOrClosed.png';
import tealAndRedBakeries from '../../../../../assets/tealAndRedBakeries.png';

function BakeryExample () {
    return <div className='real-world-use-container'>
        <h2 className='statement-margins underline'>
            <strong>
                Communication with Computers and an Introduction to Binary
            </strong>
        </h2>
        <p className='statement-margins'>
            When it comes down to it, every iteraction with a computer ends up in binary format. It's the only languge they understand. The binary system as its name would suggest consists of two characters, 0 and 1. These are called binary digits. In the late 1940s, American mathematician John Wilder Tukey realised the words binary and digit were likely to become more widely used as computers were being established and decided to coin a shorter term. He considered bigit and binit, but ultimately settled on bit.
        </p>
        <p className='statement-margins'>
            So, what is a bit? Well in its simplest form it is a &apos;Yes&apos; or a &apos;No&apos;. A more rounded answer would be to say bits are the building blocks of computed information. A bit is the smallest amount of information possible. Any less than a bit would be no information at all. Bits or binary digits bridge the gap between arithmetic and electricity, software and hardware, and ultimately humans and computers. So they're pretty important.
        </p>
        <p className='statement-margins'>
            Take a look at some examples below to start getting to grips with binary data and its vital role in computing information.
        </p>
        <div
            className="row align-contents-center number-base-section-margins real-world-use-example rounded-box"
        >
            <p className='text-align-center' style={{ padding: '2%' }}>
                You're on your way to the high street to visit your favourite bakery and get some bread. When you arrive you will be faced with one of two options.
            </p>
            <img id='' className='' src={tealBakeryOpenOrClosed} style={{ width: '80%' }}>
            </img>
            <div
            className='rounded-box'
            style={{
                width: 'fit-content',
                backgroundColor: 'white',
                borderWidth: '1px',
                padding: '2%',
                marginTop: '2%',
                marginBottom: '2%'
            }}>
                <p className='text-align-center'>We could also write these two possibilities as: </p>
                <div className='center-item' style={{ width: 'fit-content' }}>
                    <p>1 = go in and get bread</p>
                    <p>0 = can't go in and get bread</p>
                </div>
            </div>
        </div>
        <p className='text-align-center statement-margins'>
            <strong>
                This is an example of a 1 bit encoded message, as it only takes 1 bit to contain a message. With 1 bit encoding there are 2 possibilities (1 and 0) for each unit of information.
            </strong>
        </p>
        <div className='row align-contents-center number-base-section-margins real-world-use-example rounded-box'>
            <p className='text-align-center' style={{ padding: '2%' }}>
                What if another bakery opened up next door to your favourite bakery?
            </p>
            <div
                id="math-branches-container"
                className="row"
            >
                <div
                    id="math-branch-container-one"
                    className="col-sm text-align-center"
                    style={{ height: 'fit-content' }}
                >
                    <p>The possibilites on your arrival would be:</p>
                    <img
                        src={tealAndRedBakeries}
                        alt=""
                        className=""
                    />
                </div>
                <div
                    id="math-branch-container-two"
                    className="col-sm text-align-center"
                    style={{}}
                >
                    <div
                        className='rounded-box center-item'
                        style={{
                            borderWidth: '1px',
                            width: 'fit-content',
                            textAlign: 'left',
                            backgroundColor: 'white',
                            padding: '2%',
                            marginTop: '8%',
                            marginBottom: '8%',
                        }}>
                        <p>11 = both bakeries open, you get bread</p>
                        <p>10 = teal bakery open, red bakery closed, you get bread</p>
                        <p>01 = teal bakery closed, red bakery open, you get bread</p>
                        <p>00 = both bakeries closed, you don't get bread</p>
                    </div>
                    <div
                        className='rounded-box center-item'
                        style={{
                            borderWidth: '1px',
                            width: 'fit-content',
                            textAlign: 'left',
                            backgroundColor: 'white',
                            padding: '2%',
                            marginBottom: '8%',
                        }}>
                        <p>
                            This an example of a 2 bit encoding, where it takes 2 bits to convey a message. With 2 bit binary encoding there are 4 possibilities. The formula to calculate possibilities is: number different digits to choose from ** number of characters in the complete unit. As the number system is binary, there are only 2 characters to choose from
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default BakeryExample;