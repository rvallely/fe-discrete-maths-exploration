import brailleAlphabet from '../../../../../assets/brailleAlphabet.png';
import brailleCharacterNumbering from '../../../../../assets/brailleCharacterNumbering.png';
import codeInBraille from '../../../../../assets/codeInBraille.png';

function BrailleExample () {
    return <div
    className="row align-contents-center number-base-section-margins real-world-use-example rounded-box"
    style={{ marginLeft: '2%', marginRight: '2%' }}
>

    <p className='text-align-center' style={{ padding: '2%' }}>
        Braille is a written language for people with visual impairments, in which each character is constructed by six dots, each of which can be raised or not raised. As each dot can be in one of two states, it is a binary system.
    </p>
    <div
        id="math-branches-container"
        className="row"
    >
        <div
            id="math-branch-container-one"
            className="col-sm text-align-center"
        >
            <div className='rounded-box' style={{ backgroundColor: 'white', marginBottom: '4%', borderWidth: '1px' }}>
                <img
                    src={brailleAlphabet}
                    alt=""
                    className=""
                    style={{ padding: '2%' }}
                />
            </div>

            <div className='rounded-box' style={{ backgroundColor: 'white',  padding: '2%', borderWidth: '1px' }}>
                <p>The dots that make up each character are commly numbered:</p>
                <img
                    src={brailleCharacterNumbering}
                    alt=""
                    className="center-item"
                    style={{ width: '40%', height: 'auto' }}
                />
            </div>
        </div>
        <div
            id="math-branch-container-two"
            className="col-sm"
            style={{ display: 'grid', placeItems: 'center' }}
        >
            <div className='center-item rounded-box' style={{ backgroundColor: 'white', borderWidth: '1px', padding: '2%' }}>
                <p style={{ marginTop: '4%', marginBottom: '4%' }} className='text-align-center'>This is the word 'code' in Braille.</p>
                <img src={codeInBraille} style={{ width: '70%', height: 'auto' }} className='center-item'>
                </img>
                <p className='statement-margins' style={{ marginTop: '4%', marginBottom: '4%' }}>Read in the numbered way to the left, we can translate the characters to binary: </p>
                <p style={{ marginTop: '4%', marginBottom: '4%' }} className='text-align-center'><strong>100100  101010  100110  100010</strong></p>
                <p className='statement-margins' style={{ marginTop: '4%', marginBottom: '4%' }}>Here, we have a four 6 bit encoded messages, with each message requiring 6 bits to contain its unit of information.</p>
            </div>
        </div>
        <p className='text-align-center' style={{ marginTop: '4%' }}>The key to note here is the meaning of a bit or collection of bits (also called a byte) is always understood contextually. 1s and 0s in the first example meant a bakery was open or closed and ultimately whether someone would get bread or not. In this example, the 1s and 0s correspond to the a dot in a Braille character being raised or not and what character is being represented. The Braille alphabet is an already established context for this 1s and 0s representation.</p>
    </div>
</div>
}

export default BrailleExample;