import nutellaBarcode from '../../../../../assets/nutellaBarcode.gif';
import nutellaSlice2 from '../../../../../assets/nutellaSlice2.png';
import upcBitGrouping from '../../../../../assets/upcBitGrouping.png';
import jarOfNutella from '../../../../../assets/jarOfNutella.png'

function UpcExample(params) {
    return (
    <div
    className='row align-contents-center number-base-section-margins real-world-use-example rounded-box'
    style={{ paddingLeft: '3%', paddingRight: '3%' }}
    >
        <div
        id="math-branches-container"
        className="row"
        style={{ marginTop: '2%'}}
        >
            <div
            id="math-branch-container-one"
            className="col-sm text-align-center"
            style={{ display: 'grid', placeItems: 'center' }}
            >
                <p>
                    Universal Product Codes (UPCs) or bar codes are used to identify products and allow tracking of products in the retail and logistics industries. They provide a machine readable representation of a unique identification number associated with a product and are on just about everything you buy.
                </p>
            </div>
            <div
            id="math-branch-container-two"
            className="col-sm text-align-center"
            >
                <div className='rounded-box' style={{ backgroundColor: 'white', borderWidth: '1px' }}>
                    <img src={nutellaBarcode} style={{ padding: '4%' }}>
                    </img>
                </div>
            </div>
        </div>
        <p style={{ margin: '2%' }}>
            Taking a slice of the above code let's have a closer look at how it contains information. As the computer scans from left to right it assigns the first black bar as a 1, a 0 to the equally wide gap next to it. The remaining bars and gaps can be a width of the first bit in the sequence, or two, three, or four times the width of it. They are what they are assigned is dependent on their comparative width.
        </p>
        <div className='rounded-box' style={{ backgroundColor: 'white', borderWidth: '1px', padding: '1%' }}>
            <img src={nutellaSlice2} className='center-item'></img>
        </div>
        <p style={{ marginTop: '2%'}}>Put together, we get the 95 bit sequence:</p>
        <p>10100011010001101000101101101110001101000110101010100100011101001001110111001011100101000100101</p>

        <div
        id="math-branches-container"
        className="row"
        style={{ marginTop: '2%'}}
        >
            <div
            id="math-branch-container-one"
            className="col-sm text-align-center"
            >
        <div className='rounded-box' style={{ backgroundColor: 'white', width: '100%', borderWidth: '1px' }}>
                    <p className='statement-margins' style={{ marginTop: '2%', width: 'fit-content' }}>We can group the bits as follows:</p>
                    <img
                    src={upcBitGrouping}
                    style={{ width: '80%', padding: '2%'}}></img>
        </div>
        <table class="table table-bordered rounded-box" style={{ backgroundColor: 'white', marginTop: '4%' }}>
        <thead className="table-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Left Hand</th>
                <th scope="col">Right Hand</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th className="table-dark">0</th>
                <td>0001101</td>
                <td>1110010</td>
            </tr>
            <tr>
                <th className="table-dark">1</th>
                <td>0011001</td>
                <td>1100110</td>
            </tr>
            <tr>
                <th className="table-dark">2</th>
                <td>0010011</td>
                <td>1101100</td>
            </tr>
            <tr>
                <th className="table-dark">3</th>
                <td>0111101</td>
                <td>1000010</td>
            </tr>
            <tr>
                <th className="table-dark">4</th>
                <td>0100011</td>
                <td>1011100</td>
            </tr>
            <tr>
                <th className="table-dark">5</th>
                <td>0110001</td>
                <td>1001110</td>
            </tr>
            <tr>
                <th className="table-dark">6</th>
                <td>0101111</td>
                <td>1010000</td>
            </tr>
            <tr>
                <th className="table-dark">7</th>
                <td>0111011</td>
                <td>1000100</td>
            </tr>
            <tr>
                <th className="table-dark">8</th>
                <td>0110111</td>
                <td>1001000</td>
            </tr>
            <tr>
                <th className="table-dark">9</th>
                <td>0001011</td>
                <td>1110100</td>
            </tr>
        </tbody>
    </table>
            </div>
            <div
            id="math-branch-container-two"
            className="col-sm text-align-center"
            style={{ display: 'grid', placeItems: 'center' }}
            >
                <div className='statement-margins rounded-box' style={{ backgroundColor: 'white', borderWidth: '1px', textAlign: 'left' }}>
                <div style={{ padding: '2%' }}
                    >
                <p> * The first 3 bits are always 101. They help orient the computer scanner. Using the first 101, the scanner knows the baseline 1 bit width to measure the other bars and gaps against. This means barcodes can be different sizes to suit the different size packaging they will be printed on.
        </p>
        <p>
            * Then, we look at the next 42 bits, which are split into six 7 bit groups each representing a digit of the UPC.
        </p>
        <p>
        * Next, there is a 5 bit centre guard pattern which is always 01010. This is a built in error check and is one of the precautions taken against tampered with or badly printed UPCs. If the computer scanner doesn’t find the centre guard pattern where its supposed to be it won’t accept the code is a valid UPC.
        </p>
        <p>
            * The centre guard pattern is followed by another 42 bits, again split into 6 7 bit groups, each representing a UPC digit.
        </p>
        <p>
            * Lastly the code contains a right hand guard pattern, which allows the code to be scanned right to left as well as left to right.
        </p>
        </div>
                </div>
            </div>
        </div>
        <div
        id="math-branches-container"
        className="row"
        style={{ marginTop: '2%'}}
        >
            <div
            id="math-branch-container-one"
            className="col-sm text-align-center"
            >
                <div className='statement-margins rounded-box' style={{ backgroundColor: 'white', borderWidth: '1px', textAlign: 'left', padding: '2%' }}>
                    <div style={{ padding: '2%' }}
                    >
                        <p>
                        Using the translation table to the left, we can translate the binary to the UPC which is 
                        <strong> 0 09800 89500 7</strong>.
                    </p>
                    <p>
                        UPCs are further broken down into: 
                    </p>
                    <p>
                        <strong>0</strong> -  the UPC number system (Standard UPC)
                    </p>
                    <p>
                        <strong>09800</strong> - the manufacturer code (Ferrero Usa)
                    </p>
                    <p>
                        <strong>89500</strong> - product code (Nutella Hazelnut Spread 13 Oz)
                    </p>
                    <p>
                        <strong>7</strong> - modulo check character (<a style={{ textDecoration: 'none' }} className='clickable' href='https://www.barcodefaq.com/1d/upc-ean/#MOD_10' target='_blank'>more information here</a>)
                    </p>
                    </div>
                    
                </div>
            </div>
            <div
            id="math-branch-container-two"
            className="col-sm text-align-center"
            >
                <img className='center-item' src={jarOfNutella}></img>
     
            </div>

        </div>
        <div className='statement-margins' style={{ textAlign: 'left', padding: '2%' }}>
                    <p>Again, we had an established system, to group, translate and then interpret the meaning of each
group to the four pieces of information above to give
the translated numbers their meaning. 
<p/>
Number systems are just coded message. They include
an input, a pre established translation system and an
output.
        </p>
                </div>
    </div>
    )
}

export default UpcExample;