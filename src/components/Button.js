import style from './Button.module.css';

export function Button({ color, onClick }) {
    return (
        <button onClick={onClick} className="border border-solid border-1 p-2 rounded-lg">
            Купить!
        </button>
    );
}
