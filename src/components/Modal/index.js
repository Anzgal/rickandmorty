import './Modal.css';
import moment from 'moment';

function Modal(props) {

    const { created, gender, image, location, name, origin, species, status, type } = props.character;

    return props.open ? (
        <section className="modal-container" id="modal">
            <div className="modal-content">
                <img src={image} alt="Avatar" style={{ width: "50%" }} />

                <h1>{name}</h1>

                <ul>
                    <li key={1}>Created: {moment(created).format("MMM Do YY")}</li>
                    <li key={2}>Gender: {gender}</li>
                    <li key={3}>Origin: {origin.name}</li>
                    <li key={4}>Location: {location.name}</li>
                    <li key={5}>Species: {species}</li>
                    <li key={6}>Status: {status}</li>
                    <li key={7}>Type: {type}</li>
                </ul>

                <button className="closebutton" onClick={props.onClose}>Close</button>


            </div>
        </section>
    ) : null;

}

export default Modal;