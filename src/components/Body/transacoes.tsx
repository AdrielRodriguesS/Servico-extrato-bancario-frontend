import './styles.css'
import axios from 'axios'
import { useState } from 'react'
import { Conta } from '../../models/Conta'

function Transacoes () {

    const [idConta, setIdConta] = useState('')
    const [conta, setConta] = useState<Conta>({"id":"", "nomeResponsavel" : ""})
    const [msg, setMsg] = useState("")

    return(
        <div className="main-card" translate="no">
            <h2 className="main-title">Transações</h2>
            <div className="card-principal">
                <div className="campos-principais">
                    <div className="nomes-campos">Id / nº da Conta</div>
                    <div>
                        <input
                        className="id-field"
                        type="text"
                        onChange={(e) => setIdConta(e.target.value)}
                        onFocus={(e) => {conta.nomeResponsavel = "", setMsg('')}}
                        ></input>
                    </div>
                </div>
                <div className="campos-principais">
                    <div className="nome-titular">{conta.nomeResponsavel}</div>
                </div>
            </div>
        </div>
    )

}

export default Transacoes