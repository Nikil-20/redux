import { useSelector, useDispatch } from "react-redux";
import { incCount, decCount, resetCount } from "../actions/index";

function Counter() {
    const count = useSelector((store) => store.incDecReducer);
    const dispatch = useDispatch();
    const incrementCount = ()=>{
        const value = parseInt(window.prompt("enter the count: "))
        dispatch(incCount(value))
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8">
                <p className="text-2xl font-bold mb-6 text-center">
                    Count: <span className="text-blue-500">{count}</span>
                </p>
                
                <div className="flex space-x-4 mb-4">
                    <button
                       onClick={incrementCount}
                        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-all duration-300"
                    >
                        Increment
                    </button>
                    <button
                        onClick={() => dispatch(decCount())}
                        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-all duration-300"
                    >
                        Decrement
                    </button>
                </div>

                <button
                    onClick={() => dispatch(resetCount())}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300 w-full"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Counter;
