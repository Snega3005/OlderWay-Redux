import { useSelector, useDispatch } from "react-redux"
import {addMoney, debitMoney} from '../Store'

export default function UserInfo() {
     let data = useSelector(state => state.user)
     const dispatch = useDispatch();
    return (
        <div>
            <h1>{data.username}, {data.balance}</h1>
            <button onClick= {()=> dispatch(addMoney(500))}>
                Add 500
            </button>

            <button onClick= {()=> dispatch(debitMoney(500))}>
                Debit 500
            </button>
        </div>
    )
}