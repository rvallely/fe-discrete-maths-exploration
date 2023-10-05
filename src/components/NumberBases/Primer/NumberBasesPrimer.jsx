import React from 'react';
import { useState } from 'react';
import dogAndLanguageRepresentations4 from '../../../assets/dogAndLanguageRepresentations4.png'
import numberHoursInADayRepresentations from '../../../assets/numberHoursInADayRepresentations.png'
import countingOnHandsHorizontal from '../../../assets/countingOnHandsHorizontal.png';
import avatarHandCountingHorizontal from '../../../assets/avatarHandCountingHorizontal.png';
import base8RepeatingTable from '../../../assets/base8RepeatingTable.png';
import DynamicNumberBaseTable from './DynamicNumberBaseTable';

function NumberBasesPrimer(params) {
    const [base, setBase] = useState('');
    const [table, setTable] = useState(undefined);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setTable(undefined);
        if (!/^[0-9]+$/.test(base)) {
            setError('Base must be a number between 2 and 36.');
            return;
        }
        if (Number(base) < 2 || Number(base) > 36) {
            setError('Base must be between 2 and 36.');
            return;
        }
        setTable(<DynamicNumberBaseTable base={base}/>)
    }

    const resetForm = () => {
        document.getElementById('number-base-system-form').reset();
        setTable(undefined);
      };
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
            className="row align-contents-center number-base-section-margins real-world-use-example rounded-box"
        >
            <div
            id="math-branch-container-one"
            className="col-sm"
            >
                <p className="what-is-discrete-math-math-branch-text statement-font-size statement-margins"
                >
            It's easy to grasp that language is a code. The animal we represent with the word 'dog' in English can also be represented as &apos;perro&apos;, &apos;chien&apos;, &apos;Hund&apos;, &apos;犬&apos; (inu), &apos;собака&apos; (sobaka) in Spanish, French, German, Japanese and Russian respectively. We don't question the value they represent, we instead accept the same value has different representations.
            </p>
            </div>
            <div
            id="math-branch-container-two"
            className="col-sm"
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
            className="row align-contents-center number-base-section-margins real-world-use-example rounded-box"
        >
            <div
            id="math-branch-container-one"
            className="col-sm"
            >
                <p className="what-is-discrete-math-math-branch-text statement-font-size statement-margins">
                If we were to represent the number of hours in a day, we could use 24, 11000, 80, 88, 220 or 24, which are the decimal, binary, hexadecimal, octal, quaternary, and hexatrigesimal representations respectively.
            </p>
            </div>
            <div
            id="math-branch-container-two"
            className="col-sm"
            >
            <img
                src={numberHoursInADayRepresentations}
                alt="Cute dog running"
                className=""
                id="cute-dog"
            />
            </div>
        </div>
        <div className='number-base-section-margins'>
            <p className='statement-font-size statement-margins text-align-center'>
                <strong>
                    So, why do these representations look so strange? Well, because it's something new to most of us.
                </strong>
            </p>
        </div>
        <div className='number-base-section-margins statement-margins real-world-use-example rounded-box'>
            <p className="what-is-discrete-math-math-branch-text statement-font-size" style={{ padding: '2%'}}>
             Unlike spoken or written language, almost everyone on the planet uses the same number system, the decimal number system, which uses only the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9. Most civilisations have based their number systems around ten (or sometimes five), because our species used its fingers to count, of which most of us have ten in total with five on each hand.
            </p>
            <img
                src={countingOnHandsHorizontal}
                alt="hands and feet with number on each digit (1-20)"
                className="number-base-horizontal-image center-item"
            >
            </img>
            <p className="what-is-discrete-math-math-branch-text statement-font-size" style={{ padding: '2%'}}>
                It's no coincidence the word digit can refer to our fingers or toes, as well as numbers, or that the words five and fist have similar etymological roots.
            </p>
        </div>
        <div className='number-base-section-margins '>
            <p className='statement-font-size statement-margins text-align-center'>
                <strong>
                But there's nothing special about 10. 
                </strong>
            </p>
        </div>
        <div className='number-base-section-margins statement-margins real-world-use-example rounded-box'>
            <p className="what-is-discrete-math-math-branch-text statement-font-size" style={{ padding: '2%'}}>
            Had our species developed with 8 fingers like the Na'vi from Avatar, our ways of counting would probably have been different. It&apos;s clearer to understand this different number system, if we pronounce the numbers as one, two, three, four, five, six, seven, one zero, one one, one two etc. 
            </p>
            <img
                src={avatarHandCountingHorizontal}
                alt="Na'vi hands and feet (4 digits on each) counting in base eight from 1-20"
                className="number-base-horizontal-image center-item"
            >
            </img>
            <p className="what-is-discrete-math-math-branch-text statement-font-size" style={{ padding: '2%'}}>
            It&apos;s simply a repeating pattern that is confined by the number of available characters in the system. The base ten system has ten characters (0-9). We begin with 0 and count 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, but as there are no more characters in the system, we start counting again at 0 and preceed each number with 1: 10, 11, 12, 13, 14, 15, 16, 17, 18, 19. Now we've run out of characters again so we repeat the count with the character after 1 which is 2: 20, 21, 22, 23, 24, 25, 26, 27, 28, 29 and so on. 
            </p>
            <p  className='what-is-discrete-math-math-branch-text statement-font-size' style={{ padding: '2%'}}>The base eight system has eight available digits, 0, 1, 2, 3, 4, 5, 6, 7. Look at how the number system is formed from this repeating pattern below.</p>
            <img
                src={base8RepeatingTable}
                alt="Na'vi hands and feet (4 digits on each) counting in base eight from 1-20"
                className='center-item'
                style={{ width: '50%', height: 'auto' }}
            >
            </img>
        </div>
        <div style={{ backgroundColor: '#FDFFF4' }} className='rounded-box rounded-box-shadow'>
            <form onSubmit={handleSubmit} id="number-base-system-form" className='center-item'style={{ width: '40%'}}>
                <div className="mb-4 mt-4 input-group statement-font-size" style={{ width: '100%' }}>
                    <label htmlFor="base" className="form-label">Enter in a base between 2 and 36 to see how the numbers in the system are formed through a repeating pattern:</label>
                </div>
                <div className="mb-4 input-group" style={{ width: '100%' }}>
                  <input
                    type="text"
                    className="form-control statement-font-size"
                    id="base"
                    placeholder="eg. 16"
                    onChange={(e) => setBase(e.target.value)}
                  />
                </div>
                <div className="mt-4 mb-0 text-align-center">
                  <button type="submit" className="btn btn-primary statement-font-size" style={{ width: '40%'}}>
                    Get number system
                  </button>
                </div>
                <div className="mt-4 mb-0 text-align-center">
                    <button type="button" onClick={resetForm} className="btn btn-secondary text-center statement-font-size" style={{ width: '40%'}}>Reset</button>
                </div>
            </form>
            <p className="text-danger text-align-center mt-4 mb-4">{error}</p>
            <div className='mt-4 mb-4' style={{ marginLeft: '1%', marginRight: '1%' }}>
                {table? table : ''}
            </div>
        </div>
    </div>
  );
}

export default NumberBasesPrimer;
