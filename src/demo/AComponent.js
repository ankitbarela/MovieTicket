import 'bootstrap/dist/css/bootstrap.min.css';
import './AComponent.css';
import React, { useEffect, useState } from "react";


function AComponent() {
    const [numberOfSeats, setNumberOfSeats] = useState(0);
    const [selectedSeatCount, setSelectedSeatCount] = useState(0);
    const [disable, setDisable] = useState(false);

    const [seats, setSeats] = useState(0);
    useEffect(() => {
    }, [])


    const handleChange = (e) => {
        debugger
        var totalSeats = e.target.value;
        setNumberOfSeats(totalSeats)
    }
    const takeData = () => {
        setNumberOfSeats(seats)
        console.log("Number of Seats", numberOfSeats)
    }

    const updateTextArea = () => {
        console.log("Seat select")
    }

    const onSelectSeat = (e) => {
        //  setDisable(true)
        debugger
        var checked = e.target.checked;
        if (checked) {
            setSelectedSeatCount(selectedSeatCount + 1)
        }
        else {
            setSelectedSeatCount(selectedSeatCount - 1)
        }
        console.log("Seat selected")
    }

    return (
        <>
        {selectedSeatCount}
            <div className="seatStructure">
                <center>
                    <table id="seatsBlock">
                        <p id="notification"></p>
                        <tr>
                            <td colspan="6"><div className="screen">SCREEN{selectedSeatCount}</div></td>
                            <br />
                        </tr>

                        <tr>
                            <td></td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td></td>
                        </tr>

                        <tr>
                            <td>A</td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="A1" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="A2" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="A3" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="A4" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="A5" /></td>
                        </tr>

                        <tr>
                            <td>B</td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="B1" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="B2" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="B3" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="B4" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="B5" /></td>
                        </tr>

                        <tr>
                            <td>C</td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="C1" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="C2" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="C3" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="C4" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="C5" /></td>
                        </tr>

                        <tr>
                            <td>D</td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="D1" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="D2" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="D3" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="D4" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="D5" /></td>
                        </tr>

                        <tr>
                            <td>E</td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="E1" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="E2" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="E2" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="E3" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="E4" /></td>
                        </tr>

                        <tr>
                            <td>F</td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="F1" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="F2" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="F3" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="F4" /></td>
                            <td><input disabled={disable} type="checkbox" className="seats" onClick={onSelectSeat} value="F5" /></td>
                        </tr>
                    </table>

                    <br /><button onClick={updateTextArea}>Confirm Selection</button>
                </center>
            </div>

            <br /><br />
        </>
    );
}

export default AComponent;