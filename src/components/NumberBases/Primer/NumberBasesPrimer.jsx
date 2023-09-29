import React from 'react';
import cuteDog from '../../../assets/cuteDog.jpg';
import dogAndLanguageRepresentations4 from '../../../assets/dogAndLanguageRepresentations4.png'
import numberHoursInADayRepresentations from '../../../assets/numberHoursInADayRepresentations.png'
import countingOnHandsHorizontal from '../../../assets/countingOnHandsHorizontal.png';
import avatarHandCountingHorizontal from '../../../assets/avatarHandCountingHorizontal.png';

function NumberBasesPrimer(params) {
  return (
    <div className="container-fluid page light-page dark-font content">
        <div className='center-item text-align-center'>
            <h2 className='title'><strong>Number Bases Primer</strong></h2>
            <p></p>
            <p 
            className='statement-font-size statement-margins'
            >
                <strong>
                    As the concept of number bases can be a little tricky to get our minds around, here's a primer.
                </strong>
            </p>
        </div>
        <div
            id=""
            className="row align-contents-center"
        >
            <div
            id="math-branch-container-one"
            className="col-sm"
            style={{ border: 'solid red' }}
            >
                <p className="what-is-discrete-math-math-branch-text statement-font-size statement-margins"style={{ border: 'solid blue' }}>
            It's easy to grasp that language is a code. The animal we represent with the word 'dog' in English can also be represented as ‘perro’, ‘chien’, ‘Hund’, ‘犬’ (inu), ‘собака’ (sobaka) in Spanish, French, German, Japanese and Russian respectively. We don't question the value they represent, we instead accept the same value has different representations.
            </p>
            </div>
            <div
            id="math-branch-container-two"
            className="col-sm"
            // style={{ border: 'solid blue' }}
            >
            <img
                src={dogAndLanguageRepresentations4}
                alt="Cute dog running"
                className=""
                id="cute-dog"
            />
            </div>
        </div>
        <p></p>
            <p 
            className='statement-font-size statement-margins text-align-center'
            >
                <strong>
                Number representation, however, seems a more fixed and universal language. 
                </strong>
            </p>
        
        <div
            id=""
            className="row align-contents-center"
        >
            <div
            id="math-branch-container-one"
            className="col-sm"
            style={{ border: 'solid red' }}
            >
                <p className="what-is-discrete-math-math-branch-text statement-font-size statement-margins"style={{ border: 'solid blue' }}>
                If we were to represent the number of hours in a day, we could use 24, 11000, 80, 88, 220 or 24, which are the decimal, binary, hexadecimal, octal, quaternary, and hexatrigesimal representations respectively.
            </p>
            </div>
            <div
            id="math-branch-container-two"
            className="col-sm"
            // style={{ border: 'solid blue' }}
            >
            <img
                src={numberHoursInADayRepresentations}
                alt="Cute dog running"
                className=""
                id="cute-dog"
            />
            </div>
        </div>
        <p className='text-align-center statement-font-size statement-margins'>So why does these representations look so strange? Well, because it's something new to most of us. Unlike spoken or written language, almost everyone on the planet uses the same number system, the decimal number system, which uses only the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9. 


</p>
<img
                src={countingOnHandsHorizontal}
                alt="Cute dog running"
                className=""
                id="cute-dog"
>
</img>
<p className="what-is-discrete-math-math-branch-text statement-font-size statement-margins">

Most civilisations have based their number systems around ten (or sometimes five), because our species used its fingers to count, of which most of us have ten in total with five on each hand.
</p>
<p className="what-is-discrete-math-math-branch-text statement-font-size statement-margins">
    It's no coincidence the word digit can refer to our fingers or toes, as well as numbers, or that the words five and fist have similar etymological roots.
</p>
<img
                src={avatarHandCountingHorizontal}
                alt="Cute dog running"
                className=""
                id="cute-dog"
>
</img>
<p className="what-is-discrete-math-math-branch-text statement-font-size statement-margins">
                But there's nothing special about 10. Had our species developed with 8 fingers like the Na'vi from Avatar, our ways of counting would probably have been different.
                </p>
                <p className="what-is-discrete-math-math-branch-text statement-font-size statement-margins">
It’s clearer to understand this different number system, if we pronounce the numbers as ‘one, two, three, four, five, six, seven, one zero, one one, one two etc. 
</p>
<p className="what-is-discrete-math-math-branch-text statement-font-size statement-margins">
It’s simply a repeating pattern that is confined by the number of available digits in the system. The base ten system has ten digits, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. The base eight system has eight available digits, 0, 1, 2, 3, 4, 5, 6, 7.
            </p>
{/* <div
            id=""
            className="row align-contents-center"
        >
            <div
            id="math-branch-container-one"
            className="col-sm"
            style={{ border: 'solid red' }}
            >
                <p className="what-is-discrete-math-math-branch-text statement-font-size statement-margins">

                Most civilisations have based their number systems around ten (or sometimes five), because our species used its fingers to count, of which most of us have ten in total with five on each hand.
                </p>
                <p className="what-is-discrete-math-math-branch-text statement-font-size statement-margins">
                    It's no coincidence the word digit can refer to our fingers or toes, as well as numbers, or that the words five and fist have similar etymological roots.
                </p>
            </div>
            <div
            id="math-branch-container-two"
            className="col-sm"
            // style={{ border: 'solid blue' }}
            >
            <img
                src={countingOnHands}
                alt="Cute dog running"
                className=""
                id="cute-dog"
            />
            </div>
        </div>
        <div
            id=""
            className="row align-contents-center"
        >
            <div
            id="math-branch-container-one"
            className="col-sm"
            style={{ border: 'solid red' }}
            >
                <p className="what-is-discrete-math-math-branch-text statement-font-size statement-margins">
                But there's nothing special about 10. Had our species developed with 8 fingers like the Na'vi from Avatar, our ways of counting would probably have been different.
                </p>
                <p className="what-is-discrete-math-math-branch-text statement-font-size statement-margins">
It’s clearer to understand this different number system, if we pronounce the numbers as ‘one, two, three, four, five, six, seven, one zero, one one, one two etc. 
</p>
<p className="what-is-discrete-math-math-branch-text statement-font-size statement-margins">
It’s simply a repeating pattern that is confined by the number of available digits in the system. The base ten system has ten digits, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. The base eight system has eight available digits, 0, 1, 2, 3, 4, 5, 6, 7.
            </p>
            </div>
            <div
            id="math-branch-container-two"
            className="col-sm"
            // style={{ border: 'solid blue' }}
            >
            <img
                src={avatarHandCounting}
                alt="Cute dog running"
                className=""
                id="cute-dog"
            />
            </div>
        </div> */}
        <div>

        </div>
    </div>
  );
}

export default NumberBasesPrimer;
